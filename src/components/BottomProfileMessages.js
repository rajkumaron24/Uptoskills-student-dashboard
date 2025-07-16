import React from 'react';

function BottomProfileMessages() {
  return (
    <div className="bottom-profile-messages">
      {/* Profile Progress */}
      <div className="profile-progress">
        <h4>Profile Completion</h4>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: '80%' }}></div>
        </div>
        <span className="progress-text">80%</span>

        <h4>Profile Strength</h4>
        <div className="progress-bar">
          <div className="progress-fill strength" style={{ width: '45%' }}></div>
        </div>
        <span className="progress-text">45%</span>
      </div>

      {/* Messages */}
      <div className="messages-widget">
        <div className="widget-header">
          <h4>Messages</h4>
          <button className="expand-btn">→</button>
        </div>
        <div className="message-list">
          <div className="message-item">
            <img src="https://csspicker.dev/api/image/?q=person+avatar&image_type=photo" alt="Jane Cooper" className="message-avatar" />
            <div className="message-content">
              <div className="message-name">Jane Cooper</div>
              <div className="message-preview">Hey, how's your project going?</div>
            </div>
          </div>
          <div className="message-item">
            <img src="https://csspicker.dev/api/image/?q=woman+avatar&image_type=photo" alt="Kristin Watson" className="message-avatar" />
            <div className="message-content">
              <div className="message-name">Kristin Watson</div>
              <div className="message-preview">Can you help me with...</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomProfileMessages;
