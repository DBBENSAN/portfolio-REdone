import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      <Container className="footer">
        <Row>
          <Col>
            <p>Made by Daniele Bensan</p>
          </Col>
          <Col>
            <p>With special thanks to UCB Extension</p>
          </Col>
          <Col>
            <ul>
              <li>
                <a
                  href="https://github.com/DBBENSAN"
                  style={{ color: "Black" }}
                  target="_blank"
                  rel="noopener noreferrer"
                ><AiFillGithub />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/danielebensan/"
                  style={{ color: "Black" }}
                  target="_blank"
                  rel="noopener noreferrer"
                ><FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}