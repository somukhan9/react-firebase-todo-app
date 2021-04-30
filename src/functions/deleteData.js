import { db } from "../firebase/config";

const deleteData = (id) => {
  db.collection("Todos").doc(id).delete();
};
export default deleteData;
