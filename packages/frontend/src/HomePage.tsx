// HomePage.tsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles
import { useNavigate } from 'react-router-dom';


export const HomePage: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className="container mt-5">
      <div className="jumbotron">
        <h1 className="display-4">Welcome to Our Website</h1>
        <p className="lead">Explore amazing content and features.</p>
        <button className="btn btn-primary" onClick={() => navigate("/login")}>
          Log In
        </button>
      </div>
    </div>
  );
};

