import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

function CardsPage() {

  const navigate = useNavigate();

  // Handle card selection
  const handleLevel = (level) => {

    if (level === "University") {

      // University must choose school first
      navigate("/choose-school");

    } else {

      // Ordinary or Advanced
      navigate("/select-subject");

    }

  };

  return (

    <div>

      <Header isLoggedIn={true} />

      <div className="container my-5">

        <h2 className="text-center mb-4 text-dark">Select Your Level</h2>

        <div className="row g-4">

          {/* Ordinary Level */}
          <div className="col-md-4">
            <div className="card shadow text-center p-4 card-hover">
              <h4>Ordinary Level</h4>
              <p>Practice O-Level exam questions</p>

              <button
                className="btn btn-primary"
                onClick={() => handleLevel("Ordinary")}
              >
                Get Started
              </button>

            </div>
          </div>

          {/* Advanced Level */}
          <div className="col-md-4">
            <div className="card shadow text-center p-4 card-hover">
              <h4>Advanced Level</h4>
              <p>Practice A-Level exam questions</p>

              <button
                className="btn btn-primary"
                onClick={() => handleLevel("Advanced")}
              >
                Get Started
              </button>

            </div>
          </div>

          {/* University */}
          <div className="col-md-4">
            <div className="card shadow text-center p-4 card-hover">
              <h4>University</h4>
              <p>Practice university entrance exams</p>

              <button
                className="btn btn-primary"
                onClick={() => handleLevel("University")}
              >
                Get Started
              </button>

            </div>
          </div>

        </div>

      </div>

      <Footer />

    </div>

  );
}

export default CardsPage;