import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function NotFoundPage() {
  return (
    <div style={styles.container}>
      <Helmet>
        <title>404 Not Found | Yasin & Yasir Automotive</title>
        <meta
          name="description"
          content="This page does not exist. Go back to Yasin & Yasir Automotive home page."
        />
        <meta name="robots" content="noindex" />
      </Helmet>

      <h1 style={styles.heading} role="alert">404</h1>
      <p style={styles.subheading}>Oops! Page not found</p>
      <p style={styles.text}>
        Sorry, the page you’re looking for doesn’t exist or has been moved.
      </p>

      <Link
        to="/"
        style={styles.button}
        aria-label="Return to homepage"
        onMouseOver={(e) => (e.target.style.transform = 'scale(1.05)')}
        onMouseOut={(e) => (e.target.style.transform = 'scale(1)')}
      >
        ← Go Back Home
      </Link>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '80vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '2rem',
    backgroundColor: '#f9fafb', // light background
  },
  heading: {
    fontSize: '7rem',
    fontWeight: '900',
    marginBottom: '0.5rem',
    background: 'linear-gradient(90deg, #1d4ed8, #dc2626)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  subheading: {
    fontSize: '1.75rem',
    fontWeight: '600',
    marginBottom: '0.75rem',
    color: '#111827', // gray-900
  },
  text: {
    fontSize: '1.2rem',
    marginBottom: '1.5rem',
    color: '#374151', // gray-700
    maxWidth: '600px',
  },
  button: {
    backgroundColor: '#1d4ed8', // blue-700
    color: '#ffffff',
    padding: '0.9rem 2rem',
    borderRadius: '0.5rem',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 12px rgba(29, 78, 216, 0.3)',
  },
};

export default NotFoundPage;
