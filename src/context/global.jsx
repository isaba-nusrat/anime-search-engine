import React, { createContext, useContext } from "react";

const GlobalContext = createContext();

const baseUrl = "https://api.jikan.moe/v4";

//reducer
const reducer = (state, action) => {
  return state;
};

export const GlobalContextProvider = ({ children }) => {
  //initial state
  const initialState = {
    popularAnime: [],
    upcomingAnime: [],
    airingAnime: [],
    pictures: [],
    isSearch: [],
    searchResults: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
