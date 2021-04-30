import React from "react";
import Navbar from "./Navbar";
import { useGlobalContext } from "../context/context";
import AddToDo from "./AddToDo";
import TodoList from "./TodoList";
import useFetch from "../custom/useFetch";
// CSS
import "./app.css";

function App() {
  const { state } = useGlobalContext();
  const loading = useFetch();

  if (loading && state.auth.user) {
    return <h2 className="section-title">Loading...</h2>;
  }

  return (
    <div className="app">
      <Navbar />
      {state.auth.user ? (
        <div className="app__todoContainer">
          <div className="app__todoInput">
            <AddToDo />
          </div>
          <div className="app__todoList">
            {state.todo.todos.length === 0 ? (
              <h2 className="section-title">Todo list is empty</h2>
            ) : (
              state.todo.todos.map((todo) => {
                return <TodoList key={todo.id} id={todo.id} {...todo} />;
              })
            )}
          </div>
        </div>
      ) : (
        <h2>You have to sing in to add todo</h2>
      )}
    </div>
  );
}

export default App;
