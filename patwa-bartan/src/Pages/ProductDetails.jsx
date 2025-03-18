import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Card, Button, Carousel } from "react-bootstrap";
import { FaShoppingCart, FaWhatsapp } from "react-icons/fa";
import '../Css-page/ProductDetails.css';

const ProductDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  if (!product) {
    return <h2 className="text-center mt-5">Product not found!</h2>;
  }

  const addToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.Title} added to cart!`);
  };

  const sendToWhatsApp = () => {
    const message = `I want to buy this product: 
🛍 *${product.Title}*
📸 *Image:* ${product.images.main}
💰 *Price:* ₹${product.Price} (${product.Discount} OFF)
⚖️ *Weight:* ${product.weight}
📏 *Size:* ${product.size}
🔹 *Metal:* ${product.Metal}
🏷 *Brand:* ${product.Brand}
📌 *About:* ${product.AboutThisItem}

Please let me know more details!`;
    
    const whatsappURL = `https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="container mt-5">
      <div className="product-detail-card">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={product.images.main} alt={product.Title} />
          </Carousel.Item>
          {product.images.sub && product.images.sub.map((img, index) => (
            <Carousel.Item key={index}>
              <img className="d-block w-100" src={img} alt={`Sub ${index}`} />
            </Carousel.Item>
          ))}
        </Carousel>

        <div className="product-info">
          <h2>{product.Title}</h2>
          <p><strong>Price:</strong> ₹{product.Price} <span className="discount">-{product.Discount} OFF</span></p>
          <p><strong>Size:</strong> {product.size}</p>
          <p><strong>Weight:</strong> {product.weight}</p>
          <p><strong>Metal:</strong> {product.Metal}</p>
          <p><strong>Brand:</strong> {product.Brand}</p>
          <p><strong>About:</strong> {product.AboutThisItem}</p>

          <div className="button-group">
            <Button variant="success" className="whatsapp-button" onClick={sendToWhatsApp}>
              <FaWhatsapp /> Buy on WhatsApp
            </Button>
            <Button variant="primary" className="cart-button" onClick={addToCart}>
              <FaShoppingCart /> Add to Cart
            </Button>
            <Button variant="secondary" onClick={() => navigate(-1)}>Go Back</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
