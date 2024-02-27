import React from "react";
import { Row, Col } from "react-bootstrap";
import myPhoto2 from "../Assets/myPhoto2.png";
import resume from "../Assets/CV0224.pdf";

function About() {
  return (
    <>
      <section className="about">
        <Row className="row d-flex justify-content-center ">
          <Col className="C1 col-sm-12 col-md-12 col-lg-4 ">
            <h1>About me</h1>
            <p>
              Hello there! My name is Adriana Camarotto and I have developed a
              strong foundation in crafting innovative and efficient technology
              solutions.
            </p>
            <p>
              In 2023, I successfully completed the Front End Web Development
              Bootcamp at edX. Throughout the program I was challenged to think
              creatively and solve real-world problems. This experience has
              greatly strengthened my skills in JavaScript, React, Node.js and
              other relevant technologies.
            </p>
            
            <p>
              Please, feel free to dowload my resume to know more about my work
              experience.
            </p>
            <a
              className="btn btn-outline-warning"
              id="Resume"
              // role="button"
              href={resume}
              target="_blank"
              rel="noreferrer"
            >
              Dowload Resume
            </a>
          </Col>
          <Col className="C2 col-sm-12 col-md-12 col-lg-4">
            <Col>
              <img
                className="myPhoto2"
                src={myPhoto2}
                alt="Adriana Camarotto"
              />
            </Col>

            <section>
              <div class="variable">
                <span class="work">WORK</span>LIFE
              </div>
              <div class="static">BALANCE</div>
              <div>
                <p>
                  When I'm not coding, I like being creative with art, taking
                  relaxing walks, and watching movies.
                </p>
              </div>
            </section>
          </Col>
        </Row>
      </section>
    </>
  );
}

export default About;
