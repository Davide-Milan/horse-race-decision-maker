import { cardsWithoutHorses, shuffle } from "../lib/cards";
import { Card } from "../types/Card";
import Game from "../ui/Game";

export default function page() {  
  const shuffledCards : Card[] = shuffle(cardsWithoutHorses);
  
  return (
    <main className="w-screen h-screen">
      <Game shuffledCards={shuffledCards}/>
    </main>
  )
}
