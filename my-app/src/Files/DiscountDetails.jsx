import React from 'react';
import { useParams } from 'react-router-dom';
import { DiscountProducts } from './DiscountData'; // Assuming DiscountProducts is the array with product data

export const DiscountDetail = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const product = DiscountProducts.find(item => item.id === parseInt(id)); // Find the product by ID

  if (!product) {
    return <h2>Product not found</h2>; // Handle case when product is not found
  }

  return (
    <div className="container my-5">
      <h2 className="text-center text-primary mb-4">{product.productName}</h2>
      <div className="row">
        <div className="col-md-6">
          <img
            src={product.imgUrl}
            alt={product.productName}
            style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
          />
        </div>
        <div className="col-md-6">
          <h4>Details</h4>
          <p>{product.description}</p> {/* Assuming your data has a description field */}
          <p><strong>Rating:</strong> {product.avgRating}</p>
          <p><strong>Price:</strong> ${product.price}</p>
          <button className="btn btn-outline-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};
