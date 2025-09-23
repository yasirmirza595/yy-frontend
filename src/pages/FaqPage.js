// src/pages/FaqPage.js
import React from "react";
import { Helmet } from "react-helmet";

function FaqPage() {
  const faqs = [
    {
      question: "What types of hybrid vehicles do you service?",
      answer:
        "We service a wide range of hybrid and electric vehicles, including popular models from Toyota, Honda, Nissan, and more.",
    },
    {
      question: "How long does a typical hybrid battery replacement take?",
      answer:
        "On average, a hybrid battery replacement takes 3–5 hours, depending on the vehicle model and condition.",
    },
    {
      question: "Do you offer warranty on your repairs and parts?",
      answer:
        "Yes, we provide a warranty on both parts and labor. Warranty duration depends on the service performed.",
    },
    {
      question:
        "Can you diagnose check engine light issues related to hybrid systems?",
      answer:
        "Absolutely! Our advanced diagnostic tools specialize in hybrid and electric vehicle fault codes and sensor analysis.",
    },
    {
      question: "How do I schedule a service appointment?",
      answer:
        "You can schedule an appointment easily via our website’s booking page or contact us directly by phone or WhatsApp.",
    },
  ];

  return (
    <div className="container py-5">
      {/* ✅ SEO */}
      <Helmet>
        <title>FAQs | Yasin & Yasir Automotive</title>
        <meta
          name="description"
          content="Get answers to common questions about hybrid car services, battery replacement, diagnostics, and more at Yasin & Yasir Automotive."
        />
      </Helmet>

      {/* ✅ Page Heading */}
      <h2 className="section-heading text-center mb-5">
        Frequently Asked Questions
      </h2>

      {/* ✅ FAQ Accordion */}
      <div className="accordion shadow-sm rounded" id="faqAccordion">
        {faqs.map((faq, idx) => (
          <div className="accordion-item border-0 mb-2" key={idx}>
            <h2 className="accordion-header" id={`heading${idx}`}>
              <button
                className={`accordion-button ${
                  idx !== 0 ? "collapsed" : ""
                } fw-semibold`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${idx}`}
                aria-expanded={idx === 0 ? "true" : "false"}
                aria-controls={`collapse${idx}`}
              >
                {faq.question}
              </button>
            </h2>
            <div
              id={`collapse${idx}`}
              className={`accordion-collapse collapse ${
                idx === 0 ? "show" : ""
              }`}
              aria-labelledby={`heading${idx}`}
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body text-muted">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FaqPage;
