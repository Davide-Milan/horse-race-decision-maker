'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import { horsesCards } from "@/app/lib/cards";
import RaceTrack from "../ui/RaceTrack";
import CardsLine from "../ui/CardsLine";
import Deck from "../ui/Deck";
import { Card, CardType } from "../types/Card";
import StartLine from "../ui/StartLine";
import { HorsePosition } from "../lib/horses";

interface GameProps{
  shuffledCards : Card[]
}

export default function Game({shuffledCards} : GameProps) {
  const [positions, setPositions] = useState<HorsePosition[]>(horsesCards.map(horse => ({horse: horse, position:-1})));
  const [won, setWon] = useState<{done: boolean, horse:string}>({done: false, horse: 'b'});
  const [lastTurned, setLastTurned] = useState(-1);
  const [drawFromDeck, setDrawFromDeck] = useState<boolean>(true);

  const advanceHorse = (seme : string) => {
    setPositions(prev => {
      const updatedPositions = [...prev];
      let horseIndex = prev.findIndex(element => CardType[element.horse.name[0] as keyof typeof CardType] === seme);
      if (horseIndex >= 0) {
        updatedPositions[horseIndex] = {...updatedPositions[horseIndex], position: updatedPositions[horseIndex].position + 1};
      }
      return updatedPositions;
    })
  }

  useEffect(()=>{
    if(positions.every(horse => horse.position >= lastTurned+1)){
      setDrawFromDeck(false);
    } else 
      setDrawFromDeck(true);
    const wonIndex = positions.findIndex((ele : HorsePosition) => ele.position === 10)
    if(wonIndex >= 0)
      setWon({done: true, horse: positions[wonIndex].horse.name[0]})    
  },[positions])

  if(won.done)
    return <h1>{`Il cavallo di ${CardType[won.horse[0] as keyof typeof CardType]} ha vinto!`}</h1>
  return (              
    <main className="game grid grid-cols-2 w-screen h-screen">
      <StartLine positions={positions}/>
      <RaceTrack horsesPositions={positions}/>
      <Deck cards={shuffledCards.slice(10, -1)} clickable={drawFromDeck} advanceHorse={(seme : string) => (advanceHorse(seme))}/>
      <CardsLine positions={positions} cards={shuffledCards.slice(0, 10)} advanceHorse={(seme : string) => (advanceHorse(seme))} lastTurned={lastTurned} updateTurned={() => setLastTurned(lastTurned+1)}/>
    </main>
  )
}
