import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ImagesData } from "./ImagesData"; 
import { useNavigate } from "react-router-dom";


export const AllProducts = () => {
    const navigate = useNavigate();

    const handleImageClick = (product) => {
      // Navigate to the ClickableImage component with product details
      navigate(`/product/${product.id}`, { state: product });
    };
  
  const [searchTerm, setSearchTerm] = useState("");

  // Filter products based on the search term
  const filteredProducts = ImagesData.filter(item =>
    item.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
     
      <div className="container mt-5">
        <h2 className="text-center p-5"
          style={{
            backgroundImage: "url('https://img.freepik.com/free-photo/shopping-bag-cart_23-2148879372.jpg?semt=ais_hybrid')", // Replace with your banner image
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "white",
          }}
        >
          <b>Shop Our Products</b>
        </h2>

        {/* Search Bar */}
        <div className="d-flex justify-content-center mb-4">
          <form className="d-flex" role="search" onSubmit={(e) => e.preventDefault()}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search products"
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} // Update search term
            />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>

        {/* Display Products */}
        <div className="row g-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => (
              <div key={item.id} className="col-md-4">
                <div className="card shadow-sm h-100">
                  <Link to={`/product-details`} state={item}>
                    <img
                      src={item.imgUrl}
                      className="card-img-top"
                      alt={item.productName}
                      style={{ height: "100%", objectFit: "cover" }}
                      onClick={() => handleImageClick(item)}

                    />
                  </Link>
                  <div className="card-body">
                    <h5 className="card-title">{item.productName}</h5>
                    <p className="text-muted">Ratings: {item.avgRating}</p>
                    <div className="d-flex justify-content-between">
                    <p className="fw-bold">${item.price}</p>
                    <Link to={`/product-details`} state={item} className="btn btn-outline-primary btn-sm">
                     +
                    </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h5 className="text-center">No products found.</h5>
          )}
        </div>
      </div>
      
    </>
  );
};
