// src/pages/ServicesPage.js
import React from 'react';
import { Helmet } from 'react-helmet';
import {
  FaBatteryHalf,
  FaTools,
  FaOilCan,
  FaSnowflake,
  FaCarCrash,
  FaCar,
  FaExclamationTriangle,
  FaMicrochip,
  FaSatelliteDish,
  FaBullseye,
  FaCogs,
  FaBolt,
} from 'react-icons/fa';

const services = [
  { title: 'Hybrid Battery Replacement', icon: <FaBatteryHalf /> },
  { title: 'Engine Diagnostics', icon: <FaMicrochip /> },
  { title: 'Oil & Filter Change', icon: <FaOilCan /> },
  { title: 'AC Service & Gas Filling', icon: <FaSnowflake /> },
  { title: 'Suspension Repair', icon: <FaCarCrash /> },
  { title: 'Brake Service', icon: <FaCar /> },
  { title: 'Check Engine Light Diagnostics', icon: <FaExclamationTriangle /> },
  { title: 'ECU Programming', icon: <FaMicrochip /> },
  { title: 'ADAS Calibration', icon: <FaSatelliteDish /> },
  { title: 'Radar/Sensor Alignment', icon: <FaBullseye /> },
  { title: 'EFI System Repair', icon: <FaCogs /> },
  { title: 'Complete Electrical Work', icon: <FaBolt /> },
];

function ServicesPage() {
  return (
    <div>
      <Helmet>
        <title>Services | Yasin & Yasir Automotive</title>
        <meta
          name="description"
          content="Explore our expert automotive services including hybrid battery replacement, engine diagnostics, AC service, and more at Yasin & Yasir Automotive."
        />
      </Helmet>

      <section className="py-5 bg-light">
        <div className="container">
          {/* Heading */}
          <h2 className="text-center fw-bold mb-3 section-heading">
            Our Expert Services
          </h2>
          <p className="text-center mb-5 text-muted w-75 mx-auto">
            From advanced diagnostics to hybrid system repair — we specialize in
            fixing complex car issues with precision and expertise.
          </p>

          {/* Services Grid */}
          <div className="row g-4">
            {services.map((service, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="card h-100 shadow-sm border-0 text-center service-card">
                  <div className="card-body p-4">
                    <div className="icon-circle mb-3">
                      {React.cloneElement(service.icon, {
                        size: 32,
                        className: 'text-primary',
                      })}
                    </div>
                    <h5 className="card-title fw-semibold mb-2">
                      {service.title}
                    </h5>
                    <p className="text-muted small">
                      Get expert service for{' '}
                      {service.title.toLowerCase()} by our certified hybrid
                      specialists.
                    </p>
                    <a
                      href="/book"
                      className="btn btn-sm btn-outline-primary fw-semibold mt-2"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-5">
            <a
              href="/book"
              className="btn btn-primary btn-lg px-4 py-2 fw-semibold shadow"
            >
              Schedule Your Service
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServicesPage;
