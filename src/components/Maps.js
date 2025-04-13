import React, { useContext } from "react";
import "./Agents.css";
import MapCard from "./MapCard";
import { MapsContext } from "../contexts/MapsContext";

const Maps = () => {
  const { state } = useContext(MapsContext);

  return (
    <>
      {state.loading && <div>loading...</div>}
      {state.error && (
        <div className="container alert alert-danger">{state.error}</div>
      )}
      {state.maps
        .filter(
          (map, index, self) =>
            index === self.findIndex((m) => m.displayName === map.displayName)
        )
        .map((map) => (
          <MapCard map={map} key={map.uuid} />
        ))}
    </>
  );
};

export default Maps;
