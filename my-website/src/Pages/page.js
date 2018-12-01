import React from 'react';
import Deck from '../Decks/deck.js';

function Page(props) {
  return props.content.map( (section, i) => <Deck content={section} />)
}

export default Page;