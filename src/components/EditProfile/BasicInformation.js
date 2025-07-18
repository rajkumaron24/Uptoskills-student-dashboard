import React from 'react';

const BasicInformation = () => {
  return (
    <section className="form-section" style={{ marginBottom: '40px' }}>
      <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '24px', color: '#111827', paddingBottom: '8px', borderBottom: '1px solid #e5e7eb' }}>
        Basic Information
      </h2>
      <div className="form-row" style={{ display: 'flex', gap: '16px', marginBottom: '20px' }}>
        <div className="form-group" style={{ flex: 1 }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500, color: '#374151' }}>First Name</label>
          <input type="text" placeholder="First Name" className="form-input" style={{
            width: '100%',
            padding: '12px',
            border: '1px solid #d1d5db',
            borderRadius: '8px',
            fontSize: '14px',
            background: 'white'
          }} />
        </div>
        <div className="form-group" style={{ flex: 1 }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500, color: '#374151' }}>Last Name</label>
          <input type="text" placeholder="Last Name" className="form-input" style={{
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
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500, color: '#374151' }}>Gender</label>
          <div className="radio-group" style={{ display: 'flex', gap: '24px', marginTop: '8px' }}>
            <label className="radio-label" style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontWeight: 400 }}>
              <input type="radio" name="gender" value="male" defaultChecked style={{ display: 'none' }} />
              <span className="radio-custom" style={{
                width: '16px',
                height: '16px',
                border: '2px solid #d1d5db',
                borderRadius: '50%',
                position: 'relative',
                display: 'inline-block'
              }}></span>
              Male
            </label>
            <label className="radio-label" style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontWeight: 400 }}>
              <input type="radio" name="gender" value="female" style={{ display: 'none' }} />
              <span className="radio-custom" style={{
                width: '16px',
                height: '16px',
                border: '2px solid #d1d5db',
                borderRadius: '50%',
                position: 'relative',
                display: 'inline-block'
              }}></span>
              Female
            </label>
          </div>
        </div>
        <div className="upload-area" style={{
          border: '2px dashed #d1d5db',
          borderRadius: '8px',
          padding: '32px',
          textAlign: 'center',
          background: '#fafafa',
          flex: 1
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
      </div>

      <div className="form-row" style={{ display: 'flex', gap: '16px', marginBottom: '20px' }}>
        <div className="form-group" style={{ flex: 1 }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500, color: '#374151' }}>Date of Birth</label>
          <input type="text" placeholder="dd/mm/yyyy" className="form-input" style={{
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
          <select className="form-select" style={{
            width: '100%',
            padding: '12px',
            border: '1px solid #d1d5db',
            borderRadius: '8px',
            fontSize: '14px',
            background: 'white'
          }}>
            <option>Class</option>
          </select>
        </div>
        <div className="form-group" style={{ flex: 1 }}>
          <select className="form-select" style={{
            width: '100%',
            padding: '12px',
            border: '1px solid #d1d5db',
            borderRadius: '8px',
            fontSize: '14px',
            background: 'white'
          }}>
            <option>Section</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default BasicInformation;
