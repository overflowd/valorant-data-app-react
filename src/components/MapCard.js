import React from "react";

const MapCard = ({ map }) => {
  return (
    <div className="col my-3">
      <div className="card h-100 shadow-lg rounded bg-custom text-white">
        <img src={map.splash} alt="map" className="card-img-top" />
        <div className="card-body d-flex justify-content-center align-items-center">
          <h5 className="card-title">{map.displayName}</h5>
        </div>
      </div>
    </div>
  );
};

export default MapCard;
