import React from "react";
import "./styles.css";
import TodoList from "./TodoList/TodoList";
import AddInput from "./AddInput/index";
import { useState } from "react";
// Voit käyttää tätä listaa ykköstehtävässä.
// eslint-disable-next-line
const exampleToDoList = [
  "Renderöi lista",
  "Toteuta lisäyskomponentti",
  "Toteuta valmiiksi merkkaaminen",
  "Bonus: järjestettävä lista"
];

export default function App() {
  // Tee tähän reactin tilaan kytkeytyvä useState-hook,
  // joka pitää sisällään Todo-listan elementit.
  const [list, add] = useState(exampleToDoList);

  // Tähän kannattaa tehdä kaikki funktiot, joilla listaa
  // muokataan. Esim. listaan lisääminen, listasta poistaminen,
  // listaelementin siirtäminen. Funktiot voi lähettää muille
  // komponenteille propseina.
  function addListItem(props) {
    // if (!list.includes(lol)) list.concat(lol);
    if (!list.find(n => n === props)) {
      add(list.concat([props]));
    }
  }

  // Allaolevaan rakenteeseen lisätään komponentit listaelementille
  // ja lisäyselementille.
  return (
    <div className="App">
      <h1>TO-DOH</h1>
      <TodoList listItems={list} text="ABC" />
      <AddInput addListItem={addListItem} />
    </div>
  );
}
