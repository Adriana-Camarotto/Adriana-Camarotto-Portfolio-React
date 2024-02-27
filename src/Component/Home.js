import React from "react";
import {  Col, Row } from "react-bootstrap";
import myPhoto from "../Assets/AdriProfileImg.png";


function Home() {
  return (
        <section className="home container-fluid">
          <Row className="row ">
            <Col className="col-h1">          
              <p>Hi there! I am</p>
              <h1>ADRI CAMAROTTO</h1>
              <h2>Front End Web Developer</h2>
              
              <hr className="my-5"></hr>
              
              <p>Check out my relevants projects</p>
              <a
                className="btn btn-outline-warning"
                id="githuButton"
                href="https://github.com/Adriana-Camarotto"
                role="button"
                target="_blank"
                rel="noreferrer"
              >
                My Github
              </a>         
            </Col>

            <Col className="col-h2 ">
              <img className="myPhoto" src={myPhoto} alt="Adriana Camarotto" />
            </Col>
          </Row>        
      </section>
  
  );
}

export default Home;
