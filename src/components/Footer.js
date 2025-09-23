// src/components/Footer.js
import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="text-light py-5 mt-5"
      style={{
        background: "linear-gradient(135deg, #080c2a, #101642)",
        backdropFilter: "blur(6px)",
      }}
    >
      <div className="container text-center">
        {/* Company Name */}
        <h5 className="fw-bold mb-2">Yasin & Yasir Automotive</h5>

        {/* Tagline */}
        <p className="small mb-4 text-white-50">
          Specialists in Hybrid Diagnostics, ECU Programming, Electrical & Suspension Repairs
        </p>

        {/* Social Icons */}
        <div className="d-flex justify-content-center gap-3 mb-4">
          <a
            href="https://www.facebook.com/yasinmirza098"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/145/145802.png"
              alt="Facebook"
              style={{
                width: "28px",
                height: "28px",
                transition: "0.3s",
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          </a>
          <a
            href="https://www.instagram.com/yasin_and_yasir_automotive01?igsh=ZGhkejJ4ZGhveWVo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
              alt="Instagram"
              style={{
                width: "28px",
                height: "28px",
                transition: "0.3s",
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          </a>
        </div>

        {/* Copyright */}
        <p className="mb-0 small text-white-50">
          &copy; {currentYear} Yasin & Yasir Automotive. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
