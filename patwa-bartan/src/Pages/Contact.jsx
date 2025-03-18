import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Css-page/Contact.css";

const Contact = () => {
  return (
    <Container className="contact-container">
      <h2 className="section-title">हमसे संपर्क करें</h2>
      <Row className="contact-info">
        {/* Address & Contact */}
        <Col md={6} className="info-box">
          <h4><FaMapMarkerAlt /> हमारा पता</h4>
          <p>पटवा बर्तन भंडार, मुख्य बाजार, नसरुल्लागंज, मध्य प्रदेश, भारत</p>

          <h4><FaPhone /> फोन नंबर</h4>
          <p>+91 98765 43210</p>

          <h4><FaEnvelope /> ईमेल</h4>
          <p>info@patwabartanbhandar.com</p>

          <h4>📍 गूगल मैप</h4>
          <iframe
            title="Google Map"
            className="google-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.8471721525216!2d90.41251891498163!3d23.750883694590827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDQ1JzA2LjIiTiA5MMKwMjQnNTIuOSJF!5e0!3m2!1sen!2sbd!4v1632549623085!5m2!1sen!2sbd"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </Col>

        {/* Contact Form */}
        <Col md={6} className="form-box">
          <h4>📩 हमें संदेश भेजें</h4>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>नाम</Form.Label>
              <Form.Control type="text" placeholder="अपना नाम दर्ज करें" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>ईमेल</Form.Label>
              <Form.Control type="email" placeholder="आपका ईमेल" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>संदेश</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="अपना संदेश लिखें" />
            </Form.Group>
            <Button variant="primary" type="submit" className="submit-button">
              भेजें
            </Button>
          </Form>
        </Col>
      </Row>

      {/* Social Media Links */}
      <Row className="social-section">
        <h4>हमारे सोशल मीडिया पर जुड़ें</h4>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook className="social-icon fb" /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram className="social-icon insta" /></a>
          <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer"><FaWhatsapp className="social-icon wa" /></a>
          <a href="mailto:info@patwabartanbhandar.com"><FaEnvelope className="social-icon email" /></a>
        </div>
      </Row>
      
      {/* Business Hours */}
      <Row className="business-hours">
        <h4>⌚ हमारा समय</h4>
        <p>सोमवार - शनिवार: सुबह 10:00 बजे - रात 9:00 बजे</p>
        <p>रविवार: बंद</p>
      </Row>
    </Container>
  );
};

export default Contact;
