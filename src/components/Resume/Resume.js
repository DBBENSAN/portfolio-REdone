import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";

export default function Resume() {
  const handleDownload = () => {
    window.open("", "");
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Button onClick={handleDownload}>Download Resume</Button>
      </Row>
    </Container>
  );
}