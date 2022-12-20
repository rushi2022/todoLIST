import React from "react";
import "./App.css";
import { GrAdd } from "react-icons/gr";
import { AiOutlineEdit } from "react-icons/ai";
const Form = ({ input, todo, setInput, setTodo, editodo, setEditTodo }) => {
  const updateTodo = (title, id) => {
    const newtodo = todo.map((to) => (to.id === id ? { id, title } : to));
    setTodo(newtodo);
    setEditTodo("");
    setInput("");
  };

  const inputChangeFunction = (event) => {
    event.preventDefault();
    setInput(event.target.value);
  };
  const todoChangefunction = (event) => {
    event.preventDefault();
    if (input.length === 0) {
    } else {
      if (!editodo) {
        setTodo([...todo, { id: Math.random(), title: input }]);
        setInput("");
      } else {
        updateTodo(input, editodo.id);
      }
    }
  };

  return (
    <div className="box">
      <form onSubmit={todoChangefunction}>
        <input
          type="text"
          placeholder={
            editodo ? "Enter Updated Vertion..." : "Enter New TODO .."
          }
          value={input}
          onChange={inputChangeFunction}
        />
        <button type="submit">
          {editodo ? <AiOutlineEdit size={15} /> : <GrAdd size={15} />}
        </button>
      </form>
    </div>
  );
};

export default Form;
