import React from 'react';

const ProfessionalDetails = () => {
  return (
    <section className="form-section" style={{ marginBottom: '40px' }}>
      <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '24px', color: '#111827', paddingBottom: '8px', borderBottom: '1px solid #e5e7eb' }}>
        Professional Details
      </h2>
      <div className="form-row" style={{ display: 'flex', gap: '16px', marginBottom: '20px' }}>
        <div className="form-group" style={{ flex: 1 }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500, color: '#374151' }}>LinkedIn link</label>
          <input type="text" placeholder="LinkedIn link" className="form-input" style={{
            width: '100%',
            padding: '12px',
            border: '1px solid #d1d5db',
            borderRadius: '8px',
            fontSize: '14px',
            background: 'white'
          }} />
        </div>
        <div className="form-group" style={{ flex: 1 }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500, color: '#374151' }}>Github link</label>
          <input type="text" placeholder="Github link" className="form-input" style={{
            width: '100%',
            padding: '12px',
            border: '1px solid #d1d5db',
            borderRadius: '8px',
            fontSize: '14px',
            background: 'white'
          }} />
        </div>
      </div>

      <div className="form-row" style={{ display: 'flex', gap: '16px', marginBottom: '20px' }}>
        <div className="form-group" style={{ flex: 1 }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500, color: '#374151' }}>Internship</label>
          <input type="text" placeholder="Yes or No" className="form-input" style={{
            width: '100%',
            padding: '12px',
            border: '1px solid #d1d5db',
            borderRadius: '8px',
            fontSize: '14px',
            background: 'white'
          }} />
        </div>
        <div className="form-group" style={{ flex: 1 }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500, color: '#374151' }}>Company name</label>
          <input type="text" className="form-input" style={{
            width: '100%',
            padding: '12px',
            border: '1px solid #d1d5db',
            borderRadius: '8px',
            fontSize: '14px',
            background: 'white'
          }} />
        </div>
      </div>

      <div className="form-row" style={{ display: 'flex', gap: '16px', marginBottom: '20px' }}>
        <div className="form-group" style={{ flex: 1 }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500, color: '#374151' }}>Duration</label>
          <input type="text" className="form-input" style={{
            width: '100%',
            padding: '12px',
            border: '1px solid #d1d5db',
            borderRadius: '8px',
            fontSize: '14px',
            background: 'white'
          }} />
        </div>
        <div className="form-group" style={{ flex: 1 }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500, color: '#374151' }}>Skills You Used</label>
          <input type="text" placeholder="HTML, CSS, etc" className="form-input" style={{
            width: '100%',
            padding: '12px',
            border: '1px solid #d1d5db',
            borderRadius: '8px',
            fontSize: '14px',
            background: 'white'
          }} />
        </div>
      </div>
    </section>
  );
};

export default ProfessionalDetails;
