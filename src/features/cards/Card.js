import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectCard } from "./cardsSlice";

export default function Card ({ id }) {

  const card = useSelector(selectCard(id));
  const [flipped, setFlipped] = useState(false);

  return (
    <button className={`card ${flipped ? 'turn' : ''}`} onClick={(e) => setFlipped(!flipped)}>
      <span>{flipped ? card.back : card.front}</span>
    </button>
    /* {/* <li>
      <button className="card" onClick={(e) => setFlipped(!flipped)}>
        {flipped ? card.back : card.front}
      </button>
    </li> */
  );
}
