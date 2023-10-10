import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import myPhoto3 from "../Assets/myPhoto3.png";

function ContactUs() {
    const [name,setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [subject, setSubject] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
        const formData = new FormData();
        formData.append(`name`, name);
        formData.append(`email`, email);
        formData.append(`subject`, subject);
        formData.append(`message`, message);
        const response = await fetch("https://formsubmit.co/ajax/7018ba8bb5fb2e9328b31de4ff696fb6", {
            method: 'POST',
            body: formData,
        });
        const result = await response.json();
        if (result.success) {
            setSuccess(true);
        } else {
            setError(true);
        }
        } catch (error) {
        setError(true);
        } finally {
        setLoading(false);
        }
    };
        
    return ( 
            <Container>
            <section className='contactMe' style={{height:"50"}} >
                <Row className='justify-content-center'>
                    <Col className="Col-C1 col-sm-12 col-md-6 col-lg-6 mb-3 mb-md-0" >
                        <img 
                            className="myPhoto3 img-fluid"  
                            src={myPhoto3} 
                            alt="Adriana Camarotto" />
                    </Col>
                    
                <Container  className="form  col-sm-12 col-md-6 mb-3 mb-md-0">
                <Row className='form-row'>                
                    <Col className="Col-C2">
                        <h3 className="text-form text-center mb-1"><strong>Get in Touch</strong></h3> 
                        { success && (
                            console.log('all ok'),
                            <Alert variant="success" className='alert text-center'>
                                Thank you for your message!
                            </Alert>
                        )} 
                        { error && (
                            <Alert variant="danger" className="text-center">
                                Something went wrong! Please try again later!
                            </Alert>
                        )}
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required                             
                            />
                            </Form.Group>
                            
                            <Form.Group controlId="subject">
                            <Form.Label>Subject</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter the subject"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                required                             
                            />
                            </Form.Group>

                            <Form.Group controlId="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required                             
                            />
                            </Form.Group>

                            <Form.Group controlId="message">
                            <Form.Label>Message</Form.Label>
                            <textarea
                                className='textarea'
                                type="textarea"
                                rows="5"
                                placeholder="Enter message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required                             
                            />
                            
                            </Form.Group>
                            <Button className="btn" variant="dark" type="submit" disabled={loading}>
                                {loading ? 'Submiting...' : 'Send message'}
                            </Button>
                        </Form>                    
                    </Col>
                </Row>
            </Container>    
            </Row>
            <Row className='R2'>                   
                        <p>adriana.camarotto@gmail.com  |  +44 07738771515 </p>                         
            </Row>
        </section>          
    </Container>          
);
}
export default ContactUs;
