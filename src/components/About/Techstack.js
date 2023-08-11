import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiMysql,
  SiHtml5,
  SiCss3,
  SiBootstrap
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={5} md={3} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiHtml5 />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiCss3 />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiBootstrap />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <DiGit />
      </Col>

    </Row>
  );
}

export default Techstack;
