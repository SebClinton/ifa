// HomePage.tsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles
import { useNavigate } from 'react-router-dom';
import { Button, Col, Container, Row } from 'react-bootstrap';


export const HomePage: React.FC = () => {
  const navigate = useNavigate()

  return (
    <Container className="mt-5">
        <h1 className="display-4">Welcome to Our Website</h1>
        <p className="lead">Explore amazing content and features.</p>
        <Row>
            <Col>
        <Button variant='primary' onClick={() => navigate("/login")}>
          Log In
        </Button>
        </Col>
        <Col>
        <Button variant='primary' onClick={() => navigate("/profile")}>
          Profile 
        </Button>
        </Col>
        </Row>
    </Container>
  );
};

