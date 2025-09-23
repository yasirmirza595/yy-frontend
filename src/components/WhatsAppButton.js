// src/components/WhatsAppButton.js
import React from 'react';

function WhatsAppButton() {
  const phoneNumber = '923365143531'; // Apna number without +

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 1000,
      }}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
          transition: 'transform 0.3s',
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
        onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      />
    </a>
  );
}

export default WhatsAppButton;
