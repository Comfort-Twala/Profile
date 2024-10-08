"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

let interval: any;

type Card = {
  id: number;
  name: string;
  logo: any;
  title: string;
  period: string;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
  experienceUpdate,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
  experienceUpdate: (index: number) => void;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    // startFlipping();

    return () => clearInterval(interval);
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()!); // move the last element to the front
        return newArray;
      });
    }, 5000);
  };

  const flipCards = () => {
    setCards((prevCards: Card[]) => {
        const newArray = [...prevCards];
        newArray.unshift(newArray.pop()!);
        experienceUpdate(newArray.at(0)!.id);
        return newArray;
    });
  }

  console.log("cards:", cards);
  return (
    <div className="relative  h-60 w-60 md:h-60 md:w-96">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute dark:bg-card bg-white h-60 w-60 md:h-60 md:w-96 rounded-3xl p-4 shadow-xl border border-neutral-200 dark:border-white/[0.1]  shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-row justify-center"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
            }}
            onClick={flipCards}
          >
            <div className="w-2/5 flex flex-col justify-center items-center">
              {card.logo}
            </div>
            <div className="w-3/5 flex flex-col justify-center items-center">
              <p className="text-neutral-500 font-medium dark:text-white">
                {card.name}
              </p>
              <p className="text-neutral-400 font-normal dark:text-neutral-200">
                {card.title}
              </p>
              <p className="text-neutral-400 font-small dark:text-neutral-200">
                {card.period}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};