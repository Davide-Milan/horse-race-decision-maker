'use client'

import Image from "next/image"
import { HorsePosition } from "../lib/horses"
import { Card } from "../types/Card"
import empty from "@/public/images/sprites/empty.png"

interface StartLineProps{
  positions: HorsePosition[]
}

export default function StartLine({positions} : StartLineProps) {
  
  return (
    <div className='start_line grid justify-center content-around'>
      {positions.map(horse => {
        if(horse.position === 0){
          return <Image
              src={horse.horse.data}
              alt={horse.horse.alt}
              key={horse.horse.name}
            />
        } else{
          return <Image
              src={empty}
              alt="empty space"
              key={horse.horse.name}
            />
        }
      })
      }
    </div>
  )
}
