import React from 'react';

const Skills = () => {
  return (
    <section className="form-section" style={{ marginBottom: '40px' }}>
      <div className="section-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: 0, borderBottom: 'none', paddingBottom: 0 }}>Skills</h2>
        <button className="add-btn" style={{
          background: '#f3f4f6',
          border: 'none',
          width: '32px',
          height: '32px',
          borderRadius: '6px',
          cursor: 'pointer',
          fontSize: '18px',
          color: '#6b7280'
        }}>+</button>
      </div>
      <div className="form-row" style={{ display: 'flex', gap: '16px', marginBottom: '20px' }}>
        <input type="text" placeholder="skill name" className="form-input" style={{
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

export default Skills;
