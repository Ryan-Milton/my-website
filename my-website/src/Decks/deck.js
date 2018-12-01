import React from 'react';
import Card from '../Cards/card.js';

function Deck(props) {
  return (
    <section>
      <header>
        <h1>{props.content.deckTitle}</h1>
      </header>
      {props.content.records && props.content.records.map( (card, i) => <Card key={i} content={card} />)}
    </section>
  );
}

export default Deck;