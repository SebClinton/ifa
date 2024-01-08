import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import {Col, Container, Row} from "react-bootstrap";

export function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function submit() {
        axios.post("http://localhost:3001/api/login", {email: email, password: password})
    }

    return (
        <Container fluid>
            <Row>
                <Col/>
                <Col>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email"
                                          value={email}
                                          onChange={(e) => setEmail(e.target.value)}/>
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password"
                                          onChange={(e) => setPassword(e.target.value)}/>
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={submit}>
                            Log in
                        </Button>
                    </Form>
                </Col>
                <Col/>
            </Row>
        </Container>
    )
}
