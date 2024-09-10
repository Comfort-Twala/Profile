import Script from "next/script";
import * as utils from "../libs/utils";
import * as button from "../components/ui/button";
import React from "react";

export default function Home() {
  const hero = utils.getMarkup("src/content/homepage", "hero.md");

  if (!hero) {
    return null;
  }

  const { data } = hero;

 return (
    <>
      {/* Enables registering from this page */}
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
      <main>
        <div className="mt-10 flex flex-col items-center">
          <h1 className="text-2xl">{data.title}</h1>
          <p className="text-lg">{data.subtitle}</p>
          <button.Button>{data.buttonText}</button.Button>
        </div>
      </main>
    </>
  );
}