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
            <p>Hello there! My name is Adriana Camarotto and I am a big fan of technology. My journey began when I was studying programming logic during my Civil Engineering degree. Although things didn't go as planned, I later on ended up completing a Business degree and had the opportunity to work for a start-up.</p>
            <p>One of the things I'm most proud of is mentoring several teams in the Technovation Challenge. A global coding competition for girls. It is incredibly rewarding to see the growth and achievements of the teams I mentored, especially the one that became the South American Champion in the Junior Division back in 2018 and semi finalist in the Senior Division in 2019!</p>
            <p>After exploring different fields , such as, customer service, digital marketing, and mentoring women in business, I realized how much I missed the world of technology. That's why I have embarked on a new adventure to become a front-end developer, and I must say, I absolutely love it!</p>
            <p>In 2023, I successfully completed the Front End Web Development Bootcamp at edX. Throughout the program I was challenged to think creatively and solve real-world problems. This experience has greatly strengthened my skills in HTML, CSS, JavaScript, React, and other relevant technologies.</p>
            <p>I am incredibly eager to pursue a career in the IT field. Applying the knowledge I have gained and continuing to grow as a front-end developer in a professional setting is something I am very interested in. As I am now a freelance and part of a brilliant team of Web Developers I can't wait to see what the next chapter of my career holds as a front-end web developer!</p>
            <p>Please, feel free to dowload my resume to know more about my work experience.</p>
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