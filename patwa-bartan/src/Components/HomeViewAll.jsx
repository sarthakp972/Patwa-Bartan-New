import "../Css-page/HomeViewAll.css";
import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

// import { useNavigate } from "react-router-dom";

const products = [
  { 
    id: 1, 
    name: "Steel Plate", 
    description: "मजबूत स्टील से बनी खाने की प्लेट, टिकाऊ और सुरक्षित।",
    price: "₹500", 
    discount: "10%", 
    img: "https://www.jiomart.com//images/product/original/494226707/wonderchef-crescent-electric-kettle-1-5-l-digital-o494226707-p609129469-0-202411271819.jpeg?im=Resize=(310,310)" 
  },
  { 
    id: 2, 
    name: "Brass Glass", 
    description: "पीतल का ग्लास जो पानी को शुद्ध और स्वास्थ्यवर्धक बनाता है।",
    price: "₹700", 
    discount: "15%", 
    img: "/images/brass-glass.jpg" 
  },
  { 
    id: 3, 
    name: "Kansa Bowl", 
    description: "कांसे का कटोरा, पारंपरिक भारतीय भोजन के लिए उपयुक्त।",
    price: "₹650", 
    img: "/images/kansa-bowl.jpg" 
  },
  { 
    id: 4, 
    name: "Copper Bottle", 
    description: "100% शुद्ध तांबे की बोतल, जो पानी को क्षारीय बनाती है।",
    price: "₹1200", 
    discount: "20%", 
    img: "/images/copper-bottle.jpg" 
  },
  { 
    id: 5, 
    name: "Aluminum Pot", 
    description: "हल्का और मजबूत एल्यूमिनियम बर्तन, खाना पकाने के लिए उत्तम।",
    price: "₹900", 
    img: "/images/aluminum-pot.jpg" 
  },
  { 
    id: 6, 
    name: "Puja Thali", 
    description: "पूजा के लिए सुंदर और पारंपरिक थाली, धार्मिक अनुष्ठानों के लिए।",
    price: "₹450", 
    discount: "5%", 
    img: "/images/puja-thali.jpg" 
  },
  { 
    id: 7, 
    name: "Plastic Bucket", 
    description: "मजबूत प्लास्टिक बाल्टी, घरेलू और सफाई कार्यों के लिए।",
    img: "/images/plastic-bucket.jpg" 
  },
];

const HomeViewAll = () => {
//   const navigate = useNavigate();

  return (
    <Container className="product-section">
      <h2 className="section-title">विशेष उत्पाद</h2>
      <Row className="justify-content-center">
        {products.map((product) => (
          <Col key={product.id} xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
            <Card className="product-card"> {/* onClick={() => navigate(`/product/${product.id}`)} */}
              <div className="product-content">
                <img src={product.img} alt={product.name} className="product-img" />
                <div className="product-details">
                  <Card.Title className="product-name">{product.name}</Card.Title>
                  <Card.Text className="product-description">{product.description}</Card.Text>
                  {product.price && <Card.Text className="product-price">{product.price}</Card.Text>}
                  {product.discount && <Card.Text className="product-discount">छूट: {product.discount}</Card.Text>}
                  <Button variant="primary" className="add-to-cart-btn">कार्ट में जोड़ें</Button>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>

      {/* View All Products - Now Underlined Text */}
      <div className="view-all-container">
      <Nav.Link as={Link} to="/all-products"> <p className="view-all-text" >सभी उत्पाद देखें</p></Nav.Link>

       
      </div>
    </Container>
  );
};

export default HomeViewAll;
