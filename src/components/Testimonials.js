// src/components/Testimonials.js
import React from 'react';

const testimonials = [
  {
    name: 'Ali Khan',
    feedback: 'Yasin & Yasir Automotive ne meri car ka hybrid battery bohat ache se replace ki. Bohat professional service!',
    rating: 5,
  },
  {
    name: 'Sana Ahmed',
    feedback: 'Engine diagnostics me unka expertise hai. Problem jaldi identify kar ke fix kiya.',
    rating: 4,
  },
  {
    name: 'Ahmed Raza',
    feedback: 'Booking process bohat easy aur fast tha. Staff bohat cooperative hai.',
    rating: 5,
  },
];

function Testimonials() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">What Our Customers Say</h2>
        <div className="row">
          {testimonials.map((t, i) => (
            <div key={i} className="col-md-4 mb-4">
              <div className="card shadow-sm p-4 h-100">
                <p className="text-muted">"{t.feedback}"</p>
                <h5 className="mt-3">{t.name}</h5>
                <p>
                  {'⭐'.repeat(t.rating)}{' '}
                  <span className="text-warning">{t.rating} / 5</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
