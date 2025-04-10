import React from "react";
import "./AgentSkills.css";

const AgentSkills = ({ agent }) => {
  return (
    <ul className="list-group">
      {agent.abilities.map(
        (skills, index) =>
          index < 4 && (
            <li className="list-group-item" key={index}>
              <div className="d-flex justify-content-between align-items-center">
                <div className="fw-semibold">{skills.displayName}</div>
                <img
                  src={skills.displayIcon}
                  className="skill-img"
                  alt="agent skill"
                />
              </div>
            </li>
          )
      )}
    </ul>
  );
};

export default AgentSkills;
