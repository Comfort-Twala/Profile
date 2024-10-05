"use client";
import { CardStack } from "../ui/card-stack";

export function AccessCards(cards: any, currentExperience: number) {
  return (
    <div className="h-[40rem] flex items-center justify-center w-full">
      <CardStack items={cards["cards"]} />
    </div>
  );
}