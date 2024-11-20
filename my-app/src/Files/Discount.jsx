import React from 'react';
import { DiscountProducts } from './DiscountData';

export const Discount=()=>{
  return (
    <div className="container my-5">
      <h2 className="text-center text-primary mb-4">Big Discount</h2>

      <div className="row g-3 mt-2 text-start">
        {DiscountProducts.map((item, index) => (
          <div className="col-md-4 col-lg-4" key={index}>
            <div className="card shadow-sm h-100">
              <small className="bg-secondary text-light text-center rounded-pill w-25 p-2 mt-0">
                {item.discount}%
              </small>
              <img
                src={item.imgUrl}
                alt="Product"
                className="card-img-top mt-3 p-2"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{item.productName}</h5>
                <small className="text-muted">Rating: {item.avgRating}</small>
                <div className="d-flex justify-content-between align-items-center mt-2">
                  <span className="fw-bold">${item.price}</span>
                  <button
                    className="btn btn-outline-primary"
                    
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};