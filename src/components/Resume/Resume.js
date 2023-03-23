import React from "react";
import { Container, Row } from "react-bootstrap";

import Skills from "./Skills"
import './Resume.css'

export default function Resume() {
  const handleDownload = () => {
    window.open("", "");
  };

  return (
    <Container>
      <Skills />
      <Row className="fiddy">
        <button onClick={handleDownload}>Download Resume</button>
      </Row>
    </Container>
  );
}