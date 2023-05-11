import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import myPhoto from "../Assets/AdriProfileImg.png";


function Home() {
  return (    
    <Container >
      <section className="home">
        <div className="container-fluid">
          <div className="row">
          <Col className="col-h1">          
            <p>Hi there! I am</p>
            <h1>ADRI CAMAROTTO</h1>
            <h2>Front End Web Developer</h2>
            
            <hr className="my-4"></hr>
            
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

        <Col className="col-h2">
          <img className="myPhoto" src={myPhoto} alt="Adriana Camarotto" />
        </Col>
          </div>
        </div>
      </section>
    </Container>    
  );
}

export default Home;
