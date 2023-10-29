'use client'

import Image from "next/image"
import { Card, CardType } from "../types/Card"
import { useEffect, useState } from "react"
import { cardBack } from "../lib/cards"

interface CardsLineProps{
  cards : Card[]
  advanceHorse ?: (seme : string) => void;
}

type Position = {
  card: Card,
  horsesPassed: number,
  turned: boolean
}

export default function CardsLine({ cards, advanceHorse } : CardsLineProps) {
  const [positions, setPositions] = useState<Position[]>(cards.map(card => ({card, horsesPassed:0, turned:false})));
  const [lastTurned, setLastTurned] = useState(-1);

  useEffect(() => {
    
  }, [cards])
  
  return (
    <div className="cards_line bg-red-300 items-center grid grid-flow-col justify-items-center justify-evenly gap-2">
      {positions.map((pos,i) => {
        return pos.horsesPassed < 4 ?
        <Image 
          className="max-w-full max-h-full"
          src={cardBack.data}
          alt={cardBack.alt}
          key={`cardBack-${i}`}
        />
        :
        <Image
          className="max-w-full max-h-full"
          src={pos.card.data}
          alt= {pos.card.alt}
          key={pos.card.name}
        />
      })        
      }
    </div>
  )
}
