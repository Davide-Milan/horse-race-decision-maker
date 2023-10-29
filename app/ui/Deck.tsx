'use client'

import Image from "next/image"
import { Card } from "../types/Card"
import { cardBack } from "../lib/cards"
import { useState } from "react"
import DiscardPile from "./DiscardPile"
import empty from "@/public/images/sprites/empty.png"
interface DeckProps {
  cards : Card[]
  advanceHorse : (seme : string) => void;
}


export default function Deck({ cards, advanceHorse } : DeckProps) {
  const [deck, setDeck] = useState<Card[]>(cards);
  const [drawn, setDrawn] = useState<Card[]>([]);

  const draw = () => {
    console.log(drawn, deck);
    setDrawn((prevDrawn) => [deck[0], ...prevDrawn]);
    setDeck((prevDeck) => prevDeck.slice(1));
  }

  return (
    <div className="deck grid grid-flow-col grid-rows-none justify-evenly items-center">
      {
      deck.length > 0 ?
      <Image 
        src={cardBack.data}
        alt={cardBack.alt}
        onClick={draw}
      />
      :
      <Image 
        src={empty}
        alt={"empty space"}
      />
      
      }
      <DiscardPile cards={drawn}/>
    </div>
  )
}
