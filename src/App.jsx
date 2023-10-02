import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [Age, setAge] = useState("0");
  const [Height, setHeight] = useState("0");
  const [SuperPower, setSuperPower] = useState("");
  const [displayCharacter, setDisplayCharacter] = useState(false);
  return (
    <div className="App">
      <h1>Build A Hero</h1>
      <div>
        <label>Name: </label>
        <input
          type="text"
          style={{ margin: 10 }}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label>Age: </label>
        <input
          type="number"
          style={{ margin: 10 }}
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
        <label>Height: </label>
        <input
          type="number"
          style={{ margin: 10 }}
          onChange={(event) => {
            setHeight(event.target.value);
          }}
        />
        <label>SuperPower: </label>
        <input
          type="text"
          style={{ margin: 10 }}
          onChange={(event) => {
            setSuperPower(event.target.value);
          }}
        />

        {name}
        {Age}
        {Height}
        {SuperPower}
      </div>
      <button
        onClick={() => {
          setDisplayCharacter(true);
        }}
      >
        Display Chractor
      </button>
      <div>
        <h1>Hero Info</h1>
        {displayCharacter && (
          <ul>
            <li> Name: {name}</li>
            <li> Height: {Height}</li>
            <li> Age: {Age}</li>
            <li> SuperPower: {SuperPower}</li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
