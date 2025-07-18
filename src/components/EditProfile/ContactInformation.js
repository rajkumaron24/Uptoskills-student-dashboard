import React from 'react';

const ContactInformation = () => {
  return (
    <section className="form-section" style={{ marginBottom: '40px' }}>
      <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '24px', color: '#111827', paddingBottom: '8px', borderBottom: '1px solid #e5e7eb' }}>
        Contact Information
      </h2>
      <div className="form-row" style={{ display: 'flex', gap: '16px', marginBottom: '20px' }}>
        <div className="form-group" style={{ flex: 1 }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500, color: '#374151' }}>Phone</label>
          <input type="text" placeholder="Contact number" className="form-input" style={{
            width: '100%',
            padding: '12px',
            border: '1px solid #d1d5db',
            borderRadius: '8px',
            fontSize: '14px',
            background: 'white'
          }} />
        </div>
        <div className="form-group" style={{ flex: 1 }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500, color: '#374151' }}>Email</label>
          <input type="email" placeholder="example@gmail.com" className="form-input" style={{
            width: '100%',
            padding: '12px',
            border: '1px solid #d1d5db',
            borderRadius: '8px',
            fontSize: '14px',
            background: 'white'
          }} />
        </div>
      </div>

      <div className="form-group" style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500, color: '#374151' }}>Address</label>
        <input type="text" placeholder="Area and Street" className="form-input" style={{
          width: '100%',
          padding: '12px',
          border: '1px solid #d1d5db',
          borderRadius: '8px',
          fontSize: '14px',
          background: 'white'
        }} />
      </div>

      <div className="form-row" style={{ display: 'flex', gap: '16px', marginBottom: '20px' }}>
        <input type="text" placeholder="Location" className="form-input" style={{
          flex: 1,
          padding: '12px',
          border: '1px solid #d1d5db',
          borderRadius: '8px',
          fontSize: '14px',
          background: 'white'
        }} />
        <input type="text" placeholder="District" className="form-input" style={{
          flex: 1,
          padding: '12px',
          border: '1px solid #d1d5db',
          borderRadius: '8px',
          fontSize: '14px',
          background: 'white'
        }} />
      </div>

      <div className="form-row" style={{ display: 'flex', gap: '16px', marginBottom: '20px' }}>
        <input type="text" placeholder="Pincode" className="form-input" style={{
          flex: 1,
          padding: '12px',
          border: '1px solid #d1d5db',
          borderRadius: '8px',
          fontSize: '14px',
          background: 'white'
        }} />
        <input type="text" placeholder="State" className="form-input" style={{
          flex: 1,
          padding: '12px',
          border: '1px solid #d1d5db',
          borderRadius: '8px',
          fontSize: '14px',
          background: 'white'
        }} />
      </div>
    </section>
  );
};

export default ContactInformation;
