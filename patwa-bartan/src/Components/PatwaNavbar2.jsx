import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useProducts from "../context/useProducts";
import "../Css-page/PatwaNavbar2.css";

// Mapping Firebase category keys to Hindi names
const categoryNames = {
  Pital: "पीतल",
  cookware: "कुकवेयर",
  copper: "तांबा",
  electronic: "इलेक्ट्रॉनिक",
  gift: "उपहार",
  kanch_chhini: "कांच और चीनी मिट्टी",
  kansa: "कांसा",
  lakdhi: "लकड़ी का सामान",
  Steel: "स्टील",
  plastic: "प्लास्टिक",
  pooja_saman: "पूजा का सामान",
  nonstick: "नॉन-स्टिक",
  steel:"स्टील",
  aluminium:"एल्युमिनियम",
};

const PatwaNavbar2 = () => {
  const { products, setSelectedCategory } = useProducts();
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(""); // Track active category

  // Convert Firebase categories into menu items
  const categories = Object.keys(products).map((key) => ({
    name: categoryNames[key] || key, // Show Hindi name if available, else use the key
    key: key, // Firebase key
  }));

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setActiveCategory(category); // Set active category
    navigate(`/category/${category}`);
  };

  return (
    <Navbar className="compact-navbar" variant="dark" style={{ backgroundColor: "#0c5273" }}>
      <Container fluid>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto flex-wrap">
            {categories.map((category, index) => (
              <Nav.Link 
                key={index} 
                className={`text-white ${activeCategory === category.key ? "active-category" : ""}`}
                onClick={() => handleCategoryClick(category.key)}
                style={{ cursor: "pointer" }}
              >
                {category.name}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default PatwaNavbar2;
