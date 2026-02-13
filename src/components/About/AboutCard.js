import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Asha</span> a{" "} 
            <span className="purple">Software Engineer</span> originally from{" "}
            <span className="purple">Pakistan</span> and currently based in{" "}
            <span className="purple">Germany</span>.
            <br />
            <br />
            I build software that’s not just functional, but reliable, scalable, 
            and thoughtfully designed. With 2+ years of professional experience, 
            I’ve worked across backend, web, and mobile systems — turning complex requirements 
            into clean, production-ready solutions.
            <br />
            <br />
            I’m currently pursuing my Master’s at{" "}
            <span className="purple">Technische Universität Ilmenau</span>,
            where I’m deepening my understanding of large-scale systems and exploring Applied AI.{" "}
            <br />
            <br />
            Beyond code:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> I enjoy painting 🎨
            </li>
            <li className="about-activity">
              <ImPointRight /> traveling to new places 🌍
            </li>
            <li className="about-activity">
              <ImPointRight /> and constantly learning new technologies that push me to grow ✍️
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I believe great software isn’t just written — it’s engineered with purpose."{" "}
          </p>
          <footer className="blockquote-footer">Asha</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
