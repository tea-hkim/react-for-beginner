import styles from "./App.module.css";
import { useEffect, useState } from "react";
import Button from "./Button";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") return;
    setToDoList((cur) => [...cur, toDo]);
    setToDo("");
  };
  const Reset = () => {
    setToDoList([]);
    setToDo("");
  };
  return (
    <div className="App">
      <h1>To do ({toDoList.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          value={toDo}
          type="text"
          placeholder="Write your to do..."
          onChange={onChange}
        />
        <button>button</button>
      </form>
      <ul>
        {toDoList.map((todo, index) => (
          <div>
            <li key={index}>{todo}</li>
          </div>
        ))}
      </ul>
      <button onClick={Reset}>Reset</button>
    </div>
  );
}

export default App;
