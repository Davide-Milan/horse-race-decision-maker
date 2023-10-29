'use client'
import React, { useEffect, useState } from 'react'
import { Card } from '../types/Card'
import Image from 'next/image';
import empty from "@/public/images/sprites/empty.png"


interface DiscardPileProps {
  cards : Card[]
}

export default function DiscardPile({cards} : DiscardPileProps) {
  const [discardPile, setDiscardPile] = useState<Card[]>(cards);
  useEffect(() => {
    setDiscardPile(cards);
  }, [cards]);

  return (
    <div className="">
      {
      discardPile.length > 0 ?
      <Image 
        src={discardPile[0].data}
        alt={discardPile[0].alt}
      />
      :
      <Image 
        src={empty}
        alt={"empty space"}
      />
      }
    </div>
  )
}
