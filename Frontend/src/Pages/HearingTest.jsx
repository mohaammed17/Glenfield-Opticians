import React from "react";
import { Link } from "react-router-dom";
import "animate.css";

const HearingTest = () => {
  return (
    <div className="container py-5 animate__animated animate__fadeIn">
        
      <h2 className="text-center text-primary fw-bold mb-4">Hearing Test</h2>
      <div className="card shadow border-0 rounded-4 p-4">
        <h5 className="mt-4 text-info">
          <strong>Check your hearing today</strong>
        </h5>
        <p className="text-muted">
          People who suffer from hearing loss often feel isolated from the world
          around them. This can affect every aspect of their lives. We at
          Glenfield Opticians can provide hearing test screening and in the
          event where further investigations are required, we can arrange a
          consultation with an audiologist who can advise and arrange the right
          type of hearing aid to suit yourself.
        </p>

        <div className="text-center mt-4">
          <a href="/book-appointment" className="btn btn-primary px-4">
                    Book Appointment
                  </a>
        </div>
      </div>
    </div>
  );
};

export default HearingTest;
