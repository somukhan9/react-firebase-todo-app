import combineReducers from "react-combine-reducers";
import authReducer from "./authReducer";
import todoReducer from "./todoReducer";

const getUserLocally = () => {
  const data = JSON.parse(localStorage.getItem("user"));
  return data;
};

const useCombinerReducer = () => {
  const authInitialState = {
    user: getUserLocally(),
  };

  const todoInitialState = {
    todos: [],
    loading: true,
  };

  const [reducer, initialState] = combineReducers({
    auth: [authReducer, authInitialState],
    todo: [todoReducer, todoInitialState],
  });

  return { reducer, initialState };
};

export default useCombinerReducer;
