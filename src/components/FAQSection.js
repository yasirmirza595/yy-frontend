// src/components/FAQSection.js
import React, { useState } from 'react';

const faqs = [
  {
    question: 'What types of hybrid vehicles do you service?',
    answer: 'We service a wide range of hybrid and electric vehicles, including Toyota Prius, Nissan Serena e-Power, and many others.',
  },
  {
    question: 'How long does a hybrid battery replacement take?',
    answer: 'Typically, hybrid battery replacement takes between 4 to 6 hours depending on the vehicle model and battery type.',
  },
  {
    question: 'Do you offer warranty on your repairs and parts?',
    answer: 'Yes, we offer a warranty period on both repairs and parts. Warranty details depend on the specific service or product.',
  },
  {
    question: 'Can I book an appointment online?',
    answer: 'Absolutely! You can book your appointment easily using our online booking form available on the website.',
  },
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">Frequently Asked Questions</h2>

        <div className="accordion" id="faqAccordion">
          {faqs.map((faq, index) => (
            <div key={index} className="accordion-item">
              <h2 className="accordion-header" id={`heading${index}`}>
                <button
                  className={`accordion-button ${openIndex === index ? '' : 'collapsed'}`}
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`collapse${index}`}
                >
                  {faq.question}
                </button>
              </h2>
              <div
                id={`collapse${index}`}
                className={`accordion-collapse collapse ${openIndex === index ? 'show' : ''}`}
                aria-labelledby={`heading${index}`}
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
