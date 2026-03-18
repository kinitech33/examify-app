import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

/*
SelectPaper Page
- Shows Paper 1 and Paper 2 buttons
- Passes subject and paper via URL params to Questions.jsx
*/

function SelectPaper() {
  const location = useLocation();
  const navigate = useNavigate();

  const subject = location.state?.subject;

  // Fallback if subject is missing
  if (!subject) {
    navigate("/select-subject");
    return null;
  }

  // Handle paper selection
  const choosePaper = (paper) => {
    // paper should be exactly "paper1" or "paper2"
    navigate(`/questions/${subject}/${paper}`);
  };

  return (
    <div>
      <Header isLoggedIn={true} />

      <div className="container my-5 text-center">
        <h2>Select Paper for {subject}</h2>

        <div className="row mt-4">
          <div className="col-md-6 mb-3">
            <button
              className="btn btn-primary w-100 p-3"
              onClick={() => choosePaper("paper1")}
            >
              Paper 1
            </button>
          </div>
          <div className="col-md-6 mb-3">
            <button
              className="btn btn-success w-100 p-3"
              onClick={() => choosePaper("paper2")}
            >
              Paper 2
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default SelectPaper;