import React from "react";
import { Link, useParams } from "react-router-dom";
import useProducts from "../context/useProducts";
import useCart from "../context/useCart";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import "../Css-page/CategoryPage.css";

const categoryNames = {
  Pital: "पीतल",
  aluminium: "एल्यूमिनियम",
  cookware: "कुकवेयर",
  copper: "तांबा",
  electronic: "इलेक्ट्रॉनिक",
  gift: "उपहार",
  kanch_chhini: "कांच और चीनी मिट्टी",
  kansa: "कांसा",
  lakdhi: "लकड़ी का सामान",
  steel: "स्टील",
  plastic: "प्लास्टिक",
  pooja_saman: "पूजा का सामान",
  nonstick: "नॉन-स्टिक",
};

const CategoryPage = () => {
  const { selectedCategory, products } = useProducts();
  const { addToCart } = useCart();
  const { category } = useParams();

  const categoryKey = category || selectedCategory;
  const categoryProducts = products[categoryKey] || [];
  const categoryTitle = categoryNames[categoryKey] || categoryKey;

  return (
    <Container className="mt-4 category-page">
      <h2 className="text-center mb-4 py-2 px-3 bg-dark text-warning rounded shadow-lg">
        {categoryTitle} के प्रोडक्ट्स
      </h2>
      <Row>
        {categoryProducts.length > 0 ? (
          categoryProducts.map((product, index) => (
            <Col key={index} lg={3} md={4} sm={6} xs={12} className="mb-4">
              <Card className="product-card">
                <Link to={`/product/${product.id}`} className="text-decoration-none text-dark">
                  <Card.Img
                    src={product.images?.main || "https://via.placeholder.com/150"}
                    alt={product.Title}
                    className="product-image"
                  />
                </Link>
                <Card.Body className="product-details">
                  <Link to={`/product/${product.id}`} className="text-decoration-none text-dark">
                    <Card.Title className="product-title">{product.Title}</Card.Title>
                  </Link>
                  <p className="product-description" title={product.Description}>
                    {product.description.length > 70
                      ? product.description.substring(0, 67) + "..."
                      : product.Description}
                  </p>
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
                  <Button
                    variant="primary"
                    className="add-cart-button"
                    onClick={() => addToCart({ ...product, quantity: 1 })}
                  >
                    <FaShoppingCart /> Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p className="text-center">{categoryTitle} में कोई उत्पाद नहीं मिला।</p>
        )}
      </Row>
    </Container>
  );
};

export default CategoryPage;
