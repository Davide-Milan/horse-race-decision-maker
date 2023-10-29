import { StaticImageData } from "next/image";

export type Card = {
  data: StaticImageData;
  alt: string;
  name: string
}

export enum CardType {
  b = "Bastoni",
  c = "Coppe",
  s = "Spade",
  o = "Ori",
  back = "Retro",
}