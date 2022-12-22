import { useState } from "react";
import TodoItem from "./components/TodoItem";
import InputArea from "./components/InputArea";

function App() {
  const [todo, setTodo] = useState([]);

  function add(input) {
    setTodo(oldArray => {
      return [...oldArray, input];
    });
  }

  function remove(id) {
    setTodo(oldArray => {
      return oldArray.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onClick={add}/>
      <div>
        <ul>
          {todo.map((todoItem, index) => (
            <TodoItem
              key={index}
              id={index}
              text={todoItem}
              onChecked={remove}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
