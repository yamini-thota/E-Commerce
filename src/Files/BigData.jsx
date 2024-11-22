import React from 'react';
import { useNavigate } from "react-router-dom";
import { BigData } from './Big';

export const Big = () => {
  const navigate = useNavigate();

  const handleImageClick = (product) => {
    // Navigate to the ClickableImage component with product details
    navigate(`/product/${product.id}`, { state: product });
  };

  return (
    <div className="container my-5">
      <h2 className="text-center text-primary mb-4">Best Sales</h2>
      <div className="row g-3 mt-2 text-start">
        {BigData.map((item, index) => (
          <div className="col-md-3 col-lg-4" key={index}>
            <div className="card shadow-sm h-200" >
              <img
                src={item.imgUrl}
                alt="Product"
                className="card-img-top mt-5 p-2 pt-3"
                style={{ height: '200px', objectFit: 'cover' }}
                onClick={() => handleImageClick(item)}
              />
              <div className="card-body">
                <h5 className="card-title ">{item.productName}</h5>
                <small className="text-muted ">Rating: {item.avgRating}</small>
                <div className="d-flex justify-content-between align-items-center mt-2">
                  <span className="fw-bold">${item.price}</span>
                  <button className="btn btn-outline-primary "
                  >+</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
