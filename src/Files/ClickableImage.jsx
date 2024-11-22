import React, {useState}from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export const ClickableImage = () => {
    const [showDescription, setShowDescription] = useState(true);
  const location = useLocation();
  const product = location.state;

  if (!product) {
    return <h3>Product details not available. Please try again.</h3>;
  }
  

  return (
    <>
    <Header/>
    <div className="container my-5">
      <h2 className="text-center p-5"
          style={{
              backgroundImage: "url('https://img.freepik.com/free-photo/shopping-bag-cart_23-2148879372.jpg?semt=ais_hybrid')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              color: 'white'
          }}
      >
          <b>{product.productName}</b>
      </h2>

      <div className="row mb-4">
        <div className="col-md-6">
          <img
            src={product.imgUrl}
            alt={product.productName}
            className="img-fluid"
            style={{ height: '400px', objectFit: 'cover' }}
          />
        </div>
        <div className="col-md-6">
          <div className="card shadow-sm h-100" style={{ border: 'none' }}>
            <div className="card-body d-flex flex-column justify-content-center align-items-start">
              <h5 className="card-title">{product.productName}</h5>
              <small className="text-muted">Rating: {product.avgRating}</small>
              <p className="text-muted">Category: {product.category}</p>
              <p>{product.shortDesc}</p>
              <div className="d-flex justify-content-between align-items-center mt-2">
                <span className="fw-bold">${product.price}</span>
                <button className="btn btn-outline-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Description and Reviews Section with Toggle */}
      <div className="row mt-4">
        <div className="col-12">
          <div className="card shadow-sm" style={{ border: 'none' }}>
            <div className="card-body" style={{ border: 'none' }}>
              <div className="d-flex justify-content-between">
              <button
                  className={`btn ${showDescription ? 'btn-primary' : 'btn-outline-primary'}`}
                  onClick={() => setShowDescription(true)}
                >
                  Description
                </button>
                <button
                  className={`btn ${!showDescription ? 'btn-primary' : 'btn-outline-primary'}`}
                  onClick={() => setShowDescription(false)}
                >
                  Reviews
                </button>

              </div>

              {/* Conditionally Render Description or Reviews */}
              {showDescription ? (
                <div>
                  <h5>Description</h5>
                  <p>{product.description}</p>
                </div>
              ) : (
                <div>
                  <h5>Reviews</h5>
                  <ul>
                    {product.reviews.map((review, index) => (
                      <p key={index}>
                        <strong>{review.user}</strong>{review.comment} ({review.rating} stars)
                      </p>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <Footer/>
    </>
  );
};
