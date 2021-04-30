import React, { useState, useEffect, useRef } from "react";
import { AiFillEdit, AiFillCloseCircle, AiFillDelete } from "react-icons/ai";
import upDateData from "../functions/updateData";
import undoUpdate from "../functions/undoUpdata";
import upDateTodo from "../functions/updateTodo";
import deleteData from "../functions/deleteData";
// MATERIAL-UI
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
// CSS
import "./todolist.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const TodoList = ({ id, todo }) => {
  const classes = useStyles();
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(todo.todo);
  const inputRef = useRef(null);

  const completed = () => {
    upDateData(id);
  };

  const notCompleted = () => {
    undoUpdate(id);
  };

  const handleUpDateTodo = (e) => {
    e.preventDefault();
    upDateTodo(id, name);
    setIsEditing(false);
  };

  const deleteTodo = () => {
    deleteData(id);
  };

  useEffect(() => {
    if (isEditing) {
      inputRef.current.focus();
    }
  });

  return (
    <div className="todolist">
      <ul className="todolist__list">
        <li>
          {isEditing ? (
            <>
              <form
                onSubmit={handleUpDateTodo}
                className={classes.root}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="standard-basic"
                  name="name"
                  id="name"
                  ref={inputRef}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <br />
                <Button
                  type="submit"
                  variant="contained"
                  color="secondary"
                  disabled={!name}
                >
                  Update
                </Button>
              </form>
            </>
          ) : (
            <p className={todo.complete ? "complete" : null}>{todo.todo}</p>
          )}
          <div className="todolist__btnContainer">
            <Button
              variant="contained"
              disabled={isEditing}
              onClick={todo.complete ? notCompleted : completed}
            >
              {todo.complete ? "uncomplete" : "complete"}
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={() => {
                setIsEditing(!isEditing);
              }}
            >
              {!isEditing ? <AiFillEdit /> : <AiFillCloseCircle />}
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              onClick={deleteTodo}
            >
              <AiFillDelete />
            </Button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default TodoList;
