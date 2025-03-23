import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { ref, onValue } from "firebase/database";
import { realtimeDB } from "../FirebaseConfig"; // Import your Firebase config
import "../Css-page/MeetCreators.css";

const MeetCreators = () => {
  const [creators, setCreators] = useState([]);

  // Fetch data from Firebase
  useEffect(() => {
    const creatorsRef = ref(realtimeDB, "creators"); // Reference to 'creators' node in Firebase

    onValue(creatorsRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const creatorsArray = Object.values(data) // Convert object to array
          .filter((creator) => 
            creator.name && creator.img && creator.desc && creator.insta && creator.fb
          ); // Remove entries with false/null/undefined fields

        setCreators(creatorsArray);
      } else {
        console.log("No data available");
        setCreators([]); // Ensure creators list is empty if no valid data
      }
    });
  }, []);

  return (
    <div className="meet-creators-section">
      <Container>
        <h2 className="text-center">Meet Our Creators</h2>
        <h3 className="text-center">Faces Behind Patwa Bartan Bhandar</h3>

        {creators.length === 0 ? (
          <p className="text-center">No creators available.</p>
        ) : (
          <>
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
          </>
        )}
      </Container>
    </div>
  );
};

export default MeetCreators;
