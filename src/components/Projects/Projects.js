import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import faceRecog from "../../Assets/Projects/Celebrity Face Recognition.jpg";
import doubtHelp from "../../Assets/Projects/DoubtHelp.jpg";
import reviews from "../../Assets/Projects/Hotel Reviews.jpg";
import mashup from "../../Assets/Projects/Song Mashup.jpg";
import tictactoe from "../../Assets/Projects/TicTacToe.jpg";
import topsis from "../../Assets/Projects/Topsis.jpg";

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
              imgPath={faceRecog}
              isBlog={false}
              title="Celebrity Face Recognition"
              description="Precision in recognizing public figures' faces, coupled with intelligent face blurring for privacy protection. Ideal for legal and entertainment applications. Embrace technology that respects fame and privacy simultaneously."
            // ghLink="https://github.com/soumyajit4419/Chatify"
            // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={doubtHelp}
              isBlog={false}
              title="Doubt Help"

              description="A place where you can ask questions and get help. It's like a friendly community where you post your doubts, and others with knowledge can give you answers."
            // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
            // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reviews}
              isBlog={false}
              title="Sentiment Analysis for Hotel Reviews"
              description="A smart way to figure out how people feel about their hotel stays.

Using Machine Learning Algoritms, we sort out whether reviews are positive, negative, or just okay. For travelers, it means getting the real scoop on places to stay."
            // ghLink="https://github.com/soumyajit4419/Editor.io"
            // demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mashup}
              isBlog={false}
              title="Song Mashup Generator"
              description="An web application where you input your preferred singer, along with the desired number of songs and duration, to receive a customized song mashup."
              ghLink="https://github.com/ridhima-02/Mashup-Generator"
            // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tictactoe}
              isBlog={false}
              title="Tic Tac Toe"
              description="A game in which two players take turns in drawing either an ` O' or an ` X' in one square of a grid consisting of nine squares. The winner is the first player to get three of the same symbols in a row."
              ghLink="https://github.com/ridhima-02/Tic-tac-toe"
            // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={topsis}
              isBlog={false}
              title="Topsis"
              description="TOPSIS is based on the fundamental premise that the best solution has the shortest distance from the positive-ideal solution, and the longest distance from the negative-ideal one."
              ghLink="https://github.com/ridhima-02/TOPSIS-Generator-Function"
            // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
