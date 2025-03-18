import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import "../Css-page/MeetCreators.css";

const creators = [
  {
    name: "कृति गोयल (COO)",
    img: "/images/kriti.jpg",
    desc: "फैशन डिजाइन ग्रेजुएट, जो कंपनी के डिजाइन और फ्रंट-एंड संचालन को मैनेज करती हैं।",
    insta: "https://instagram.com/",
    fb: "https://facebook.com/",
  },
  {
    name: "आदित्य अग्रवाल (CEO)",
    img: "/images/aditya.jpg",
    desc: "आर्थिक सम्मान में स्नातक, जो ब्रांड मार्केटिंग और बिजनेस ग्रोथ में विशेषज्ञ हैं।",
    insta: "https://instagram.com/",
    fb: "https://facebook.com/",
  },
  {
    name: "गौरव गर्ग (CPO)",
    img: "/images/gaurav.jpg",
    desc: "सिविल इंजीनियरिंग स्नातक, जो आर्टिसन्स के साथ समन्वय और उत्पादन संचालन संभालते हैं।",
    insta: "https://instagram.com/",
    fb: "https://facebook.com/",
  },
  {
    name: "अविनाश वर्मा (CTO)",
    img: "/images/avinash.jpg",
    desc: "प्रौद्योगिकी विशेषज्ञ, जो डिजिटल इनोवेशन और वेबसाइट के विकास की देखरेख करते हैं।",
    insta: "https://instagram.com/",
    fb: "https://facebook.com/",
  },
  {
    name: "सौरभ शर्मा (CFO)",
    img: "/images/saurabh.jpg",
    desc: "वित्तीय विश्लेषक, जो वित्तीय योजना और बजट का प्रबंधन करते हैं।",
    insta: "https://instagram.com/",
    fb: "https://facebook.com/",
  },
];

const MeetCreators = () => {
  return (
    <div className="meet-creators-section">
      <Container>
        <h2 className="text-center">Meet Our Creators</h2>
        <h3 className="text-center">Faces Behind Patwa Bartan Bhandar</h3>

        <Row>
          {creators.slice(0, 3).map((creator, index) => (
            <Col md={4} sm={6} key={index}>
              <Card className="creator-card">
                <Card.Img variant="top" src={creator.img} className="creator-img" />
                <Card.Body>
                  <h4>{creator.name}</h4>
                  <p>{creator.desc}</p>
                  <div className="social-icons">
                    <a href={creator.insta} target="_blank" rel="noopener noreferrer">
                      <FaInstagram />
                    </a>
                    <a href={creator.fb} target="_blank" rel="noopener noreferrer">
                      <FaFacebook />
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row>
          {creators.slice(3, 5).map((creator, index) => (
            <Col md={6} sm={12} key={index}>
              <Card className="creator-card">
                <Card.Img variant="top" src={creator.img} className="creator-img" />
                <Card.Body>
                  <h4>{creator.name}</h4>
                  <p>{creator.desc}</p>
                  <div className="social-icons">
                    <a href={creator.insta} target="_blank" rel="noopener noreferrer">
                      <FaInstagram />
                    </a>
                    <a href={creator.fb} target="_blank" rel="noopener noreferrer">
                      <FaFacebook />
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default MeetCreators;
