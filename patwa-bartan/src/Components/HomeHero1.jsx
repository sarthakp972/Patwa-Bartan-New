import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../Css-page/HomeHero1.css';

const metals = [
  {
    name: 'स्टील के बर्तन',
    image: 'https://ptal.in/cdn/shop/files/DSC_2771-4-2-2.jpg?v=1707729661&width=540',
    description: 'मजबूत और टिकाऊ स्टील के बर्तन, रोजमर्रा के उपयोग के लिए आदर्श।',
  },
  {
    name: 'तांबे के बर्तन',
    image: 'https://ptal.in/cdn/shop/files/KANSA_THAALI_SET_11-3-2-2.jpg?v=1707730028&width=540',
    description: 'स्वास्थ्यवर्धक तांबे के बर्तन, आयुर्वेदिक गुणों से भरपूर।',
  },
  {
    name: 'कांसे के बर्तन',
    image: 'https://ptal.in/cdn/shop/files/BRASS_KADHAI_SET_ROUND_3L_FLAT_3L_ROUND_1L_-3-2-2.jpg?v=1707729273&width=540',
    description: 'शुद्ध कांसे के बर्तन, पारंपरिक और प्राचीन महत्व के साथ।',
  },
];

const HomeHero1 = () => {
  return (
    <Container className="shop-by-metals text-center my-5">
      <h2 className="section-title">मेटल के अनुसार खरीदें</h2>
      <Row className="mt-4">
        {metals.map((metal, index) => (
          <Col key={index} md={4} sm={12} className="metal-item">
            <div className="metal-card">
              <img src={metal.image} alt={metal.name} className="metal-image" />
              <h4 className="metal-name">{metal.name}</h4>
              <p className="metal-description">{metal.description}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomeHero1 ;
