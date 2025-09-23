// src/pages/DashboardPage.js
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { getAllBookings, updateBookingStatus, deleteBooking } from '../services/bookingService';
import { getAllQuestions } from '../services/questionService';
import Spinner from '../components/Spinner';

function DashboardPage() {
  const [bookings, setBookings] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [search, setSearch] = useState('');
  const [serviceFilter, setServiceFilter] = useState('All');
  const [sortOrder, setSortOrder] = useState('None');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBookings();
    fetchQuestions();
  }, []);

  // ✅ Bookings
  const fetchBookings = async () => {
    try {
      const data = await getAllBookings();
      setBookings(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error('Booking fetch error:', err);
      setBookings([]);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Questions
  const fetchQuestions = async () => {
    try {
      const data = await getAllQuestions();
      setQuestions(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error('Question fetch error:', err);
      setQuestions([]);
    }
  };

  // ✅ Delete booking
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this booking?')) {
      try {
        await deleteBooking(id);
        fetchBookings();
      } catch (err) {
        console.error('Delete error:', err);
        alert('Failed to delete booking.');
      }
    }
  };

  // ✅ Update status
  const handleStatusChange = async (id, newStatus) => {
    try {
      await updateBookingStatus(id, newStatus);
      fetchBookings();
    } catch (err) {
      console.error('Status update error:', err);
      alert('Failed to update booking status.');
    }
  };

  // ✅ Filters + Sorting
  const filteredBookings = bookings
    .filter(b =>
      (b.name?.toLowerCase().includes(search.toLowerCase()) ||
        b.email?.toLowerCase().includes(search.toLowerCase()) ||
        b.service?.toLowerCase().includes(search.toLowerCase()))
    )
    .filter(b => serviceFilter === 'All' || b.service === serviceFilter)
    .sort((a, b) => {
      if (sortOrder === 'Newest') return new Date(b.date) - new Date(a.date);
      if (sortOrder === 'Oldest') return new Date(a.date) - new Date(b.date);
      return 0;
    });

  const uniqueServices = [...new Set(bookings.map(b => b.service))];

  if (loading) {
    return (
      <>
        <Helmet>
          <title>Loading Dashboard... | Yasin & Yasir Automotive</title>
        </Helmet>
        <Spinner />
      </>
    );
  }

  return (
    <div className="container my-5">
      <Helmet>
        <title>Admin Dashboard | Yasin & Yasir Automotive</title>
        <meta
          name="description"
          content="Admin dashboard for managing hybrid car bookings and customer questions at Yasin & Yasir Automotive."
        />
      </Helmet>

      <h2 className="mb-5 fw-bold text-center text-primary">⚙️ Admin Dashboard</h2>

      {/* ======================== Bookings Section ======================== */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="fw-bold mb-0">📑 Customer Bookings</h4>
      </div>

      {/* Filters Toolbar */}
      <div className="card shadow-sm border-0 mb-4">
        <div className="card-body d-flex flex-wrap gap-2">
          <input
            type="text"
            className="form-control"
            placeholder="🔍 Search by name, email, or service"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="form-select w-auto"
            value={serviceFilter}
            onChange={(e) => setServiceFilter(e.target.value)}
          >
            <option value="All">All Services</option>
            {uniqueServices.map((service, i) => (
              <option key={`${service}-${i}`} value={service}>
                {service}
              </option>
            ))}
          </select>

          <select
            className="form-select w-auto"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="None">No Sorting</option>
            <option value="Newest">Newest First</option>
            <option value="Oldest">Oldest First</option>
          </select>
        </div>
      </div>

      {filteredBookings.length === 0 ? (
        <div className="alert alert-info text-center">No bookings found.</div>
      ) : (
        filteredBookings.map(b => (
          <div
            key={b._id}
            className="card mb-4 shadow-lg border-0 rounded-3 hover-shadow"
          >
            <div className="card-body">
              <div className="row g-3">
                <div className="col-md-6">
                  <p><strong>Name:</strong> {b.name}</p>
                  <p><strong>Email:</strong> {b.email}</p>
                  <p><strong>Phone:</strong> {b.phone}</p>
                  <p><strong>Vehicle:</strong> {b.vehicle}</p>
                </div>
                <div className="col-md-6">
                  <p><strong>Service:</strong> {b.service}</p>
                  <p><strong>Date:</strong> {new Date(b.date).toDateString()}</p>
                  <p><strong>Time:</strong> {b.time}</p>
                  <p>
                    <strong>Status:</strong>{' '}
                    <span className={`badge rounded-pill bg-${getStatusColor(b.status)}`}>
                      {b.status}
                    </span>
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-center gap-2 mt-3">
                <select
                  value={b.status}
                  onChange={(e) => handleStatusChange(b._id, e.target.value)}
                  className="form-select w-auto"
                >
                  <option value="Pending">Pending</option>
                  <option value="Confirmed">Confirmed</option>
                  <option value="Completed">Completed</option>
                  <option value="Cancelled">Cancelled</option>
                </select>

                <button
                  onClick={() => handleDelete(b._id)}
                  className="btn btn-outline-danger btn-sm"
                >
                  🗑 Delete
                </button>
              </div>
            </div>
          </div>
        ))
      )}

      {/* ======================== Questions Section ======================== */}
      <h4 className="fw-bold mb-4 mt-5">💬 Customer Questions</h4>

      {!Array.isArray(questions) || questions.length === 0 ? (
        <div className="alert alert-warning text-center">
          No customer questions found.
        </div>
      ) : (
        questions.map(q => (
          <div
            key={q._id}
            className="card mb-3 shadow-sm border-0 rounded-3"
          >
            <div className="card-body">
              <p><strong>Name:</strong> {q.name}</p>
              <p><strong>Email:</strong> {q.email}</p>
              <p><strong>Question:</strong> {q.question}</p>
              <p className="text-muted">
                <small>
                  Submitted on: {new Date(q.createdAt).toLocaleString()}
                </small>
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

function getStatusColor(status) {
  switch (status) {
    case 'Pending':
      return 'warning';
    case 'Confirmed':
      return 'info';
    case 'Completed':
      return 'success';
    case 'Cancelled':
      return 'danger';
    default:
      return 'secondary';
  }
}

export default DashboardPage;
