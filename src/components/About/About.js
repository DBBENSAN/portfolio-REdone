import React from "react";
import { Row, Col } from "react-bootstrap";
import { self } from "../../assets";
import './About.css';


export default function About() {
   return (
      <Row className="about">
         <Col md={{ span: 6, order: 2 }}>
            <h1>About Me</h1>
            <p>Hi there! My name is Dan and I'm a Web Developer.</p>
            <p>I'm a lifelong student who enjoys learning new things and exploring new places. When I'm not behind the keyboard, I'm out traveling with my furry friend Mocha, camera in hand.</p>
            <p>My goal is to build innovative and user-friendly applications that solve real-world problems. I'm excited to keep learning and growing as a developer, and to collaborate with others to create amazing things.</p>
            <p>Feel free to reach out and connect with me on LinkedIn or GitHub!</p>
         </Col>
         <Col md={{ span: 6, order: 1 }}>
            <div className="image-wrapper">
               <img src={self} alt="Portrait of Dan and Mocha" />
            </div>
         </Col>
      </Row>
   );
}