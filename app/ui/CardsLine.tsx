'use client'

import Image from "next/image"
import { Card, CardType } from "../types/Card"
import { useEffect, useState } from "react"
import { cardBack } from "../lib/cards"
import { HorsePosition } from "../lib/horses"

interface CardsLineProps{
  cards : Card[]
  advanceHorse : (seme : string) => void;
  positions: HorsePosition[];
  lastTurned: number;
  updateTurned: () => void
}

export default function CardsLine({ cards, advanceHorse, positions, lastTurned, updateTurned } : CardsLineProps) {
  const turn = () => {
    advanceHorse(CardType[cards[lastTurned+1].name[0] as keyof typeof CardType])
  }  
  
  useEffect(() => {
    setTimeout(()=>{
    if(positions.every(horse => horse.position >= lastTurned+1)){
      turn();      
      updateTurned();
    }
    },1000)
  }, [positions, lastTurned])
  
  return (
    <div className="cards_line items-center grid grid-flow-col justify-items-center justify-evenly gap-2">
      {cards.map((card,i) => {
        return i > lastTurned ?
        <Image 
          className="max-w-full max-h-full"
          src={cardBack.data}
          alt={cardBack.alt}
          key={`cardBack-${i}`}
        />
        :
        <Image
          className="max-w-full max-h-full"
          src={card.data}
          alt= {card.alt}
          key={card.name}
        />
      })        
      }
    </div>
  )
}
