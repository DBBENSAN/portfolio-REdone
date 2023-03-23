import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import "./Projects.css"
import Viewport from "./Viewport";

export default function Projects() {
  const [activeTab, setActiveTab] = useState("works");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="projects-container">
      <div className="projects-header">
        <h2 className="projects-header-text">Check out some of my work!</h2>
      </div>
      <Row className="mt-4">
        <div className="d-flex justify-content-center mb-4">
          <Button
            onClick={() => handleTabChange("photos")}
            className={activeTab === "photos" ? "active" : ""}
          >
            Photos
          </Button>
          <Button
            onClick={() => handleTabChange("works")}
            className={activeTab === "works" ? "active" : ""}
          >
            Projects
          </Button>
          <Button
            onClick={() => handleTabChange("blogs")}
            className={activeTab === "blogs" ? "active" : ""}
          >
            Blogs
          </Button>
        </div>
      </Row>
      <Row>
        <Col>
          <Viewport activeTab={activeTab} />
        </Col>
      </Row>
    </div>
  )
}