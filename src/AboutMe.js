import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { FaLinkedin, FaGithub } from "react-icons/fa";


const AboutMe = () => {
  return (
    <div className="about">
    <div className="container">
      <h2>Hi, I'm John Doe.</h2>
      <Row className="align-items-center">
        <Col md={4} className="mb-4 mb-md-0">
          <Image
            src={process.env.PUBLIC_URL + "/Avatar-Maker.png"}
            alt="Avatar"
            roundedCircle
            fluid
          />
        </Col>
        <Col md={8}>
          <p>
            I am a passionate developer with a keen interest in ReactJS and web development. I have several years of experience building interactive and responsive web applications. My goal is to create meaningful and user-friendly digital experiences. I love working with modern technologies and always strive to stay up-to-date with the latest trends in the industry.
          </p>
          <div style={{ marginTop: "20px" }}>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={40} style={{ marginRight: "10px" }} />
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <FaGithub size={40} style={{ marginRight: "10px" }} />
            </a>
          </div>
        </Col>
      </Row>
    </div>
    </div>
  );
};

export default AboutMe;



