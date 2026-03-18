import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

function ChooseSchool() {

  const navigate = useNavigate();

  const selectSchool = (school) => {

    console.log("School selected:", school);

    navigate("/select-subject");

  };

  return (

    <div>

      <Header isLoggedIn={true} />

      <div className="container text-center my-5">

        <h2 className="mb-4">Choose Your School</h2>

        <div className="row justify-content-center g-4">

          {/* Caltech */}
          <div className="col-md-3">
            <button
              className="btn btn-primary w-100 py-3"
              onClick={() => selectSchool("Caltech")}
            >
              Caltech
            </button>
          </div>

          {/* NAPI */}
          <div className="col-md-3">
            <button
              className="btn btn-primary w-100 py-3"
              onClick={() => selectSchool("NAPI")}
            >
              NAPI
            </button>
          </div>

        </div>

      </div>

      <Footer />

    </div>

  );
}

export default ChooseSchool;