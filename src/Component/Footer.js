import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';



function Footer () {
    return (
      <footer className="footer"> 
        <Container>
            <Row>
              <Col className='C-1 col-sm-12 col-md-6 col-lg-6'>
                <p className='copyright-text'>&copy; Copyright 2023 | All Rights Reserved.</p>          
              </Col>
                <Col className='C-2 col-sm-12 col-md-6 col-lg-6'>
                  <ul className='social-medias-icons btn-outline-warning'>
                    <li>
                      <a  href="https://github.com/Adriana-Camarotto"
                          target="_blank"
                          rel="noreferrer">
                        <FontAwesomeIcon className='icon' icon={faGithub} /> 
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/adriana-camarotto/"
                         target="_blank"
                         rel="noreferrer">
                        <FontAwesomeIcon className='icon' icon={faLinkedinIn} /> 
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/adri.camarotto"
                         target="_blank"
                         rel="noreferrer">
                        
                        <FontAwesomeIcon className='icon' icon={faFacebook} /> 
                      </a>
                    </li>
                  </ul>                    
              </Col>
            </Row>
          </Container>
  
      </footer>
    );
}

export default Footer;