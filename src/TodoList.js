import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";

const TodoList = ({ todo, setTodo, editodo, setEditTodo }) => {
  const deleteTodo = (to) => {
    setTodo(todo.filter((item) => item.id !== to.id));

    setEditTodo(false);
  };
  const UpdateTodo = (to) => {
    setEditTodo(todo.find((item) => item.id === to.id));
  };
  return (
    <div>
      {todo.map((to) => (
        <li className="list" key={to.id}>
          <input
            type="text"
            value={to.title}
            onChange={(event) => event.preventDefault()}
          />
          <button onClick={() => deleteTodo(to)}>
            <MdDeleteOutline size={15} />
          </button>
          <button onClick={() => UpdateTodo(to)}>
            <AiOutlineEdit size={15} />
          </button>
        </li>
      ))}
      {console.log(todo)}
    </div>
  );
};

export default TodoList;
