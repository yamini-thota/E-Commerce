import React, { useState } from "react";
import { ImagesData } from "./ImagesData"; // Import your data

export const ClickableImage = () => {
    // Step 1: State to hold the selected category and search term
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [searchTerm, setSearchTerm] = useState(""); // New state for search

    // Step 2: Filter products based on selected category and search term
    const filteredProducts = ImagesData.filter(item => {
        const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
        const matchesSearch = item.productName.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4"><b>Products</b></h2>

            {/* Category Dropdown and Search Bar in the same row */}
            <div className="d-flex justify-content-center mb-4">
                {/* Category Dropdown */}
                <select
                    id="category-select"
                    className="form-select w-auto me-3"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    <option value="all">All</option>
                    <option value="mobile">Mobile</option>
                    <option value="watch">Watch</option>
                    <option value="wireless">Wireless</option>
                    <option value="sofa">Sofa</option>
                    <option value="chair">Chair</option>
                </select>

                {/* Search Bar */}
                <form className="d-flex" role="search" onSubmit={(e) => e.preventDefault()}>
                    <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)} // Update search term on input change
                    />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>

            {/* Display products from the selected category and matching search term */}
            <div className="row g-4">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((item) => (
                        <div key={item.id} className="col-md-4">
                            <div className="card h-100 shadow-sm">
                                <img src={item.imgUrl} className="card-img-top img-fluid" alt={item.productName} />
                                <div className="card-body">
                                    <h5 className="card-title">{item.productName}</h5>
                                    <small className="text-muted">Rating: {item.avgRating}</small>
                                    <div className="d-flex justify-content-between align-items-center mt-3">
                                        <span className="fw-bold">${item.price}</span>
                                        <button className="btn btn-outline-primary btn-sm">+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <h5>No Products available for this category or search term.</h5>
                )}
            </div>

            {/* If selected category is "all" and no products, show this message */}
            {selectedCategory === "all" && filteredProducts.length === 0 && (
                <h5 className="text-center mt-4">Sorry, No Products are available.</h5>
            )}
        </div>
    );
};
