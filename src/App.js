import { useState } from "react";
import "./App.css";
import Form from "./form";
import Header from "./Header";
import TodoList from "./TodoList";

function App() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  const [editodo, setEditTodo] = useState();

  return (
    <div className="App">
      <div>
        <Header />
        <Form
          input={input}
          setInput={setInput}
          todo={todo}
          setTodo={setTodo}
          editodo={editodo}
          setEditTodo={setEditTodo}
        />
        <div>
          <TodoList
            todo={todo}
            setTodo={setTodo}
            editodo={editodo}
            setEditTodo={setEditTodo}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
