// src/pages/BookingSuccessPage.js
import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Helmet } from 'react-helmet';

const BookingSuccessPage = () => {
  useEffect(() => {
    // 🎉 Confetti burst
    confetti({
      particleCount: 200,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#16a34a', '#22c55e', '#4ade80'],
    });
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light px-3">
      <Helmet>
        <title>Booking Confirmed | Yasin & Yasir Automotive</title>
        <meta
          name="description"
          content="Your hybrid car booking has been received. Thank you for choosing Yasin & Yasir Automotive!"
        />
        <meta name="robots" content="noindex" />
      </Helmet>

      <div
        className="card shadow-lg border-0 p-5 text-center w-100"
        style={{ maxWidth: '520px', borderRadius: '1rem' }}
      >
        {/* Success Icon */}
        <div className="mb-4">
          <div
            className="rounded-circle bg-success bg-opacity-25 d-flex justify-content-center align-items-center mx-auto"
            style={{
              width: '90px',
              height: '90px',
              animation: 'pop 0.6s ease',
            }}
          >
            <svg
              viewBox="0 0 52 52"
              width="42"
              height="42"
              aria-hidden="true"
              focusable="false"
            >
              <path
                fill="none"
                stroke="#16a34a"
                strokeWidth="5"
                d="M14 27l7 7 17-17"
              />
            </svg>
          </div>
        </div>

        {/* Text */}
        <h2 className="text-success fw-bold mb-3">Booking Confirmed 🎉</h2>
        <p className="text-muted mb-2">
          Thank you for trusting <strong>Yasin & Yasir Automotive</strong>.
        </p>
        <p className="text-muted">
          We’ll contact you shortly to confirm your appointment details.  
          A confirmation has also been sent to your email/phone.
        </p>

        {/* Back to Home Button */}
        <a
          href="/"
          className="btn btn-success fw-semibold px-4 py-2 mt-4"
          style={{ borderRadius: '50px', transition: '0.3s ease' }}
        >
          ⬅ Back to Home
        </a>
      </div>

      {/* CSS for pop animation */}
      <style>
        {`
          @keyframes pop {
            0% { transform: scale(0.6); opacity: 0.3; }
            100% { transform: scale(1); opacity: 1; }
          }
          .btn-success:hover {
            background-color: #15803d !important;
            transform: translateY(-2px);
          }
        `}
      </style>
    </div>
  );
};

export default BookingSuccessPage;
