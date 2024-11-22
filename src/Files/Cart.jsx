import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Cart = () => {
  const { cart, addToCart, removeFromCart, totalItems, totalPrice } = useCart();

  return (
    <>
      <Header />
      <div className="container my-5">
        <h1 className="text-center mb-4">Your Cart</h1>
        <div className="row">
          {/* Cart Items Section */}
          <div className="col-lg-8">
            {cart.length > 0 ? (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="card mb-4 shadow-sm border-0"
                >
                  <div className="row g-0 align-items-center">
                    {/* Product Image */}
                    <div className="col-md-2">
                      <img
                        src={item.imgUrl}
                        alt={item.productName}
                        className="img-fluid rounded"
                        style={{
                          height: "100px",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    {/* Product Details */}
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title mb-1">{item.productName}</h5>
                        <p className="text-muted mb-1">
                          ${item.price.toFixed(2)} x {item.quantity} ={" "}
                          <b>${(item.price * item.quantity).toFixed(2)}</b>
                        </p>
                      </div>
                    </div>
                    {/* Quantity Controls */}
                    <div className="col-md-2 d-flex flex-column align-items-center">
                      <button
                        className="btn btn-primary btn-sm mb-2"
                        onClick={() => addToCart(item)}
                      >
                        +
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => removeFromCart(item.id)}
                      >
                        -
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center fs-5">Your cart is empty.</p>
            )}
          </div>

          {/* Cart Summary Section */}
          <div className="col-lg-4">
            <div className="card shadow-sm border-0 p-4">
              <h5 className="card-title text-center mb-3">Cart Summary</h5>
              <div className="mb-3">
                <p className="mb-1">
                  <strong>Total Items:</strong> {totalItems}
                </p>
                <p className="mb-1">
                  <strong>Total Price:</strong> ${totalPrice.toFixed(2)}
                </p>
              </div>
              <button className="btn btn-success w-100 py-2">Proceed to Checkout</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
