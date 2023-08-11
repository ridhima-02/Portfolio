import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am from Sri Ganganagar, Rajasthan, and I am currently in my final year of pursuing a degree in Computer Science Engineering at Thapar Institute of Engineering and Technology, Patiala.
            My academic focus revolves around subjects such as Database Management Systems (DBMS), Operating Systems (OS), OOPS , Machine Learning and Data Science. In addition,
            I have actively engaged in projects spanning the domains of Web Development and Machine Learning.
            I'm pretty good at understanding data structures and algorithms, which helps me solve problems effectively.
          </p>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
