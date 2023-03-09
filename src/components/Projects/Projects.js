import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Viewport from "./Viewport";

export default function Projects() {
  const [activeTab, setActiveTab] = useState("onTheWeb");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Container>
      <h2>Check out my latest works</h2>
      <Row className="mt-4">
        <Col>
          <div className="d-flex justify-content-center mb-4">
            <Button
              className="mr-2"
              variant={activeTab === "onTheWeb" ? "primary" : "secondary"}
              onClick={() => handleTabChange("onTheWeb")}
            >
              On the Web
            </Button>
            <Button
              className="mr-2"
              variant={activeTab === "behindTheLens" ? "primary" : "secondary"}
              onClick={() => handleTabChange("behindTheLens")}
            >
              Behind the Lens
            </Button>
            <Button
              variant={activeTab === "readSomeBlogs" ? "primary" : "secondary"}
              onClick={() => handleTabChange("readSomeBlogs")}
            >
              Read Some Blogs
            </Button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <Viewport activeTab={activeTab} />
        </Col>
      </Row>
    </Container>
  );
}