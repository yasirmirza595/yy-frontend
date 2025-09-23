// src/pages/AboutUsPage.js
import React from "react";
import { Helmet } from "react-helmet";
import Testimonials from "../components/Testimonials";

function AboutUsPage() {
  return (
    <div className="container py-5">
      {/* ✅ SEO Meta Tags */}
      <Helmet>
        <title>About Us | Yasin & Yasir Automotive</title>
        <meta
          name="description"
          content="Yasin & Yasir Automotive is Karachi’s trusted hybrid car workshop. Experts in ECU programming, ADAS calibration, diagnostics, and hybrid battery replacement."
        />
      </Helmet>

      {/* ✅ Page Heading */}
      <h2 className="section-heading text-center mb-5">
        About Yasin & Yasir Automotive
      </h2>

      <div className="row align-items-center g-4">
        {/* Left Side Content */}
        <div className="col-lg-7">
          <div className="bg-white p-4 rounded shadow-sm border">
            <p className="text-muted mb-3">
              <strong>Yasin & Yasir Automotive</strong> is a highly specialized
              hybrid car workshop based in{" "}
              <strong>Karachi, Pakistan</strong>. We provide expert-level
              services for <strong>ECU programming</strong>,{" "}
              <strong>ADAS calibration</strong>, <strong>sensor diagnostics</strong>, 
              and complete <strong>hybrid battery solutions</strong>.
            </p>

            <p className="text-muted mb-3">
              With a passion for innovation and a commitment to quality, our
              team combines advanced diagnostic technology with years of
              experience to solve even the most challenging issues.
            </p>

            <p className="text-muted mb-3">
              Whether it’s a <strong>check engine light</strong>,{" "}
              <strong>electrical fault</strong>, or{" "}
              <strong>hybrid battery replacement</strong>, our mission is to
              deliver <strong>honest</strong>, <strong>affordable</strong>, and{" "}
              <strong>long-lasting results</strong>.
            </p>

            <p className="text-muted mb-0">
              We’re proud to be one of Karachi’s leading workshops for hybrid
              and electric vehicles — trusted by{" "}
              <strong>hundreds of satisfied car owners</strong>.
            </p>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="col-lg-5 text-center">
          <img
            src="/assets/images/about-hybrid.jpg"
            alt="Hybrid Car Service at Yasin & Yasir Automotive"
            className="img-fluid rounded shadow-sm"
            style={{ maxHeight: "350px", objectFit: "cover" }}
          />
        </div>
      </div>

      {/* ✅ Call to Action */}
      <div className="text-center mt-5">
        <h5 className="fw-semibold mb-3">
          Need expert help with your hybrid vehicle?
        </h5>
        <a href="/book" className="btn btn-primary btn-lg shadow">
          Schedule an Appointment
        </a>
      </div>

      {/* ✅ Testimonials Section */}
      <div className="mt-5">
        <Testimonials />
      </div>
    </div>
  );
}

export default AboutUsPage;
