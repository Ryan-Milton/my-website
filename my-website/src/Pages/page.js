import React from 'react';
import Deck from '../Decks/deck.js';
import './_page.scss';

function Page(props) {
  return props.content.map( (section, i) => <Deck content={section} />)
}

export default Page;