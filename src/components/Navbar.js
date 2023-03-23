import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

export default function NavBar() {


  return (
    <Navbar bg="light">
    <Container>
      <Navbar.Brand href="#home">DB</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="justify-content-end">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/project">Projects</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link> 
          <Nav.Link href="/resume">Resume</Nav.Link> 
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}