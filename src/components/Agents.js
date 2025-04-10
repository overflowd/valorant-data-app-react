import React, { useEffect, useState } from "react";
import "./Agents.css";
import AgentCard from "./AgentCard";

const Agents = () => {
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const response = await fetch("https://valorant-api.com/v1/agents");
        const data = await response.json();
        setAgents(data.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchAgents();
  }, []);

  return (
    <>
      {loading && <div>loading...</div>}
      {agents
        .filter((agent) => agent.role !== null)
        .map((agent) => (
          <AgentCard agent={agent} key={agent.uuid} />
        ))}
    </>
  );
};

export default Agents;
