import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import "../styles/cards.css";
import About1 from "./About1";
import Contact1 from "./Contact1";

/*
HomePage
Hero section + three level cards
*/

function HomePage() {

  const navigate = useNavigate();

  // Card navigation logic
  const handleLevel = (level) => {

    if (level === "University") {

      // University must choose school first
      navigate("/choose-school");

    } else {

      // Ordinary & Advanced go directly to subject page
      navigate("/select-subject");

    }

  };

  return (

    <div>

      {/* HEADER (logo appears here) */}
      <Header isLoggedIn={true} />


      {/* HERO SECTION WITH BACKGROUND IMAGE */}

      <div

        className="text-center text-white d-flex align-items-center justify-content-center"

        style={{

          height: "80vh",

          /* BACKGROUND IMAGE */
          backgroundImage: "url('/hope.jpg')",

          backgroundSize: "",

          backgroundPosition: "center"

        }}

      >

        {/* DARK OVERLAY for readability */}

        <div style={{
          backgroundColor: "rgba(0,0,0,0.6)",
          padding: "40px",
          borderRadius: "10px"
        }}>

          <h1 className="display-4">Welcome to Examify</h1>

          <p>
            Practice past exam questions and improve your results
          </p>


          {/* HERO BUTTON → CARDS PAGE */}
          <button
            className="btn btn-light btn-lg"
            onClick={() => navigate("/cards")}
          >
            Get Started
          </button>

        </div>

      </div>


      {/* CARDS SECTION */}

      <div className="container my-5">

        <h2 className="text-center mb-4 text-dark">
          Choose Your Level
        </h2>

        <div className="row g-4">


          {/* Ordinary Level */}

          <div className="col-md-4">

            <div className="card card-hover text-center shadow p-4">

              <h4>Ordinary Level</h4>

              <p>
                Practice O-Level examination questions
              </p>

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

            <div className="card card-hover text-center shadow p-4">

              <h4>Advanced Level</h4>

              <p>
                Practice A-Level examination questions
              </p>

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

            <div className="card card-hover text-center shadow p-4">

              <h4>University</h4>

              <p>
                Practice university entrance exam questions
              </p>

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

      
      <About1 />
      <Contact1 />
      <Footer />

    </div>

  );

}

export default HomePage;