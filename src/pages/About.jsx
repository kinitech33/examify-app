import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

/*
About Page
- Explains what Examify is
- Builds trust with users
*/

function About() {
  return (
    <div>
      <Header isLoggedIn={true} />

      <div className="container my-5">

        {/* PAGE TITLE */}
        <h1 className="text-center mb-4 text-dark">About Examify</h1>

        {/* INTRO */}
        <p className="lead text-center">
          Examify is a modern platform designed to help students
          practice past exam questions, improve their knowledge,
          and succeed academically.
        </p>

        {/* MISSION */}
        <div className="mt-5">
          <h3>🎯 Our Mission</h3>
          <p>
            Our mission is to provide students with easy access to
            high-quality exam practice materials. We aim to make learning
            simple, interactive, and effective for students at all levels.
          </p>
        </div>

        {/* WHAT WE OFFER */}
        <div className="mt-4">
          <h3>📚 What We Offer</h3>
          <ul>
            <li>Past exam questions for multiple subjects</li>
            <li>Interactive quizzes with instant feedback</li>
            <li>Step-by-step learning through Paper 1 and Paper 2</li>
            <li>Exam tips to help you succeed</li>
          </ul>
        </div>

        {/* WHY CHOOSE US */}
        <div className="mt-4">
          <h3>🚀 Why Choose Examify?</h3>
          <p>
            Examify is built with students in mind. Our platform is simple,
            fast, and designed to help you focus on what matters most —
            passing your exams with confidence.
          </p>
        </div>

      </div>

      <Footer />
    </div>
  );
}

export default About;