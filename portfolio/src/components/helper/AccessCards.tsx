"use client";
import { CardStack } from "../ui/card-stack";

interface AccessCardsProps {
  cards: any,
  onExperienceChange: (index: number) => void
}

export function AccessCards( { cards, onExperienceChange}: AccessCardsProps) {
  console.log("Access Cards: ", cards);

  return (
    <div className="h-[20rem] flex flow-col items-center justify-center w-full">
      <CardStack 
        items={cards} 
        experienceUpdate={onExperienceChange}
      />
    </div>
  );
}