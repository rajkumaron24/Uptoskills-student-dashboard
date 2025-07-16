import React from 'react';

function AssignmentsSection() {
  return (
    <div className="assignments-section">
      <div className="section-header">
        <h3>Assignments</h3>
        <div className="search-assignments">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          </svg>
          <input type="text" placeholder="Search by Subject" />
        </div>
      </div>

      <div className="table-container">
        <table className="assignments-table">
          <thead>
            <tr>
              <th>No</th>
              <th>Task</th>
              <th>Subject</th>
              <th>Due Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>01</td>
              <td>Read Chapter1-3</td>
              <td>English</td>
              <td>12 May 2024</td>
              <td><span className="status in-progress">In Progress</span></td>
              <td>
                <button className="action-btn">✏️</button>
                <button className="action-btn">🗑️</button>
              </td>
            </tr>
            <tr>
              <td>02</td>
              <td>Complete Problem Set #5</td>
              <td>Maths</td>
              <td>12 May 2024</td>
              <td><span className="status not-started">Not Started</span></td>
              <td>
                <button className="action-btn">✏️</button>
                <button className="action-btn">🗑️</button>
              </td>
            </tr>
            <tr>
              <td>03</td>
              <td>Write Lab Report on Acid-Base Titration</td>
              <td>Physics</td>
              <td>12 May 2024</td>
              <td><span className="status in-progress">In Progress</span></td>
              <td>
                <button className="action-btn">✏️</button>
                <button className="action-btn">🗑️</button>
              </td>
            </tr>
            <tr>
              <td>04</td>
              <td>Prepare for Oral Presentation</td>
              <td>Chemistry</td>
              <td>12 May 2024</td>
              <td><span className="status in-progress">In Progress</span></td>
              <td>
                <button className="action-btn">✏️</button>
                <button className="action-btn">🗑️</button>
              </td>
            </tr>
            <tr>
              <td>05</td>
              <td>Create Art Piece for Final Project</td>
              <td>English</td>
              <td>12 May 2024</td>
              <td><span className="status completed">Completed</span></td>
              <td>
                <button className="action-btn">✏️</button>
                <button className="action-btn">🗑️</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AssignmentsSection;
