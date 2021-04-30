import React, { useRef, useState } from "react";
import { db } from "../firebase/config";
import { useGlobalContext } from "../context/context";
// MATERIAL-UI
import { makeStyles } from "@material-ui/core/styles";
// CSS
import "./addtodo.css";
import { Button, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const AddToDo = () => {
  const classes = useStyles();
  const { state } = useGlobalContext();
  const [name, setName] = useState("");
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("Todos").add({
      todo: name,
      complete: false,
      uid: state.auth.user.uid,
      timestamp: new Date().getTime().toString(),
    });
    setName("");
  };

  return (
    <div className="addtodo">
      <form
        onSubmit={handleSubmit}
        className={classes.root}
        noValidate
        autoComplete="off"
      >
        <TextField
          type="text"
          label="Enter your todo"
          name="name"
          id="name"
          ref={inputRef}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button
          variant="contained"
          color="secondary"
          type="submit"
          disabled={!name}
        >
          Add TODO
        </Button>
      </form>
    </div>
  );
};

export default AddToDo;
