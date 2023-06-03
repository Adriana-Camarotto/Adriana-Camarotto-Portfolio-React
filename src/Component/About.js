import React from 'react';
import { Row, Col } from 'react-bootstrap';
import myPhoto2 from "../Assets/myPhoto2.png";
import resume from "../Assets/CV-AdriCamarotto0523.pdf";

  function About() {
    return (
      <section className="about container-fluid">
        <Row className='about-row'>
          <Col className="C1">
            <img 
                className="myPhoto2"
                src={myPhoto2} 
                alt="Adriana Camarotto" />
          </Col>     
       
          <Col className="C2">
            <h1>About me</h1>
            <p>Hello there! I'm a big fan of technology, and my journey began when I was studying logic programming during my civil engineering degree. Although things didn't go as planned, I ended up completing a business degree and later had the opportunity to work for a start-up.</p>
            <p>One of the things I'm most proud of is mentoring several teams in the Technovation Challenge, a global coding competition for girls. It's incredibly rewarding to see the growth and achievements of the teams I mentored, especially the one that became the South American Champion in the Junior Division back in 2018!</p>
            <p>After exploring different fields like customer service, digital marketing, and mentoring women in business, I realized how much I missed the world of technology. That's why I've embarked on a new adventure to become a front-end developer, and I must say, I absolutely love it!</p>
            <p>In 2023, I successfully completed the Front End Web Development Bootcamp at edX. Throughout the program, I was challenged to think creatively and solve real-world problems through various projects. This experience has greatly strengthened my skills in HTML, CSS, JavaScript, React, and other relevant technologies.</p>
            <p>I'm incredibly eager to pursue a career in this field, applying the knowledge I've gained in a professional setting and continuing to grow as a front-end developer. I can't wait to see what the next chapter of my career holds as a front-end developer!</p>
            <a
              className="btn btn-outline-warning"
              id="Resume"
              // role="button"
              href={resume}             
              target="_blank"
              rel="noreferrer"
            >Dowload Resume</a>          
          </Col>         
        </Row>
      </section>        
    );
  }

export default About;