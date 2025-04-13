import React, { useContext } from "react";
import "./Agents.css";
import AgentCard from "./AgentCard";
import { AgentsContext } from "../contexts/AgentsContext";

const Agents = () => {
  const { state } = useContext(AgentsContext);

  return (
    <>
      {state.loading && <div>loading...</div>}
      {state.error && (
        <div className="container alert alert-danger">{state.error}</div>
      )}
      {state.agents
        .filter((agent) => agent.role !== null)
        .map((agent) => (
          <AgentCard agent={agent} key={agent.uuid} />
        ))}
    </>
  );
};

export default Agents;
