import React from 'react';

const Resume = () => {
  return (
    <section className="form-section" style={{ marginBottom: '40px' }}>
      <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '24px', color: '#111827', paddingBottom: '8px', borderBottom: '1px solid #e5e7eb' }}>
        Resume
      </h2>
      <div className="upload-area" style={{
        border: '2px dashed #d1d5db',
        borderRadius: '8px',
        padding: '32px',
        textAlign: 'center',
        background: '#fafafa'
      }}>
        <div className="upload-icon" style={{ color: '#9ca3af', marginBottom: '12px' }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
          </svg>
        </div>
        <p style={{ marginBottom: '12px', color: '#6b7280' }}>Drop your files to upload</p>
        <button className="select-files-btn" style={{
          background: 'none',
          border: '1px solid #d1d5db',
          padding: '8px 16px',
          borderRadius: '6px',
          cursor: 'pointer',
          fontSize: '14px',
          color: '#374151'
        }}>Select files</button>
      </div>
    </section>
  );
};

export default Resume;
