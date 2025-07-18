import React from 'react';
import './milestonePage.css';

const milestones = [
  { title: "HTML & CSS", status: "Completed", date: "2025-06-10" },
  { title: "JavaScript Basics", status: "Completed", date: "2025-06-20" },
  { title: "React Components", status: "In Progress", date: "2025-07-05" },
  { title: "Project Submission", status: "Pending", date: "2025-07-25" },
];

import Sidebar from '../dashboard/Sidebar';
import RightSidebar from '../dashboard/RightSidebar';

const MilestonePage = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <div className="page-card">
          <h2 className="milestone-title">📌 Milestones</h2>
          <div className="milestone-grid">
            {milestones.map((milestone, index) => (
              <div className="milestone-card" key={index}>
                <h3 className="milestone-heading">{milestone.title}</h3>
                <p className="milestone-date">Target Date: {milestone.date}</p>
                <span className={`milestone-status ${milestone.status.toLowerCase().replace(" ", "-")}`}>
                  {milestone.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <RightSidebar />
    </div>
  );
};

export default MilestonePage;
