import React from 'react';
import './App.css';
import {LoginPage} from "./LoginPage";
import {Col, Container, Row} from "react-bootstrap";

function App() {
    return (
        <Container fluid>
            <Row>
                <Col/>
                <Col><LoginPage/></Col>
                <Col/>
            </Row>
        </Container>
    );
}

export default App;
