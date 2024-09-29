import { createContext, useReducer } from "react";

const initialState = {
  user: null,
};

export const AuthContext = createContext(initialState);

export const AuthContextReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload }; //return {...initialState, user: action.payload}
    case "LOGOUT":
      return { user: null };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthContextReducer, initialState);
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

//https://youtu.be/64RiVcXhxN0?si=Stx5fFo5uGZzNi7T&t=387
//https://www.youtube.com/watch?v=awGFsGc9oCM
