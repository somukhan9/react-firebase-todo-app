import { LOGIN, LOGOUT } from "../actions";

const authReducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, user: action.payload.user };
    case LOGOUT:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default authReducer;
