import React from 'react';

const FormActions = () => {
  const handleReset = () => {
    window.location.reload();
  };

  const handleSave = () => {
    alert('Form saved successfully!');
  };

  return (
    <div className="form-actions" style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
      <button
        className="btn-secondary"
        onClick={handleReset}
        style={{
          background: '#f3f4f6',
          color: '#374151',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '8px',
          fontWeight: 600,
          cursor: 'pointer',
          transition: 'background-color 0.3s ease',
        }}
        onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#e5e7eb')}
        onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#f3f4f6')}
      >
        Reset
      </button>
      <button
        className="btn-primary"
        onClick={handleSave}
        style={{
          background: '#3b82f6',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '8px',
          fontWeight: 600,
          cursor: 'pointer',
          transition: 'background-color 0.3s ease, transform 0.2s ease',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.backgroundColor = '#2563eb';
          e.currentTarget.style.transform = 'scale(1.05)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.backgroundColor = '#3b82f6';
          e.currentTarget.style.transform = 'scale(1)';
        }}
      >
        Save
      </button>
    </div>
  );
};

export default FormActions;
