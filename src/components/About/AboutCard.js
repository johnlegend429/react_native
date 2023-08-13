import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">John O Simth </span>
            from <span className="purple"> Australia.</span>
            <br /> I am a Senior Web developer. I have rich experience in several programming languages.
            <br />
            Additionally, I have enjoyed in helping the others with my great contribution.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Doing exercise
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight />Playing the Piano
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Ping-Pong
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Nothing is impossible. Everybody has their own dream.
            If they are trying to achieve their goal, there will be no thing not to achieve.
            How beautiful the world is"{" "}
          </p>
          <footer className="blockquote-footer">John O Smith</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
