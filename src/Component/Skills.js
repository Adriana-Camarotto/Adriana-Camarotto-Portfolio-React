import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faBootstrap, faGit, faGithub, faReact, faNode, faNpm} from '@fortawesome/free-brands-svg-icons';


export default function Skills () {
    return (
      <Container>        
      <section className="Skills" style={{height: '600px'}}> 
      <div className="container-fluid">
        <div className="row">
            <div className="col-12 jumbotron mb-1 Skills-heading">
                <h1 className="text-center">My SKILLS</h1>
            </div>
        </div>
      </div>  

      
      <div className="row" style={{ marginLeft: '15%', marginBottom: '10px'}}>
      <Card  className='skills-card p-1 m-5' style={{ width: '150px', margin: '2px'}}>
          <FontAwesomeIcon icon={faHtml5} size="3x" style={{ marginTop: '20px' }} />
            <Card.Body>
              <Card.Title className="tool-name">HTML 5</Card.Title>
            </Card.Body>
          </Card>


        <Card  className='skills-card p-1 m-5' style={{ width: '150px', margin: '5px'}}>
          <FontAwesomeIcon icon={faCss3Alt} size="3x" style={{ marginTop: '20px' }} />
            <Card.Body>
              <Card.Title className="tool-name">CSS 3</Card.Title>
            </Card.Body>
          </Card>

          <Card  className='skills-card p-1 m-5' style={{ width: '150px', margin: '5px' }}>
          <FontAwesomeIcon icon={faBootstrap} size="3x" style={{ marginTop: '20px' }} />
            <Card.Body>
              <Card.Title className="tool-name">Bootstrap</Card.Title>
            </Card.Body>
          </Card>
          
          <Card  className='skills-card p-1 m-5' style={{ width: '150px', margin: '5px' }}>
          <FontAwesomeIcon icon={faGit} size="3x" style={{ marginTop: '20px' }} />           
            <Card.Body>
              <Card.Title className="tool-name">Git</Card.Title>
            </Card.Body>
          </Card>

          <Card  className='skills-card p-1 m-5' style={{ width: '150px', margin: '5px' }}>
          <FontAwesomeIcon icon={faGithub} size="3x" style={{ marginTop: '20px' }} />           
            <Card.Body>
              <Card.Title className="tool-name">Github</Card.Title>
            </Card.Body>
          </Card>
  


          <Card  className='skills-card p-1 m-5' style={{ width: '150px', margin: '5px' }}>
          <FontAwesomeIcon icon={faNpm} size="3x" style={{ marginTop: '20px' }} />           
            <Card.Body>
              <Card.Title className="tool-name">npm</Card.Title>
            </Card.Body>
          </Card>
          
          <Card  className='skills-card p-1 m-5' style={{ width: '150px', margin: '5px'}}>
          <FontAwesomeIcon icon={faNode} size="3x" style={{ marginTop: '20px' }} />
            <Card.Body>
              <Card.Title className="tool-name">Node.js</Card.Title>
            </Card.Body>
          </Card>

          <Card  className='skills-card p-1 m-5' style={{ width: '150px', margin: '5px' }}>
          <FontAwesomeIcon icon={faReact} size="3x" style={{ marginTop: '20px' }} />           
            <Card.Body>
              <Card.Title className="tool-name">React</Card.Title>
            </Card.Body>
          </Card>
                    
        </div>

        <div>
        <section className='otherskill m-2' style={{marginBottom: '120px'}} >
        <h2 >Others Skills</h2>
          <p> REST APIs, Next.js, Tailwind, Figma, Canvas, UI, UX, Design thinking.</p>
          </section>
        </div>  
      </section>
    </Container>
  );
}
