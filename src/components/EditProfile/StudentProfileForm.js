import React, { useState } from 'react';
import './StudentProfileForm.css';

const StudentProfileForm = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    contact_number: '',
    linkedin_url: '',
    github_url: '',
    why_hire_me: '',
    profile_completed: false,
    ai_skill_summary: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <form className="student-profile-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="full_name">Full Name</label>
        <input
          type="text"
          id="full_name"
          name="full_name"
          value={formData.full_name}
          onChange={handleChange}
          placeholder="Enter full name"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="contact_number">Contact Number</label>
        <input
          type="text"
          id="contact_number"
          name="contact_number"
          value={formData.contact_number}
          onChange={handleChange}
          placeholder="Enter contact number"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="linkedin_url">LinkedIn URL</label>
        <input
          type="url"
          id="linkedin_url"
          name="linkedin_url"
          value={formData.linkedin_url}
          onChange={handleChange}
          placeholder="Enter LinkedIn profile URL"
        />
      </div>

      <div className="form-group">
        <label htmlFor="github_url">GitHub URL</label>
        <input
          type="url"
          id="github_url"
          name="github_url"
          value={formData.github_url}
          onChange={handleChange}
          placeholder="Enter GitHub profile URL"
        />
      </div>

      <div className="form-group">
        <label htmlFor="why_hire_me">Why Hire Me</label>
        <textarea
          id="why_hire_me"
          name="why_hire_me"
          value={formData.why_hire_me}
          onChange={handleChange}
          placeholder="Explain why someone should hire you"
          rows="4"
        />
      </div>

      <div className="form-group checkbox-group">
        <input
          type="checkbox"
          id="profile_completed"
          name="profile_completed"
          checked={formData.profile_completed}
          onChange={handleChange}
        />
        <label htmlFor="profile_completed">Profile Completed</label>
      </div>

      <div className="form-group">
        <label htmlFor="ai_skill_summary">AI Skill Summary</label>
        <textarea
          id="ai_skill_summary"
          name="ai_skill_summary"
          value={formData.ai_skill_summary}
          onChange={handleChange}
          placeholder="Summarize your AI skills"
          rows="4"
        />
      </div>

      <button type="submit" className="submit-btn">Save Profile</button>
    </form>
  );
};

export default StudentProfileForm;
