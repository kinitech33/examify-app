import React from 'react';
import { useNavigate } from 'react-router-dom';
import heroImage from '../assets/hope.jpg';

function HeroSection() {
  const navigate = useNavigate();

  const handleJoinNow = () => {
    navigate('/create-account');
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center text-center text-white"
      style={{
        height: '80vh',
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="p-4 bg-dark bg-opacity-50 rounded">
        <h1 className="display-4 fw-bold">Welcome to Examify</h1>
        <p className="lead">Practice O-Level, A-Level & University mock exams anytime, anywhere.</p>
        <button className="btn btn-primary btn-lg mt-3" onClick={handleJoinNow}>
          Join Now
        </button>
      </div>
    </div>
  );
}

export default HeroSection;