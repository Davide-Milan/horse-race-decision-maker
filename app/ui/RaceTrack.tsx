'use client'

import Image from "next/image"
import { cardBack } from "../lib/cards"
import { HorsePosition } from "../lib/horses"


interface RaceTrackProps{
  horsesPositions : HorsePosition[]
}

export default function RaceTrack({ horsesPositions } : RaceTrackProps) {
  return (
    <div className="race_track grid grid-cols-10 grid-rows-4 items-center justify-items-center justify-evenly gap-2">
      {horsesPositions.map((horse,i)=>{
        if(horsesPositions[i].position >= 0)
          return (<Image
            src={horsesPositions[i].horse.data}
            alt= {horsesPositions[i].horse.alt}
            key={horsesPositions[i].horse.name}
            style={{gridArea: `${i+1} / ${horse.position+1} / ${i+2} / ${horse.position+2}`}}
          />
        )        
      })
    }
    </div>
  )
}
