import React from 'react';
import axios from "axios";
import {Col, Container, Row} from "react-bootstrap";
import {LoginForm} from "./LoginForm";

export const LoginPage = () => {
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

