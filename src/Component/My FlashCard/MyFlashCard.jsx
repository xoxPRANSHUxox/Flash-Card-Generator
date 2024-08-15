import React from 'react'
import { useSelector } from 'react-redux';

function MyFlashCard() {
  const flashcards = useSelector((state) => state.flashcards);

  if (!flashcards) {
      return <p className=' w-auto ml-12 text-3xl  m-auto font-bold  text-red-700'>No flashcards available.</p>;
  }

  return (
    <div>
      <h2>Flashcards</h2>
            {flashcards.map((card, index) => (
                <div key={index}>
                    <p>Term: {card.term}</p>
                    <p>Definition: {card.definition}</p>
                    {card.cardImage && <img src={card.cardImage} alt={card.term} />}
                </div>
            ))}+
    </div>
  )
}

export default MyFlashCard
