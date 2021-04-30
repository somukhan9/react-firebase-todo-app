import { db } from "../firebase/config";

const undoUpdata = (id) => {
  db.collection("Todos").doc(id).update({
    complete: false,
  });
  return true;
};

export default undoUpdata;
