'use client';
import { attributes, html as HomeContent } from "../content/home.md";

interface Cat {
  name: string;
  description: string;
}

export default function Home() {
  const { title, cats } = attributes;

  return (
    <>
      <article>
        <h1>{title}</h1>
        {/* Render the HTML content from the markdown */}
        <div dangerouslySetInnerHTML={{ __html: HomeContent }} />
        <ul>
          {cats.map((cat: Cat, index: number) => (
            <li key={index}>
              <h2>{cat.name}</h2>
              <p>{cat.description}</p>
            </li>
          ))}
        </ul>
      </article>
    </>
  );
}
