import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import travel from "../../Assets/Projects/travel.png";
import apk from "../../Assets/Projects/apk.jpeg";
import diabetes from "../../Assets/Projects/diabetes.jpeg";

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
              imgPath={apk}
              isBlog={false}
              title="Malicious apk"
              description="The project, consist of malicious payload, embedded in an apk and send to the user, which listens to the daily life activity of the user like text, camera, microphone and contacts."
              ghLink="https://github.com/vaibhav-0310/project-exhibition-2"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={diabetes}
              isBlog={false}
              title="Diabetes Prediction Model"
              description="A diabetes prediction model, used to predict the diabetes at an early stages using various input parameter, which helps in the early treatment of diabetes."
              ghLink="https://github.com/vaibhav-0310/Diabetes-testing-machine-learning-model"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={travel}
              isBlog={false}
              title="WanderLust"
              description="A traveling booking website, build using html/css, Node.js, Mongodb. The website consist of various resources, which let's the user to enter the decription, rating and the booking of hotel. The customers can also rate the hotel facilites etc."
              ghLink="https://github.com/vaibhav-0310/travelMate"             
            />
          </Col>

        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
