'use client'

import Image from "next/image"
import { Card, CardType } from "../types/Card"
import { cardBack } from "../lib/cards"
import { useState } from "react"
import DiscardPile from "./DiscardPile"
import empty from "@/public/images/sprites/empty.png"
interface DeckProps {
  cards : Card[]
  advanceHorse : (seme : string) => void;
  clickable: boolean;
}


export default function Deck({ cards, advanceHorse, clickable=true } : DeckProps) {
  const [deck, setDeck] = useState<Card[]>(cards);
  const [drawn, setDrawn] = useState<Card[]>([]);

  const draw = (e : any) => {
    if(clickable){
      e.currentTarget.disabled = true;
      advanceHorse(CardType[deck[0].name[0] as keyof typeof CardType])
      setDrawn((prevDrawn) => [deck[0], ...prevDrawn]);
      setDeck((prevDeck) => prevDeck.slice(1));
      e.currentTarget.disabled = false;
    }
  }

  return (
    <div className="deck grid grid-flow-col grid-rows-none justify-evenly items-center">
      {
      deck.length > 0 ?
      <Image 
        src={cardBack.data}
        alt={cardBack.alt}
        onClick={(e) => draw(e)}
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
