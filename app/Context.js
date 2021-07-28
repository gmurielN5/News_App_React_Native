import React, { createContext, useState, useEffect, useReducer } from "react";
import { dataFetchReducer } from "./Reducer";
import { fetchApi } from "./Services";
import { URL } from "@env";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [url, setUrl] = useState(URL);
  const [query, setQuery] = useState("");

  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: [],
  });

  useEffect(() => {
    let didCancel = false;
    const fetchData = () => {
      fetchApi(url, query, dispatch, didCancel);
    };
    fetchData();

    return () => {
      didCancel = true;
    };
  }, [url, query, dispatch]);

  return (
    <>
      <AppContext.Provider
        value={{
          state,
          dispatch,
          query,
          url,
          setQuery,
          setUrl,
        }}
      >
        {children}
      </AppContext.Provider>
    </>
  );
};
