import { createContext, useEffect, useReducer } from "react";

export const MapsReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return { ...state, maps: action.maps, loading: false };
    case "FETCH_ERROR":
      return { ...state, loading: false, error: "Fetch error." };
    default:
      return state;
  }
};

export const MapsContext = createContext();

export const MapsContextProvider = (props) => {
  const [state, dispatch] = useReducer(MapsReducer, {
    maps: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchMaps = async () => {
      try {
        const response = await fetch("https://valorant-api.com/v1/maps");
        const data = await response.json();
        dispatch({ type: "FETCH_SUCCESS", maps: data.data });
      } catch (error) {
        dispatch({ type: "FETCH_ERROR" });
      }
    };

    fetchMaps();
  }, []);

  return (
    <MapsContext.Provider value={{ state }}>
      {props.children}
    </MapsContext.Provider>
  );
};
