import React from 'react';
import { SliderData } from './ProductData'; // Assuming this is an array of objects with the necessary data

export const Products = () => {
  return (
    <div
      id="carouselExampleSlides"
      className="carousel slide bg-dark bg-gradient p-4"
      data-bs-ride="carousel"
      data-bs-interval="800"
    >
      <div className="carousel-inner">
        {SliderData.map((item, index) => (
          <div
            className={`carousel-item ${index === 0 ? 'active' : ''}`}
            key={item.id}
          >
            <div className="carousal d-flex justify-content-lg-end align-items-center">
              {/* Caption Content */}
              <div className="carousel-caption text-start">
                <h3 className="text-black w-50">{item.title}</h3>
                <p className="text-black w-50">{item.desc}</p>
              </div>

              {/* Image with margin to create space from the content */}
              <img
                src={item.cover}
                className="carousel-image"
                alt={item.title}
                style={{
                  height: '300px',  // Adjust image height as needed
                  objectFit: 'contain', // Ensures the image fits within the container
                  marginTop: '30px', // Adds space between the image and content
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Carousel Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleSlides"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleSlides"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
