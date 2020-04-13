import React from "react";

// Tuo tähän elementtiin propsina todo-listasi elementit.
// Tuota lista divin sisälle listan map-funktiolla. Jokainen
// listan elementti on TodoItem-komponentti, joka löytyy
// TodoItem.jsx-tiedostosta.

export default function(props) {
  const listItems = props.listItems.map(element => <li> {element} </li>);

  return <div>{listItems} </div>;
}
