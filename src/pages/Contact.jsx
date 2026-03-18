import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";


/*
Contact Page
- Shows how users can reach you
*/

function Contact() {

  const whatsappNumber = "237YOURNUMBER"; // replace this

  return (
    <div>
      <Header isLoggedIn={true} />

      <div className="container my-5">

        {/* TITLE */}
        <h1 className="text-center mb-4">Contact Us</h1>

        <p className="text-center mb-5">
          Have questions, feedback, or want to subscribe?
          Reach out to us anytime!
        </p>

        {/* CONTACT INFO */}
        <div className="text-center">

          <p><strong>Email:</strong> examify@email.com</p>
          <p><strong>Phone:</strong> +237 XXX XXX XXX</p>

          {/* WHATSAPP BUTTON */}
          <button
            className="btn btn-success mt-3"
            onClick={() =>
              window.open(`https://wa.me/${whatsappNumber}`, "_blank")
            }
          >
            Chat on WhatsApp
          </button>

        </div>

        {/* SIMPLE CONTACT FORM (optional but looks pro) */}
        <div className="mt-5">

          <h4 className="text-center mb-3">Send us a message</h4>

          <form className="mx-auto" style={{ maxWidth: "500px" }}>

            <input
              type="text"
              className="form-control mb-3"
              placeholder="Your Name"
            />

            <input
              type="email"
              className="form-control mb-3"
              placeholder="Your Email"
            />

            <textarea
              className="form-control mb-3"
            //   rows="4"
              placeholder="Your Message"
            ></textarea>

            <button className="btn btn-primary w-100">
              Send Message
            </button>

          </form>

        </div>

      </div>

      <Footer />
    </div>
  );
}

export default Contact;