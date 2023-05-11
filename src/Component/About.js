import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import myPhoto2 from "../Assets/myPhoto2.png";
import resume from "../Assets/CV-AdriCamarotto0523.pdf"

export default function About() {
    return (
      <section className="about">
      <Container id="about" className="about">
        <Row className='about-row'>
          <Col className="C1">
            <img 
                className="myPhoto2"
                src={myPhoto2} 
                alt="Adriana Camarotto" />
          </Col>     
       
          <Col className="C2">
            <h1>About me</h1>
            <p>Hey there! I'm a huge tech fan and my journey started when I was studying logic programming during my civil engineering degree. Although things didn't work out as planned, I completed a business degree and later worked for a start-up.</p> 
            <p>I mentored several teams in the Technovation Challenge, a global coding competition for girls. I'm super proud of all the teams I mentored, especially the one that became the South American Champion in the Junior Division in 2018!</p>
            <p>After exploring different fields, including custumer service, digital marketing and mentoring women in business, I realized I missed the world of technology. So, I'm now on a new adventure to become a front-end developer and I absolutely love it!</p>
            <p>In 2023 I have successfully completed the Front End Web Development Bootcamp at edX. Throughout the program, I was challenged to think creatively and solve real-world problems through projects. The experience has strengthened 
               my skills in HTML, CSS, JavaScript, React and other relevant technologies. </p>
            <p>I am eager to pursue a career in this field to apply this knowledge in a professional setting and continue to grow as a front-end developer. I can't wait for the next chapter in my career as a front-end developer!</p>
            
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
      </Container>
    </section>      
    );
  }

