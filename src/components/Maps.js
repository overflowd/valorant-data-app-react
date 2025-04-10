import React, { useEffect, useState } from "react";
import "./Agents.css";
import MapCard from "./MapCard";

const Maps = () => {
  const [maps, setMaps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMaps = async () => {
      try {
        const response = await fetch("https://valorant-api.com/v1/maps");
        const data = await response.json();
        setMaps(data.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchMaps();
  }, []);

  return (
    <>
      {loading && <div>loading...</div>}
      {maps
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
