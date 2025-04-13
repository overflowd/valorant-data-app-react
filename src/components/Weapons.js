import React, { useContext } from "react";
import "./Agents.css";
import WeaponCard from "./WeaponCard";
import { WeaponsContext } from "../contexts/WeaponsContext";

const Weapons = () => {
  const { state } = useContext(WeaponsContext);

  return (
    <>
      {state.loading && <div>loading...</div>}
      {state.error && (
        <div className="container alert alert-danger">{state.error}</div>
      )}
      {state.weapons.map((weapon) => (
        <WeaponCard weapon={weapon} key={weapon.uuid} />
      ))}
    </>
  );
};

export default Weapons;
