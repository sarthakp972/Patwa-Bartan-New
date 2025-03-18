import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useProducts from "../context/useProducts";
import useCart from "../context/useCart";
import { Card, Button, Spinner, Container, Row, Col } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import "../Css-page/AllProducts.css";
// import { motion } from "framer-motion";

const ITEMS_PER_LOAD = 30;

const AllProducts = () => {
  const { products } = useProducts();
  const { addToCart } = useCart();
  const [allProducts, setAllProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(ITEMS_PER_LOAD);

  useEffect(() => {
    const allProductList = Object.values(products).flat();
    setAllProducts(allProductList);
    setVisibleProducts(allProductList.slice(0, ITEMS_PER_LOAD));
  }, [products]);

  const loadMoreProducts = () => {
    if (loading) return;
    setLoading(true);
    setTimeout(() => {
      setVisibleProducts((prev) => [
        ...prev,
        ...allProducts.slice(currentIndex, currentIndex + ITEMS_PER_LOAD)
      ]);
      setCurrentIndex((prev) => prev + ITEMS_PER_LOAD);
      setLoading(false);
    }, 1000);
  };

  return (
    <Container className="mt-4 all-products-page">
      <h2 className="text-center mb-4">सभी उत्पाद</h2>
      <Row>
        {visibleProducts.length > 0 ? (
          visibleProducts.map((product, index) => (
            <Col key={index} lg={3} md={4} sm={6} className="mb-4">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Card className="product-card">
                  <Link to={`/product/${product.id}`} className="text-decoration-none text-dark">
                    <Card.Img
                      variant="top"
                      src={product.images?.main || "https://via.placeholder.com/150"}
                      alt={product.Title}
                      className="product-image"
                    />
                    <Card.Body>
                      <Card.Title className="product-title">{product.Title}</Card.Title>
                      <Card.Text className="product-description">
                        {product.description || "No description available"}
                      </Card.Text>
                    </Card.Body>
                  </Link>
                  <Card.Body>
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
                      className="cart-button"
                      onClick={() => addToCart({ ...product, quantity: 1 })}
                    >
                      <FaShoppingCart /> Add to Cart
                    </Button>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))
        ) : (
          <p className="text-center">कोई उत्पाद उपलब्ध नहीं है।</p>
        )}
      </Row>
      {currentIndex < allProducts.length && (
        <div className="text-center my-4">
          <Button className="load-more-btn" onClick={loadMoreProducts} disabled={loading}>
            {loading ? <Spinner animation="border" size="sm" /> : "Load More"}
          </Button>
        </div>
      )}
    </Container>
  );
};

export default AllProducts;