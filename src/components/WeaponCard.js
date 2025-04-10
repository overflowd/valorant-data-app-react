import React from "react";
import "./Weapons.css";

const WeaponCard = ({ weapon }) => {
  return (
    <div className="col my-3">
      <div className="card h-100 shadow-lg rounded bg-custom text-white">
        <img
          src={weapon.displayIcon}
          alt="weapon"
          className="card-img-top"
          id="weapon-img"
        />
        <div className="card-body d-flex justify-content-between align-items-center">
          <h5 className="card-title">{weapon.displayName}</h5>
          <h5 className="card-title">
            Category: {weapon.category.slice(21, weapon.category.length)}
          </h5>
          <h5 className="card-title">
            Cost: {weapon.shopData ? weapon.shopData.cost : "Free"}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default WeaponCard;
