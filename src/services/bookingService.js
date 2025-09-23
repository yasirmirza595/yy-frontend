const API_URL = 'http://localhost:5000/api/bookings';

// ✅ Create a new booking (for public form)
export const createBooking = async (bookingData) => {
  try {
    const res = await fetch(`${API_URL}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bookingData),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || 'Booking creation failed');
    }

    return data;
  } catch (error) {
    console.error('Booking creation error:', error);
    throw new Error(error.message || 'Internal server error');
  }
};

// ✅ Get all bookings (for admin dashboard)
export const getAllBookings = async () => {
  const token = localStorage.getItem('token');
  try {
    const res = await fetch(`${API_URL}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || 'Failed to fetch bookings');
    }

    return data;
  } catch (error) {
    console.error('Booking fetch error:', error);
    throw new Error(error.message || 'Failed to fetch bookings');
  }
};

// ✅ Update booking status (for admin)
export const updateBookingStatus = async (id, status) => {
  const token = localStorage.getItem('token');
  try {
    const res = await fetch(`${API_URL}/${id}/status`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ status }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || 'Failed to update status');
    }

    return data;
  } catch (error) {
    console.error('Update status error:', error);
    throw new Error(error.message || 'Failed to update status');
  }
};

// ✅ Delete booking (for admin)
export const deleteBooking = async (id) => {
  const token = localStorage.getItem('token');
  try {
    const res = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || 'Failed to delete booking');
    }

    return data;
  } catch (error) {
    console.error('Delete booking error:', error);
    throw new Error(error.message || 'Failed to delete booking');
  }
};
