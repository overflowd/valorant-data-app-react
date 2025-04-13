import { createContext, useEffect, useReducer } from "react";

export const WeaponsReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return { ...state, weapons: action.weapons, loading: false };
    case "FETCH_ERROR":
      return { ...state, loading: false, error: "Fetch error." };
    default:
      return state;
  }
};

export const WeaponsContext = createContext();

export const WeaponsContextProvider = (props) => {
  const [state, dispatch] = useReducer(WeaponsReducer, {
    weapons: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchWeapons = async () => {
      try {
        const response = await fetch("https://valorant-api.com/v1/weapons");
        const data = await response.json();
        dispatch({ type: "FETCH_SUCCESS", weapons: data.data });
      } catch (error) {
        dispatch({ type: "FETCH_ERROR" });
      }
    };

    fetchWeapons();
  }, []);

  return (
    <WeaponsContext.Provider value={{ state }}>
      {props.children}
    </WeaponsContext.Provider>
  );
};
