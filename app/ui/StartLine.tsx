'use client'

import Image from "next/image"
import { HorsePosition } from "../lib/horses"
import { Card } from "../types/Card"
import empty from "@/public/images/sprites/empty.png"
import { useEffect, useState } from "react"

interface StartLineProps{
  positions: HorsePosition[]
}

export default function StartLine({positions} : StartLineProps) {  
  return (
    <div className='start_line grid justify-center content-around grid-rows-4'>
      {positions.map((horse,i) => {
        if(horse.position === -1){
          return <Image
              src={horse.horse.data}
              alt={horse.horse.alt}
              key={horse.horse.name}
            />
        } else{
          return <Image
              style={{opacity: 0}}
              src={empty}
              alt="empty space"
              key={`star_line_empty_${i}`}
            />
        }
      })
      }
    </div>
  )
}
