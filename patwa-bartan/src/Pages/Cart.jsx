import React from "react";
import { Card, Button } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import useCart from "../context/useCart";
import "../Css-page/Cart.css";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getCartCount } = useCart();

  return (
    <div className="container mt-4 cart-page">
      <h2 className="text-center mb-4">
        🛒 Shopping Cart ({getCartCount()} items)
      </h2>

      {cart.length > 0 ? (
        <div className="row">
          {cart.map((product, index) => (
            <div key={index} className="col-lg-6 col-md-12 mb-4">
              <Card className="cart-card">
                <div className="cart-card-body">
                  {/* ✅ Product Image */}
                  <Card.Img
                    variant="top"
                    src={product.images?.main || "https://via.placeholder.com/150"}
                    alt={product.Title}
                    className="cart-product-image"
                  />

                  {/* ✅ Product Details */}
                  <div className="cart-product-details">
                    <Card.Title className="cart-product-title">{product.Title}</Card.Title>
                    <Card.Text className="cart-product-description">
                      {product.description || "No description available"}
                    </Card.Text>

                    {/* ✅ Price Section */}
                    <div className="price-section">
                      {product.discount ? (
                        <>
                          <span className="discount-price">
                            ₹{(product.Price * (1 - product.discount / 100)).toFixed(2)}
                          </span>
                          <span className="original-price">₹{product.Price}</span>
                          <span className="discount-label">-{product.discount}% OFF</span>
                        </>
                      ) : (
                        <span className="price">₹{product.Price}</span>
                      )}
                    </div>

                    {/* ✅ Quantity Controls */}
                    <div className="cart-quantity">
                      <Button
                        variant="outline-secondary"
                        onClick={() => updateQuantity(product.id, product.quantity - 1)}
                      >
                        -
                      </Button>
                      <span className="cart-quantity-value">{product.quantity}</span>
                      <Button
                        variant="outline-secondary"
                        onClick={() => updateQuantity(product.id, product.quantity + 1)}
                      >
                        +
                      </Button>
                    </div>

                    {/* ✅ Remove Button */}
                    <Button
                      variant="danger"
                      className="remove-button"
                      onClick={() => removeFromCart(product.id)}
                    >
                      <FaTrash /> Remove
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
