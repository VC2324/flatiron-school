/*

Phase 2 -> Controlled Components
Sakib Rasul | Created January 31, 2024

Core Deliverables
1. Write a function `randomize` that generates a random card string, e.g. "6 of Clubs".
2. Call `randomize` when `Nah.` is clicked in `Card`.
3. Display the current card string in `Card`.
4. (Bonus) Make the card's border "solid red" when the current suit is diamond or hearts
           and "solid black" when the current suit is clubs or spades.

*/

// To make `Card` a child of `App`, we need to import it (and render it) inside `App`.
import Card from "./Card";
import {useState} from "react"
// const numArray=["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
// const suitArray=["Diamond", "Clovers", "Hearts", "Spades"]
// const randomNum = numArray[Math.floor(Math.random()*numArray.length)];
// const randomSuit = suitArray[Math.floor(Math.random()*suitArray.length)]
// const randomCard = `${randomNum} of ${randomSuit}`
               
// console.log (randomNum)
// console.log (randomSuit)
// console.log (randomCard)
//now that we have both random values 




export default function App() {
  const  [isCard, setIsCard] = useState("Ace of Spades");
  const numArray=["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
  const suitArray=["Diamond", "Clovers", "Hearts", "Spades"]
function randomizedCard(){
const randomNum = numArray[Math.floor(Math.random()*numArray.length)];
const randomSuit = suitArray[Math.floor(Math.random()*suitArray.length)]
const randomCard = `${randomNum} of ${randomSuit}`
setIsCard (randomCard)
               }
               
 

  return (
    <div style={{ minHeight: "100vh",
                  display: "flex", flexDirection: "column",
                  alignItems: "center", justifyContent: "center" }}>
      <h1>Is This Your Card?</h1>
      <Card isCard= {isCard} randomizedCard= {randomizedCard}/>
      <footer>&copy; 2023 Sakib Rasul</footer> 
    </div>
  );
}