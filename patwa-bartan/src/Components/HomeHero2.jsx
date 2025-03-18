import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../Css-page/HomeHero2.css";

const lootProducts = [
  {
    name: "Steel Water Bottle",
    image: "https://ptal.in/cdn/shop/files/DSC_7040.jpg?v=1737716463&width=720",
    oldPrice: 500,
    newPrice: 299,
    discount: "40%",
    description: "स्टील की मजबूत और टिकाऊ पानी की बोतल, जो स्वास्थ्य के लिए सुरक्षित और पर्यावरण के अनुकूल है।",
  },
  {
    name: "Copper Jug",
    image: "https://ptal.in/cdn/shop/files/DSC_7040.jpg?v=1737716463&width=720",
    oldPrice: 1200,
    newPrice: 799,
    discount: "33%",
    description: "तांबे का जग, जो पानी को शुद्ध करता है और आपको सेहतमंद बनाए रखता है।",
  },
  {
    name: "Brass Kadhai",
    image: "https://ptal.in/cdn/shop/files/DSC_7040.jpg?v=1737716463&width=720",
    oldPrice: 1500,
    newPrice: 999,
    discount: "34%",
    description: "शुद्ध पीतल की कढ़ाई, जिसमें स्वादिष्ट भारतीय व्यंजन बनाए जा सकते हैं। इसका उपयोग लंबे समय तक किया जा सकता है।",
  },
  {
    name: "Brass Kadhai",
    image: "https://ptal.in/cdn/shop/files/DSC_7040.jpg?v=1737716463&width=720",
    oldPrice: 1500,
    newPrice: 999,
    discount: "34%",
    description: "शुद्ध पीतल की कढ़ाई, जिसमें स्वादिष्ट भारतीय व्यंजन बनाए जा सकते हैं। इसका उपयोग लंबे समय तक किया जा सकता है।",
  },
  {
    name: "Brass Kadhai",
    image: "https://ptal.in/cdn/shop/files/DSC_7040.jpg?v=1737716463&width=720",
    oldPrice: 1500,
    newPrice: 999,
    discount: "34%",
    description: "शुद्ध पीतल की कढ़ाई, जिसमें स्वादिष्ट भारतीय व्यंजन बनाए जा सकते हैं। इसका उपयोग लंबे समय तक किया जा सकता है।",
  },
  {
    name: "Brass Kadhai",
    image: "https://ptal.in/cdn/shop/files/DSC_7040.jpg?v=1737716463&width=720",
    oldPrice: 1500,
    newPrice: 999,
    discount: "34%",
    description: "शुद्ध पीतल की कढ़ाई, जिसमें स्वादिष्ट भारतीय व्यंजन बनाए जा सकते हैं। इसका उपयोग लंबे समय तक किया जा सकता है।",
  },
  {
    name: "Brass Kadhai",
    image: "https://ptal.in/cdn/shop/files/DSC_7040.jpg?v=1737716463&width=720",
    oldPrice: 1500,
    newPrice: 999,
    discount: "34%",
    description: "शुद्ध पीतल की कढ़ाई, जिसमें स्वादिष्ट भारतीय व्यंजन बनाए जा सकते हैं। इसका उपयोग लंबे समय तक किया जा सकता है।",
  },
];

const truncateText = (text, length) => {
  return text.length > length ? text.substring(0, length) + "..." : text;
};

const HomeHero2 = () => {
  return (
    <Container className="loot-sale-container my-5">
      <h2 className="section-title text-center">💥 लूट सेल - भारी छूट पर उत्पाद! 💥</h2>
      <div className="loot-sale-wrapper">
        {lootProducts.map((product, index) => (
          <div key={index} className="loot-sale-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h4 className="product-name mt-2">{product.name}</h4>
            <p className="product-description">{truncateText(product.description, 50)}</p>
            <p className="product-price">
              <span className="old-price">₹{product.oldPrice}</span> <span className="new-price">₹{product.newPrice}</span>
              <span className="discount-badge ms-2"> छूट: {product.discount}</span>
            </p>
            <Button className="add-to-cart-btn">कार्ट में जोड़ें </Button>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default HomeHero2;
