import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import {Col, Container, Row} from "react-bootstrap";

export function LoginPage() {
    function submit(email: string, password: string) {
        axios.post("http://localhost:3001/api/login", {email: email, password: password})
    }

    return (
        <Container fluid>
            <Row>
                <Col/>
                <Col>
                    <LoginForm onSubmit={submit}/>
                </Col>
                <Col/>
            </Row>
        </Container>
    )
}

type LoginFormProps = {
    onSubmit: (email: string, password: string) => void
}

const LoginForm = (props: LoginFormProps) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email"
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
            <Button variant="primary" type="submit" onClick={() => props.onSubmit(email, password)}>
                Log in
            </Button>
        </Form>
    )
}
