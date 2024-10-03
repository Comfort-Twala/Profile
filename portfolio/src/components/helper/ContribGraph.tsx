'use client'
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ContributionDay {
  contributionCount: number;
  date: string;
}

interface ContributionWeek {
  contributionDays: ContributionDay[];
}

interface ContributionData {
  totalContributions: number;
  weeks: ContributionWeek[];
}

interface GitHubData {
  data: {
    user: {
      contributionsCollection: {
        contributionCalendar: ContributionData;
      };
    };
  };
}

const ContributionGraph: React.FC<{ userName: string }> = ({ userName }) => {
  const [data, setData] = useState<ContributionData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
        console.log("fetching data...")
      try {
        const response = await fetch('https://api.github.com/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.GITHUB_API_TOKEN}`,
          },
          body: JSON.stringify({
            query: `
              query($userName:String!) {
                user(login: $userName) {
                  contributionsCollection {
                    contributionCalendar {
                      totalContributions
                      weeks {
                        contributionDays {
                          contributionCount
                          date
                        }
                      }
                    }
                  }
                }
              }
            `,
            variables: { userName },
          }),
        });

        console.log(response)
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const result: GitHubData = await response.json();
        console.log(result)
        setData(result.data.user.contributionsCollection.contributionCalendar);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      }
    };

    fetchData();
  }, [userName]);

  const getColor = (count: number): string => {
    if (count === 0) return 'bg-gray-100 dark:bg-gray-800';
    if (count < 5) return 'dark:bg-green-800 bg-green-200';
    if (count < 10) return 'dark:bg-green-600 bg-green-400';
    if (count < 15) return 'dark:bg-green-400 bg-green-600';
    return 'dark:bg-green-200 bg-green-800';
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <Card className="w-full">
      <CardContent>
        {/* <div className="text-sm mb-2">Total Contributions: {data.totalContributions}</div> */}
        <div className="flex flex-wrap mt-4">
          {data.weeks.slice(-50).map((week, weekIndex) => (
            <div key={weekIndex} className="flex flex-col">
              {week.contributionDays.map((day, dayIndex) => (
                <div
                  key={`${weekIndex}-${dayIndex}`}
                  className={`w-3 h-3 m-0.5 rounded-sm ${getColor(day.contributionCount)}`}
                  title={`${day.date}: ${day.contributionCount} contributions`}
                />
              ))}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ContributionGraph;