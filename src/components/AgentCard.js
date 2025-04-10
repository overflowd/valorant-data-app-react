import React from "react";
import AgentSkills from "./AgentSkills";

const AgentCard = ({ agent }) => {
  return (
    <div className="col my-3">
      <div className="card h-100 shadow-lg rounded bg-custom text-white">
        <img src={agent.displayIcon} alt="agent" className="card-img-top" />
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <h5 className="card-title">{agent.displayName}</h5>
            <h5 className="card-title">Role: {agent.role.displayName}</h5>
          </div>
          <p className="card-text">{agent.description}</p>
          <AgentSkills agent={agent} />
        </div>
      </div>
    </div>
  );
};

export default AgentCard;
