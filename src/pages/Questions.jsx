import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams, useNavigate } from "react-router-dom";
import questionsData from "../data/questions";

/*
Questions Page
- Paper 1: MCQs
- Paper 2: Text area with examiner tips
- Timer countdown
- Score calculation
- See Answer button for Paper 2
- Next Paper button → redirects to Subscribe page if next paper is locked

*/

function Questions() {
  const navigate = useNavigate();
  const { subject, paper } = useParams();

  // Load questions for selected subject/paper
  const questions = questionsData[subject]?.[paper];

  // Invalid subject/paper fallback
  if (!questions) {
    return (
      <div className="container my-5 text-center">
        <h3>Invalid subject or paper selected.</h3>
        <button
          className="btn btn-primary mt-3"
          onClick={() => navigate("/select-subject")}
        >
          Go Back
        </button>
      </div>
    );
  }

  // States
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(120); // 2 min example
  const [examFinished, setExamFinished] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false); // For Paper 2

  // Track failed questions
  const [failedQuestions, setFailedQuestions] = useState([]);

  // Timer logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setExamFinished(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Handle MCQ answer selection
  const handleMCQAnswer = (option) => setSelectedAnswer(option);

  // Move to next question
  const nextQuestion = () => {
    const q = questions[currentQuestion];

    // Check answer for scoring
    let correct = false;
    if (paper === "paper1") {
      if (selectedAnswer === q.answer) {
        setScore(score + 1);
        correct = true;
      }
    } else if (paper === "paper2") {
      if (selectedAnswer.trim().toLowerCase() === q.answer.toLowerCase()) {
        setScore(score + 1);
        correct = true;
      }
    }

    // Track failed questions
    if (!correct) {
      setFailedQuestions([...failedQuestions, currentQuestion + 1]);
    }

    setSelectedAnswer("");
    setShowAnswer(false);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setExamFinished(true);
    }
  };

  // Go to next paper
  const goToNextPaper = () => {
    if (paper === "paper1") {
      navigate(`/questions/${subject}/paper2`);
    } else {
      navigate("/subscribe"); // Redirect to Subscribe Page
    }
  };

  // Current question data
  const q = questions[currentQuestion];

  return (
    <div>
      <Header isLoggedIn={true} />

      <div className="container my-5">
        <h4 className="mb-3 text-center">
          {subject} - {paper.toUpperCase()}
        </h4>

        {/* Timer */}
        <h5 className="text-end text-danger mb-4">Time Left: {timeLeft}s</h5>

        {examFinished ? (
          <div className="text-center mt-5">
            <h2>🎉 Exam Finished!</h2>
            <p>
              Your Score: {score} / {questions.length}
            </p>

            {failedQuestions.length > 0 && (
              <p className="text-danger">
                You need to review questions: {failedQuestions.join(", ")}
              </p>
            )}

            <button
              className="btn btn-primary me-3"
              onClick={() => navigate("/home")}
            >
              Back to Home
            </button>

            <button className="btn btn-success" onClick={goToNextPaper}>
              Next Paper
            </button>
          </div>
        ) : (
          <>
            <h3 className="mb-3">Question {currentQuestion + 1}</h3>
            <p className="mb-4">{q.question}</p>

            {paper === "paper1" ? (
              // MCQ Options
              q.options.map((option, idx) => (
                <div key={idx} className="mb-3">
                  <button
                    className={`btn w-100 ${
                      selectedAnswer === option
                        ? "btn-primary"
                        : "btn-outline-primary"
                    }`}
                    onClick={() => handleMCQAnswer(option)}
                  >
                    {option}
                  </button>
                </div>
              ))
            ) : (
              // Paper 2 text area
              <div className="mb-3">
                <textarea
                  className="form-control"
                  rows={5}
                  placeholder="Type your answer here..."
                  value={selectedAnswer}
                  onChange={(e) => setSelectedAnswer(e.target.value)}
                />

                {/* Show Answer Button */}
                <button
                  className="btn btn-info mt-2 me-2"
                  onClick={() => setShowAnswer(!showAnswer)}
                >
                  {showAnswer ? "Hide Answer" : "See Answer"}
                </button>

                {showAnswer && (
                  <div className="alert alert-secondary mt-2">
                    Correct Answer: {q.answer}
                  </div>
                )}

                {q.examinerTip && (
                  <small className="text-muted d-block mt-2">
                    Examiner Tip: {q.examinerTip}
                  </small>
                )}
              </div>
            )}

            {/* Next Question Button */}
            <button className="btn btn-success mt-4" onClick={nextQuestion}>
              Next Question
            </button>

            {/* Next Paper Button */}
            {currentQuestion === questions.length - 1 && (
              <button
                className="btn btn-warning mt-3 ms-3"
                onClick={goToNextPaper}
              >
                Next Paper
              </button>
            )}
          </>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default Questions;