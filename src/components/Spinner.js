// src/components/Spinner.js
import React from 'react';

function Spinner() {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '150px' }}>
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default Spinner;
