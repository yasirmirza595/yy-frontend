// src/pages/BookingFormPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { createBooking } from '../services/bookingService';

function BookingFormPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    city: 'Karachi',
    email: '',
    day: '',
    month: '',
    year: '',
    time: '',
    brand: '',
    model: '',
    service: '',
  });

  const [error, setError] = useState('');

  const brands = [
    'Toyota', 'Honda', 'Suzuki', 'Daihatsu', 'BMW', 'Mercedes', 'Mitsubishi', 'Changan',
    'MG', 'Audi', 'FAW', 'Hyundai', 'Nissan', 'Kia', 'Lexus', 'Jeep', 'Proton',
    'Range Rover', 'Subaru', 'Chevrolet', 'Isuzu', 'Hino'
  ];

  const years = Array.from({ length: 2025 - 1995 + 1 }, (_, i) => 1995 + i);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const times = ['10:00 AM', '11:00 AM', '12:30 PM', '1:30 PM', '3:00 PM', '4:30 PM'];

  const services = [
    'Hybrid Battery Replacement',
    'ECU / Radar Calibration',
    'Hybrid System Checkup',
    'Sensor / Electrical Fault Diagnosis',
    'Suspension / Mechanical Repair',
    'General Maintenance'
  ];

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (error) setError('');
  };

  // ✅ Helper: Convert 12h → 24h format
  const convertTo24Hour = (time12h) => {
    if (!time12h) return '';
    const [time, modifier] = time12h.split(' ');
    let [hours, minutes] = time.split(':');

    if (modifier === 'PM' && hours !== '12') {
      hours = String(parseInt(hours, 10) + 12);
    }
    if (modifier === 'AM' && hours === '12') {
      hours = '00';
    }

    return `${hours}:${minutes}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Proper date format (YYYY-MM-DD)
    const formattedDate = `${formData.year}-${String(months.indexOf(formData.month) + 1).padStart(2, '0')}-${String(formData.day).padStart(2, '0')}`;
    const dateObj = new Date(formattedDate);

    if (isNaN(dateObj.getTime())) {
      setError('Please select a valid date.');
      return;
    }

    try {
      const bookingData = {
        name: `${formData.firstName} ${formData.lastName}`,
        phone: formData.phone,
        city: formData.city,
        email: formData.email,
        date: formattedDate,                         // ✅ "2025-09-30"
        time: convertTo24Hour(formData.time),        // ✅ "14:30"
        vehicle: `${formData.brand} ${formData.model}`,
        service: formData.service,
        status: 'Pending',                           // ✅ default status
      };

      console.log("📤 Sending booking data:", bookingData);

      await createBooking(bookingData);
      navigate('/booking-success');
    } catch (err) {
      console.error('Booking Error:', err);
      setError('There was an error submitting your booking. Please try again.');
    }
  };

  return (
    <div className="container my-5">
      <Helmet>
        <title>Schedule An Appointment | Yasin & Yasir Automotive</title>
        <meta
          name="description"
          content="Book your hybrid car service appointment with Yasin & Yasir Automotive. Reliable and expert automotive services in Karachi."
        />
      </Helmet>

      <div className="booking-card p-4 mx-auto" style={{ maxWidth: '800px' }}>
        <h2 className="text-center fw-bold mb-4 section-heading">
          Schedule An Appointment
        </h2>

        {error && <div className="alert alert-danger text-center">{error}</div>}

        <form onSubmit={handleSubmit}>
          {/* Contact Info */}
          <h5 className="form-section-title">Contact Information</h5>
          <div className="row g-3 mb-4">
            <div className="col-md-6">
              <label htmlFor="firstName" className="form-label">First Name *</label>
              <input
                id="firstName"
                type="text"
                name="firstName"
                className="form-control"
                required
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="lastName" className="form-label">Last Name *</label>
              <input
                id="lastName"
                type="text"
                name="lastName"
                className="form-control"
                required
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="phone" className="form-label">Phone *</label>
              <input
                id="phone"
                type="tel"
                name="phone"
                className="form-control"
                required
                pattern="03[0-9]{9}"
                title="Please enter a valid Pakistani phone number starting with 03 and 11 digits total"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="city" className="form-label">City *</label>
              <select
                id="city"
                name="city"
                className="form-select"
                required
                value={formData.city}
                onChange={handleChange}
              >
                <option>Karachi</option>
                <option>Lahore</option>
                <option>Islamabad</option>
                <option>Rawalpindi</option>
              </select>
            </div>
            <div className="col-md-12">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Appointment Details */}
          <h5 className="form-section-title">Appointment Details</h5>
          <div className="row g-3 mb-4">
            <div className="col-md-4">
              <label htmlFor="day" className="form-label">Day *</label>
              <select
                id="day"
                name="day"
                className="form-select"
                required
                value={formData.day}
                onChange={handleChange}
              >
                <option value="">Select Day</option>
                {days.map((day) => (
                  <option key={day} value={day}>{day}</option>
                ))}
              </select>
            </div>

            <div className="col-md-4">
              <label htmlFor="month" className="form-label">Month *</label>
              <select
                id="month"
                name="month"
                className="form-select"
                required
                value={formData.month}
                onChange={handleChange}
              >
                <option value="">Select Month</option>
                {months.map((month) => (
                  <option key={month} value={month}>{month}</option>
                ))}
              </select>
            </div>

            <div className="col-md-4">
              <label htmlFor="year" className="form-label">Year *</label>
              <select
                id="year"
                name="year"
                className="form-select"
                required
                value={formData.year}
                onChange={handleChange}
              >
                <option value="">Select Year</option>
                {years.map((year) => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>

            <div className="col-md-6">
              <label htmlFor="time" className="form-label">Preferred Time *</label>
              <select
                id="time"
                name="time"
                className="form-select"
                required
                value={formData.time}
                onChange={handleChange}
              >
                <option value="">Select Time</option>
                {times.map((time) => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </select>
            </div>

            <div className="col-md-6">
              <label htmlFor="brand" className="form-label">Vehicle Brand *</label>
              <select
                id="brand"
                name="brand"
                className="form-select"
                required
                value={formData.brand}
                onChange={handleChange}
              >
                <option value="">Select Brand</option>
                {brands.map((brand) => (
                  <option key={brand} value={brand}>{brand}</option>
                ))}
              </select>
            </div>

            <div className="col-md-6">
              <label htmlFor="model" className="form-label">Model Year *</label>
              <select
                id="model"
                name="model"
                className="form-select"
                required
                value={formData.model}
                onChange={handleChange}
              >
                <option value="">Select Model Year</option>
                {years.map((year) => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>

            <div className="col-md-6">
              <label htmlFor="service" className="form-label">Service Required *</label>
              <select
                id="service"
                name="service"
                className="form-select"
                required
                value={formData.service}
                onChange={handleChange}
              >
                <option value="">Select Service</option>
                {services.map((srv) => (
                  <option key={srv} value={srv}>{srv}</option>
                ))}
              </select>
            </div>
          </div>

          <button type="submit" className="btn btn-primary w-100 py-2">
            Book Appointment
          </button>

          <p className="text-muted text-center mt-3">
            We’ll confirm your appointment by call or WhatsApp based on availability.
          </p>
        </form>
      </div>
    </div>
  );
}

export default BookingFormPage;
