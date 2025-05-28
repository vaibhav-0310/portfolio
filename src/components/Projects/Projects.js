import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import travelmate from "../../Assets/Projects/travelmate.png";
import Kiara from "../../Assets/Projects/kiara.png";
import digest from "../../Assets/Projects/digest.png";
import zerodha from "../../Assets/Projects/zerodha.png";
import SwapHub from "../../Assets/Projects/swaphub.png";
import images from "../../Assets/Projects/images.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Kiara}
              isBlog={false}
              title="Kiara: E-commerce Platform"
              description="Kiara is a sleek and secure e-commerce platform built with Node.js, EJS, and MongoDB, offering seamless product browsing, user authentication, and a smooth checkout experience."
              ghLink="https://github.com/vaibhav-0310/Kaira-e-commerce"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={digest}
              isBlog={false}
              title="AI Digest"
              description="A smart content aggregator that leverages machine learning to curate and summarize the latest trends and insights from across the web in a digestible format."
              ghLink="https://github.com/vaibhav-0310/ai-digest"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={travelmate}
              isBlog={false}
              title="TravelMate"
              description="A smart travel planning application that helps users discover destinations, create itineraries, and manage trips with real-time recommendations and seamless organization."
              ghLink="https://github.com/vaibhav-0310/travelMate"             
            />
          </Col>

         <Col md={4} className="project-card">
            <ProjectCard
              imgPath={zerodha}
              isBlog={false}
              title="Zerodha Clone"
              description="A full-featured trading platform replica that mimics the core functionalities of Zerodha, offering an intuitive interface for stock market transactions and portfolio management."
              ghLink="https://github.com/vaibhav-0310/zerodha-clone"             
            />
          </Col>
            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SwapHub}
              isBlog={false}
              title="SwapHub"
              description="A seamless digital marketplace platform designed to facilitate easy and secure item swapping, fostering sustainability and community engagement."
              ghLink="https://github.com/vaibhav-0310/SwapHub"             
            />
          </Col>
           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={images}
              isBlog={false}
              title="Alzheimer's Detection using ML"
              description="An innovative application of machine learning techniques to analyze medical imaging data and predict early signs of Alzheimer's, aiming for timely intervention."
              ghLink="https://github.com/vaibhav-0310/Alzheimer-s-disease-prediction"             
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
