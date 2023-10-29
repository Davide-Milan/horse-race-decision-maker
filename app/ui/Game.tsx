'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import { shuffle, cardsWithoutHorses, horsesCards } from "@/app/lib/cards";
import RaceTrack from "../ui/RaceTrack";
import CardsLine from "../ui/CardsLine";
import Deck from "../ui/Deck";
import { Card, CardType } from "../types/Card";
import StartLine from "../ui/StartLine";
import { HorsePosition } from "../lib/horses";

export default function Game() {
  const [positions, setPositions] = useState<HorsePosition[]>(horsesCards.map(horse => ({horse: horse, position:0})));
  const [won, setWon] = useState<{done: boolean, horse:string}>({done: false, horse: 'b'});
  
  const advanceHorse = (seme : string) => {
    setPositions(prev => {
      let horseIndex = prev.findIndex(element => CardType[element.horse.name[0] as keyof typeof CardType] === seme);
      if(horseIndex){
        prev[horseIndex] = {...prev[horseIndex], position: prev[horseIndex].position+1}
      }
      return prev;
    })
  }

  useEffect(()=>{
    
  },[positions])

  const shuffledCards : Card[] = shuffle(cardsWithoutHorses);
  let images : any[] = [];
  if(cardsWithoutHorses) {
    images = cardsWithoutHorses.map(horse =>
      <Image 
        key={horse.data.src}
        src={horse.data}
        alt={horse.alt}
      />
    )
  }

  if(won.done)
    return <h1>{`Il cavallo di ${CardType[won.horse[0] as keyof typeof CardType]} ha vinto!`}</h1>
  return (              
    <main className="grid grid-cols-2 game w-screen h-screen">
      <StartLine positions={positions}/>
      <RaceTrack horsesPositions={positions}/>
      <Deck cards={shuffledCards.slice(10, -1)} advanceHorse={(seme : string) => (advanceHorse(seme))}/>
      <CardsLine cards={shuffledCards.slice(0, 10)} advanceHorse={(seme : string) => (advanceHorse(seme))}/>        
    </main>
  )
}
