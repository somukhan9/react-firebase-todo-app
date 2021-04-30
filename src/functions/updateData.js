import { db } from "../firebase/config";

const upDateDate = (id) => {
  db.collection("Todos").doc(id).update({
    complete: true,
  });
  return true;
};

export default upDateDate;
