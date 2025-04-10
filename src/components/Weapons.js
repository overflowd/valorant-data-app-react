import React, { useEffect, useState } from "react";
import "./Agents.css";
import WeaponCard from "./WeaponCard";

const Weapons = () => {
  const [weapons, setWeapons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeapons = async () => {
      try {
        const response = await fetch("https://valorant-api.com/v1/weapons");
        const data = await response.json();
        setWeapons(data.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchWeapons();
  }, []);

  return (
    <>
      {loading && <div>loading...</div>}
      {weapons.map((weapon) => (
        <WeaponCard weapon={weapon} key={weapon.uuid} />
      ))}
    </>
  );
};

export default Weapons;
