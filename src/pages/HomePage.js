// src/pages/HomePage.js
import React from "react";
import banner1 from "../Assets/images/banner1.jpg";
import { Helmet } from "react-helmet";

function HomePage() {
  return (
    <div>
      {/* SEO Tags */}
      <Helmet>
        <title>Yasin & Yasir Automotive | Hybrid Car Experts</title>
        <meta
          name="description"
          content="Welcome to Yasin & Yasir Automotive - Your trusted hybrid car workshop in Pakistan. Specializing in hybrid battery replacement, diagnostics, and more."
        />
        <meta
          name="keywords"
          content="Hybrid car service, Battery replacement, Yasin Yasir Automotive, Car diagnostics, Hybrid car repair"
        />
      </Helmet>

      {/* Banner Section */}
      <section className="position-relative text-white text-center mb-5">
        <img
          src={banner1}
          alt="Workshop Banner"
          className="img-fluid w-100"
          style={{
            maxHeight: "550px",
            objectFit: "cover",
            filter: "brightness(60%)",
          }}
        />
        <div className="position-absolute top-50 start-50 translate-middle hero-text">
          <h1 className="display-4 fw-bold">
            Expert <span className="text-warning">Hybrid Car Services</span>
          </h1>
          <p className="lead mb-4">
            Diagnostics • ECU Programming • Battery Replacement • Suspension
          </p>
          <a
            href="/book"
            className="btn btn-warning btn-lg fw-semibold shadow"
          >
            Book a Service
          </a>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="bg-dark text-light text-center py-5">
        <div className="container">
          <h2 className="fw-bold mb-3">Welcome to Yasin & Yasir Automotive</h2>
          <p className="lead text-white-50 mb-4">
            Pakistan's trusted experts in hybrid diagnostics, ADAS calibration,
            ECU programming, sensor faults, and battery replacement.
          </p>
          <a href="/book" className="btn btn-outline-light btn-lg px-4">
            Get Started
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-5">Our Specialized Services</h2>
          <div className="row g-4">
            {[
              {
                icon: "🔧",
                title: "Hybrid Diagnostics",
                text: "Advanced fault detection & error clearing",
              },
              {
                icon: "🧠",
                title: "ECU / ADAS Programming",
                text: "Radar & sensor alignment, ECU setups",
              },
              {
                icon: "🔋",
                title: "Hybrid Battery Replacement",
                text: "High-quality battery swaps & repairs",
              },
              {
                icon: "⚙️",
                title: "Suspension & Electrical",
                text: "Complete mechanical & electrical work",
              },
            ].map((s, i) => (
              <div className="col-md-3" key={i}>
                <div className="card h-100 shadow-sm border-0 service-card">
                  <div className="card-body">
                    <h2>{s.icon}</h2>
                    <h5 className="fw-semibold mb-2">{s.title}</h5>
                    <p className="text-muted small mb-0">{s.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section className="py-5 bg-warning-subtle">
        <div className="container text-center">
          <h2 className="fw-bold mb-5">🎉 Special Offers & Discounts</h2>
          <div className="row g-4 justify-content-center">
            {[
              {
                title: "🛠 Free Hybrid Scan",
                text: "For every customer coming for the first time!",
              },
              {
                title: "🔋 Battery Installation Discount",
                text: "Up to 15% off on hybrid battery replacement",
              },
              {
                title: "💥 September Deal",
                text: "Full Car Diagnostic Inspection Free",
              },
            ].map((o, i) => (
              <div className="col-md-4" key={i}>
                <div className="card h-100 border-warning shadow-sm offer-card">
                  <div className="card-body">
                    <h5 className="fw-semibold mb-2">{o.title}</h5>
                    <p className="text-muted small mb-0">{o.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <a
            href="/book"
            className="btn btn-dark mt-5 px-4 py-2 fw-semibold shadow"
          >
            Avail Offers Now
          </a>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/923365143531"
        className="btn btn-success position-fixed shadow-lg"
        style={{
          bottom: "20px",
          right: "20px",
          zIndex: "1000",
          borderRadius: "50%",
          padding: "14px 18px",
          fontSize: "22px",
        }}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        💬
      </a>
    </div>
  );
}

export default HomePage;
