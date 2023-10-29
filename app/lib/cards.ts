import b1 from "@/public/images/sprites/b1.png"
import b2 from "@/public/images/sprites/b2.png"
import b3 from "@/public/images/sprites/b3.png"
import b4 from "@/public/images/sprites/b4.png"
import b5 from "@/public/images/sprites/b5.png"
import b6 from "@/public/images/sprites/b6.png"
import b7 from "@/public/images/sprites/b7.png"
import b8 from "@/public/images/sprites/b8.png"
import b9 from "@/public/images/sprites/b9.png"
import b10 from "@/public/images/sprites/b10.png"
import b11 from "@/public/images/sprites/b11.png"
import b12 from "@/public/images/sprites/b12.png"
import b13 from "@/public/images/sprites/b13.png"
import c1 from "@/public/images/sprites/c1.png"
import c2 from "@/public/images/sprites/c2.png"
import c3 from "@/public/images/sprites/c3.png"
import c4 from "@/public/images/sprites/c4.png"
import c5 from "@/public/images/sprites/c5.png"
import c6 from "@/public/images/sprites/c6.png"
import c7 from "@/public/images/sprites/c7.png"
import c8 from "@/public/images/sprites/c8.png"
import c9 from "@/public/images/sprites/c9.png"
import c10 from "@/public/images/sprites/c10.png"
import c11 from "@/public/images/sprites/c11.png"
import c12 from "@/public/images/sprites/c12.png"
import c13 from "@/public/images/sprites/c13.png"
import o1 from "@/public/images/sprites/o1.png"
import o2 from "@/public/images/sprites/o2.png"
import o3 from "@/public/images/sprites/o3.png"
import o4 from "@/public/images/sprites/o4.png"
import o5 from "@/public/images/sprites/o5.png"
import o6 from "@/public/images/sprites/o6.png"
import o7 from "@/public/images/sprites/o7.png"
import o8 from "@/public/images/sprites/o8.png"
import o9 from "@/public/images/sprites/o9.png"
import o10 from "@/public/images/sprites/o10.png"
import o11 from "@/public/images/sprites/o11.png"
import o12 from "@/public/images/sprites/o12.png"
import o13 from "@/public/images/sprites/o13.png"
import s1 from "@/public/images/sprites/s1.png"
import s2 from "@/public/images/sprites/s2.png"
import s3 from "@/public/images/sprites/s3.png"
import s4 from "@/public/images/sprites/s4.png"
import s5 from "@/public/images/sprites/s5.png"
import s6 from "@/public/images/sprites/s6.png"
import s7 from "@/public/images/sprites/s7.png"
import s8 from "@/public/images/sprites/s8.png"
import s9 from "@/public/images/sprites/s9.png"
import s10 from "@/public/images/sprites/s10.png"
import s11 from "@/public/images/sprites/s11.png"
import s12 from "@/public/images/sprites/s12.png"
import s13 from "@/public/images/sprites/s13.png"
import back from "@/public/images/sprites/back.png"
import { Card, CardType } from "../types/Card"
import { StaticImageData } from "next/image"

let cardsImages : StaticImageData[] = [o1,o2,o3,o4,o5,o6,o7,o8,o9,o10,o11,o13,
  s1,s2,s3,s4,s5,s6,s7,s8,s9,s10,s11,s13,
  c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c13,
  b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b13
]
export const cardsWithoutHorses : Card[] = cardsImages.map((card) => {
  let tmp = card.src.split('/');
  const fileName = tmp[tmp.length - 1];
  const name = fileName.split('.')[0];
  return{
    data: card,
    alt: `Immagine di una carta di ${CardType[name.at(0) as keyof typeof CardType]}`,
    name, 
  } 
})

export const horsesCards : Card[] = [o12, s12, c12, b12].map(horse => {
  let tmp = horse.src.split('/');
  const fileName = tmp[tmp.length - 1];
  const name = fileName.split('.')[0];
  return {
    data: horse,
    alt: `Immagine di un cavallo di ${CardType[name.at(0) as keyof typeof CardType]}`,
    name
  }
})

export const cardBack = {
  data: back,
  alt: `Immagine del retro di una carta`,
  name: 'back'
};

export const shuffle = (array : any[]) => {
  return array.map(value => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value)
}
  