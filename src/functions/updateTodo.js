import { db } from "../firebase/config";

const updatedTodo = (id, name) => {
  db.collection("Todos").doc(id).update({
    todo: name,
  });
};

export default updatedTodo;
