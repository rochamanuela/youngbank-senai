import React, { createContext, useContext, useReducer } from 'react';

const UserContext = createContext();

const initialState = {
  token: null,
};

const userReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TOKEN':
      return { ...state, token: action.payload };
    default:
      return state;
  }
};

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('O usuário deve ser usado dentro de um provedor de usuário');
  }
  return context;
};

export { UserProvider, useUser };