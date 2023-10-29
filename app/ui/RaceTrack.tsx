'use client'

import Image from "next/image"
import { cardBack } from "../lib/cards"
import { HorsePosition } from "../lib/horses"


interface RaceTrackProps{
  horsesPositions : HorsePosition[]
}

export default function RaceTrack({ horsesPositions } : RaceTrackProps) {
  return (
    <div className="race_track bg-yellow-300 grid grid-cols-10 items-center justify-items-center justify-evenly gap-2">
      <Image
      src={cardBack.data}
      alt={cardBack.alt}/><Image
      src={cardBack.data}
      alt={cardBack.alt}/><Image
      src={cardBack.data}
      alt={cardBack.alt}/><Image
      src={cardBack.data}
      alt={cardBack.alt}/><Image
      src={cardBack.data}
      alt={cardBack.alt}/><Image
      src={cardBack.data}
      alt={cardBack.alt}/><Image
      src={cardBack.data}
      alt={cardBack.alt}/><Image
      src={cardBack.data}
      alt={cardBack.alt}/><Image
      src={cardBack.data}
      alt={cardBack.alt}/><Image
      src={cardBack.data}
      alt={cardBack.alt}/><Image
      src={cardBack.data}
      alt={cardBack.alt}/><Image
      src={cardBack.data}
      alt={cardBack.alt}/><Image
      src={cardBack.data}
      alt={cardBack.alt}/><Image
      src={cardBack.data}
      alt={cardBack.alt}/><Image
      src={cardBack.data}
      alt={cardBack.alt}/><Image
      src={cardBack.data}
      alt={cardBack.alt}/><Image
      src={cardBack.data}
      alt={cardBack.alt}/><Image
      src={cardBack.data}
      alt={cardBack.alt}/><Image
      src={cardBack.data}
      alt={cardBack.alt}/><Image
      src={cardBack.data}
      alt={cardBack.alt}/><Image
      src={cardBack.data}
      alt={cardBack.alt}/><Image
      src={cardBack.data}
      alt={cardBack.alt}/><Image
      src={cardBack.data}
      alt={cardBack.alt}/><Image
      src={cardBack.data}
      alt={cardBack.alt}/><Image
      src={cardBack.data}
      alt={cardBack.alt}/><Image
      src={cardBack.data}
      alt={cardBack.alt}/><Image
      src={cardBack.data}
      alt={cardBack.alt}/><Image
      src={cardBack.data}
      alt={cardBack.alt}/><Image
      src={cardBack.data}
      alt={cardBack.alt}/><Image
      src={cardBack.data}
      alt={cardBack.alt}/><Image
      src={cardBack.data}
      alt={cardBack.alt}/><Image
      src={cardBack.data}
      alt={cardBack.alt}/><Image
      src={cardBack.data}
      alt={cardBack.alt}/><Image
      src={cardBack.data}
      alt={cardBack.alt}/><Image
      src={cardBack.data}
      alt={cardBack.alt}/><Image
      src={cardBack.data}
      alt={cardBack.alt}/><Image
      src={cardBack.data}
      alt={cardBack.alt}/><Image
      src={cardBack.data}
      alt={cardBack.alt}/><Image
      src={cardBack.data}
      alt={cardBack.alt}/><Image
      src={cardBack.data}
      alt={cardBack.alt}/>
    </div>
  )
}
