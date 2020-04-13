import React from "react";
import { useState } from "react";

import "./input.css";

// Todo-listalle tehdään uusia merkintöjä input-elementin avulla.
// Elementtiin tehdään testikenttä, joka tallentaa sisältönsä
// state-hookiin, ja nappi, joka lukee sisällön ja kutsuu
// komponenttiin propseissa tuotua addListItem-funktiota.
export function AddInput(props) {
  const [teksti, lisaa] = useState(""); // Tee tähän kontrolloitu tekstikenttä ja lisää-nappi.
  // Mallia voit katsoa esimerkiksi tästä blogipostauksesta:
  // https://dev.to/stanleyjovel/simplify-controlled-components-with-react-hooks-23nn
  // Tyylittelyyn löytyy luokkia oheisesta css-tiedostosta.

  return (
    <div class="input-container">
      <input
        className="input-field"
        id="myInput"
        onChange={event => lisaa(event.target.value)}
      />
      <button onClick={() => props.addListItem(teksti)}>Add</button>
    </div>
  );
}
