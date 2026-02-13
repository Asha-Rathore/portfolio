import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a Software Engineer who loves turning ideas into reliable,
              scalable software that makes a real impact. With 2+ years of experience, 
              I’ve built production-ready backend, web, and mobile applications — 
              focusing on clean architecture, performance, and maintainability.
              <br />
              <br />
              I work confidently with
              <i>
                <b className="purple">
                  {" "}
                  Java, Spring Boot, Flutter, REST APIs, .NET (Blazor), and modern web & app technologies{" "}
                </b>
              </i>
              , and I enjoy designing systems that are both technically strong and user-focused.
              <br />
              <br />
              Currently pursuing my Master’s at  
              <i>
                <b className="purple">
                  {" "}
                  Technische Universität Ilmenau,{" "}
                </b>
              </i>
              I’m expanding into large-scale system design and Applied AI — integrating 
              intelligent features into real-world applications.
              {/* <br />
              <br />
              Whenever possible, I love building projects with
              <b className="purple"> Node.js </b> and modern frameworks like{" "}
              <i>
                <b className="purple">React.js</b> and{" "}
                <b className="purple">Next.js</b>.
              </i> */}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
