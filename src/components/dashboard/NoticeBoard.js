import React from 'react';

function NoticeBoard() {
  return (
    <div className="notice-board">
      <div className="section-header">
        <h3>Notice Board</h3>
        <button className="view-all">View All</button>
      </div>
      <div className="notice-item">
        <div className="notice-icon yellow">!</div>
        <span>Company Hiring</span>
      </div>
      <div className="notice-item">
        <div className="notice-icon blue">i</div>
        <span>Active Assessments</span>
      </div>
    </div>
  );
}

export default NoticeBoard;
