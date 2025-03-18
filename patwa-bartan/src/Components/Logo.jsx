import React from "react";
import { Container } from "react-bootstrap";
import "../Css-page/Logo.css";

const Logo = () => {
  return (
    <Container className="d-flex align-items-center justify-content-center logo-container">
      <h1 className="logo-text">पटवा <span className="highlight">बर्तन भंडार</span></h1>
    </Container>
  );
};

export default Logo;
