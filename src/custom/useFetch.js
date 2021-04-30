import { useEffect, useState } from "react";
import { addTodo } from "../actions";
import { useGlobalContext } from "../context/context";
import { db } from "../firebase/config";

const useFetch = (id) => {
  const { state, dispatch } = useGlobalContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (state.auth.user) {
      setLoading(true);
      db.collection("Todos")
        .orderBy("timestamp", "desc")
        .where("uid", "==", state.auth.user.uid)
        .onSnapshot((snapshot) => {
          dispatch(
            addTodo(
              snapshot.docs.map((doc) => {
                return {
                  id: doc.id,
                  todo: doc.data(),
                };
              })
            )
          );
          setLoading(false);
        });
    }
    // }
  }, [dispatch, state.auth.user]);

  return loading;
};

export default useFetch;
