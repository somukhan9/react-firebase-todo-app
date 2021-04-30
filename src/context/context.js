import React, { useContext } from "react";
import useCombineReducer from "../reducers";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const { reducer, initialState } = useCombineReducer();
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <AppContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
