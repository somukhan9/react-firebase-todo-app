export const SIGN_UP = "SIGN_UP";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const ADD_TODO = "ADD_TODO";
export const LOADING = "LOADING";

export const signUp = () => {
  return {
    type: SIGN_UP,
    payload: {},
  };
};

export const logIn = (user) => {
  return {
    type: LOGIN,
    payload: { user },
  };
};

export const logOut = () => {
  return {
    type: LOGOUT,
    payload: null,
  };
};

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: { todo },
  };
};

export const loading = (loading) => {
  return {
    type: LOADING,
    payload: { loading },
  };
};
