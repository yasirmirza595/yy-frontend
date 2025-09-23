import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { submitQuestion } from '../services/questionService';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp } from 'react-icons/fa';

function ContactUsPage() {
  const [formData, setFormData] = useState({ name: '', email: '', question: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (submitted) setSubmitted(false);
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await submitQuestion(formData);
      setSubmitted(true);
      setError('');
      setFormData({ name: '', email: '', question: '' });
    } catch (err) {
      console.error('Submission Error:', err);
      setError('There was an error submitting your question. Please try again.');
    }
    setIsSubmitting(false);
  };

  return (
    <div className="container py-5">
      <Helmet>
        <title>Contact Us | Yasin & Yasir Automotive</title>
        <meta
          name="description"
          content="Contact Yasin & Yasir Automotive for hybrid car services, diagnostics, and expert repairs. Reach out to us via phone, email, or ask a question."
        />
      </Helmet>

      {/* Page Heading */}
      <h2 className="text-center section-heading">Contact Us</h2>

      <div className="row g-4">
        {/* Contact Info */}
        <div className="col-md-6">
          <div className="contact-card p-4 h-100">
            <h4 className="form-section-title mb-3">Workshop Info</h4>
            <p><FaPhoneAlt className="me-2 text-primary" /> <strong>Call:</strong> <a href="tel:+923002792686">0300-2792686</a></p>
            <p><FaWhatsapp className="me-2 text-success" /> <strong>WhatsApp:</strong> <a href="https://wa.me/923365143531" target="_blank" rel="noopener noreferrer">0336-5143531</a></p>
            <p><FaEnvelope className="me-2 text-danger" /> <strong>Email:</strong> <a href="mailto:yasirmirza595@gmail.com">yasirmirza595@gmail.com</a></p>
            <p><FaMapMarkerAlt className="me-2 text-info" /> <strong>Address:</strong><br />
              Plot No. 921, Jheel Park Road, Tariq Road, Karachi 75100
            </p>
            <p><FaClock className="me-2 text-warning" /> <strong>Hours:</strong> Mon–Sat: 11:00 AM – 10:00 PM</p>

            <h5 className="form-section-title mt-4">Google Maps</h5>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps?q=Plot%20No.%20921%2C%20Jheel%20Park%20Road%2C%20Tariq%20Rd%2C%20Karachi%2C%20Pakistan&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Workshop Location"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="col-md-6">
          <div className="contact-card p-4 h-100">
            <h4 className="form-section-title mb-3">Ask a Question</h4>

            {submitted && (
              <div className="alert alert-success text-center" role="alert">
                ✅ Your question has been submitted successfully!
              </div>
            )}
            {error && (
              <div className="alert alert-danger text-center" role="alert">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name *</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email *</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="question" className="form-label">Your Question *</label>
                <textarea
                  id="question"
                  name="question"
                  className="form-control"
                  rows="4"
                  placeholder="Type your message here..."
                  value={formData.question}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit Question'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUsPage;
