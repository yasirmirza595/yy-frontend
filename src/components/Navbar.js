// src/components/Navbar.js
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../Assets/Y&Y Automotive logo.jpg";

function Navbar() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/book", label: "Book Now" },
    { to: "/about", label: "About Us" },
    { to: "/contact", label: "Contact Us" },
    { to: "/faq", label: "FAQ" },
  ];

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark shadow-sm sticky-top"
      style={{
        background: "rgba(8, 12, 42, 0.95)",
        backdropFilter: "blur(8px)",
      }}
    >
      <div className="container-fluid px-4">
        {/* Logo */}
        <Link
          className="navbar-brand fw-bold d-flex align-items-center"
          to="/"
        >
          <img
            src={logo}
            alt="Yasin & Yasir Automotive"
            style={{
              height: "60px",
              width: "60px",
              objectFit: "cover",
              marginRight: "10px",
              borderRadius: "50%",
              border: "2px solid #fff",
            }}
          />
          <span className="fs-5">Yasin & Yasir Automotive</span>
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Nav Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            {navLinks.map((link, idx) => (
              <li className="nav-item mx-lg-1" key={idx}>
                <Link
                  className={`nav-link px-3 ${
                    location.pathname === link.to ? "active fw-bold" : ""
                  }`}
                  to={link.to}
                  style={{
                    transition: "0.3s",
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}

            {/* Social Icons */}
            <li className="nav-item d-flex align-items-center ms-lg-3">
              <a
                href="https://www.facebook.com/yasinmirza098"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link p-0 mx-1"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/145/145802.png"
                  alt="Facebook"
                  style={{
                    width: "26px",
                    height: "26px",
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
                className="nav-link p-0 mx-1"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                  alt="Instagram"
                  style={{
                    width: "26px",
                    height: "26px",
                    transition: "0.3s",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
                  onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />
              </a>
            </li>

            {/* Admin Links */}
            {token && (
              <>
                <li className="nav-item mx-lg-1">
                  <Link className="nav-link" to="/dashboard">
                    Admin
                  </Link>
                </li>
                <li className="nav-item ms-lg-2">
                  <button
                    onClick={handleLogout}
                    className="btn btn-sm btn-outline-light px-3 rounded-pill"
                    style={{ transition: "0.3s" }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.backgroundColor = "#fff") ||
                      (e.currentTarget.style.color = "#080c2a")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.backgroundColor = "transparent") ||
                      (e.currentTarget.style.color = "#fff")
                    }
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
