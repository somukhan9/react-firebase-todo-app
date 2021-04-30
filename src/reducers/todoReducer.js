import { ADD_TODO, LOADING } from "../actions";

const todoReducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: action.payload.todo,
      };
    case LOADING:
      console.log(action.payload.loading);
      return { ...state, loading: action.payload.loading };
    default:
      return state;
  }
};

export default todoReducer;
