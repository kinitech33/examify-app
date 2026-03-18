import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

/*
SelectSubject Page

Features:
- Displays a list of subjects
- When a subject is clicked, navigate to the SelectPaper page
- Sends the selected subject using state
*/

function SelectSubject() {

  // Initialize navigate (fixes the "navigate is not defined" error)
  const navigate = useNavigate();

  // Function to handle subject selection
  const chooseSubject = (subject) => {
    console.log("Subject selected:", subject);

    // Navigate to the SelectPaper page and pass the selected subject
    navigate("/select-paper", {
      state: { subject: subject }
    });
  };

  return (
    <div>
      <Header isLoggedIn={true} />

      <div className="container my-5">
        <h2 className="mb-4 text-center">Select a Subject</h2>

        <div className="row">

          {/* Subject Cards */}

          <div className="col-md-4 mb-3">
            <button
              className="btn btn-outline-primary w-100 p-4"
              onClick={() => chooseSubject("Mathematics")}
            >
              Mathematics
            </button>
          </div>

          <div className="col-md-4 mb-3">
            <button
              className="btn btn-outline-success w-100 p-4"
              onClick={() => chooseSubject("Physics")}
            >
              Physics
            </button>
          </div>

          <div className="col-md-4 mb-3">
            <button
              className="btn btn-outline-warning w-100 p-4"
              onClick={() => chooseSubject("Chemistry")}
            >
              Chemistry
            </button>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}

export default SelectSubject;