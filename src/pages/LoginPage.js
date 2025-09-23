import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { loginAdmin } from '../services/authService';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await loginAdmin({ username, password });
      localStorage.setItem('token', res.token);
      navigate('/dashboard');
    } catch (err) {
      const message =
        err?.response?.data?.message || err.message || 'Login failed';
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #1d4ed8, #3b82f6)',
      }}
    >
      <Helmet>
        <title>Admin Login | Yasin & Yasir Automotive</title>
        <meta
          name="description"
          content="Admin login page for Yasin & Yasir Automotive. Secure access to dashboard and booking management."
        />
        <meta
          name="keywords"
          content="Admin Login, Yasin Yasir Admin Panel, Hybrid Car Service Dashboard"
        />
      </Helmet>

      <div
        className="card shadow-lg border-0 p-4 w-100"
        style={{
          maxWidth: '420px',
          borderRadius: '16px',
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(12px)',
        }}
      >
        <h3
          className="mb-4 text-center fw-bold"
          style={{
            background: 'linear-gradient(90deg, #1d4ed8, #2563eb)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Admin Login
        </h3>

        {error && (
          <div
            className="alert alert-danger text-center py-2"
            role="alert"
            style={{ borderRadius: '8px' }}
          >
            {error}
          </div>
        )}

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label fw-semibold">
              Username
            </label>
            <input
              id="username"
              type="text"
              className="form-control rounded-pill"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              autoComplete="username"
              style={{ padding: '0.75rem 1rem' }}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="form-label fw-semibold">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="form-control rounded-pill"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
              style={{ padding: '0.75rem 1rem' }}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100 fw-semibold rounded-pill"
            disabled={loading}
            style={{
              padding: '0.75rem',
              fontSize: '1rem',
              transition: 'all 0.3s ease',
            }}
            onMouseOver={(e) => (e.target.style.transform = 'translateY(-2px)')}
            onMouseOut={(e) => (e.target.style.transform = 'translateY(0)')}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
