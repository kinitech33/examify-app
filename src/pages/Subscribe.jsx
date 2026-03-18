import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

/*
Subscribe Page
- Two subscription plans: Monthly & Yearly
- Click on plan → redirect to WhatsApp
- Professional card layout with Bootstrap
*/

function Subscribe() {
  // Replace with your WhatsApp number (with country code, no + sign)
  const whatsappNumber = "237653601258";

  // Function to handle subscription button click
  const handleSubscribe = (plan) => {
    // Optional: You can send plan info to WhatsApp link
    const message = encodeURIComponent(
      `Hi! I want to subscribe to the ${plan} plan on Examify.`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <div>
      {/* Header with logo */}
      <Header isLoggedIn={true} />

      {/* Main container */}
      <div className="container my-5 text-center">
        <h2 className="mb-4">🔒 Subscribe to Unlock More Papers</h2>
        <p>Choose a subscription plan that suits you:</p>

        {/* Subscription cards */}
        <div className="row justify-content-center mt-4 g-4">
          {/* Monthly Plan */}
          <div className="col-md-4">
            <div className="card shadow p-4 h-100">
              <h3 className="card-title">Monthly Plan</h3>
              <p className="card-text">
                Get full access for 1 month for <strong>200 FCFA</strong>.
              </p>
              <button
                className="btn btn-primary btn-lg mt-3"
                onClick={() => handleSubscribe("Monthly")}
              >
                Subscribe Now
              </button>
            </div>
          </div>

          {/* Yearly Plan */}
          <div className="col-md-4">
            <div className="card shadow p-4 h-100 border-primary">
              <h3 className="card-title">Yearly Plan</h3>
              <p className="card-text">
                Get full access for 1 year for <strong>1,000 FCFA</strong>.
              </p>
              <button
                className="btn btn-success btn-lg mt-3"
                onClick={() => handleSubscribe("Yearly")}
              >
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Subscribe;