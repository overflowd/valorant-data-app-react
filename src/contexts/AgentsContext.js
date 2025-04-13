import { createContext, useEffect, useReducer } from "react";

export const AgentsReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return { ...state, agents: action.agents, loading: false };
    case "FETCH_ERROR":
      return { ...state, loading: false, error: "Fetch error." };
    default:
      return state;
  }
};

export const AgentsContext = createContext();

export const AgentsContextProvider = (props) => {
  const [state, dispatch] = useReducer(AgentsReducer, {
    agents: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const response = await fetch("https://valorant-api.com/v1/agents");
        const data = await response.json();
        dispatch({ type: "FETCH_SUCCESS", agents: data.data });
      } catch (error) {
        dispatch({ type: "FETCH_ERROR" });
      }
    };

    fetchAgents();
  }, []);

  return (
    <AgentsContext.Provider value={{ state }}>
      {props.children}
    </AgentsContext.Provider>
  );
};
