import React from "react";
import { NewData } from './NewData';

export const Arrival = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4"><b>New Arrivals</b></h2>
      <div className="row g-4">
        {NewData.map((item, index) => (
          <div key={index} className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img src={item.imgUrl} className="card-img-top img-fluid" alt={item.category} />
              <div className="card-body">
                <small className="text-muted">Rating: {item.avgRating}</small>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <span className="fw-bold text-primary">${item.price}</span>
                  <button className="btn btn-outline-primary btn-sm">+</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
