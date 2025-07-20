import { useState } from 'react';
import './NotificationsPage.css';

// Imports file      
import Header from '../dashboard/Header';
import RightSidebar from '../dashboard/RightSidebar';
import Sidebar from '../dashboard/Sidebar';

// Sample data for the notifications
const notificationsData = [
  { 
    id: 1, 
    title: 'New Assignment Added', 
    message: 'Your instructor has added a new assignment for the Physics course.', 
    time: '2 hours ago' 
  },
  { 
    id: 2, 
    title: 'New Message from Jane Cooper', 
    message: "Hey, how's your project going? Let me know if you need help.", 
    time: '1 day ago' 
  },
  { 
    id: 3, 
    title: 'Milestone Completed', 
    message: 'Congratulations! You have completed the "Initial Research" milestone.', 
    time: '3 days ago' 
  },
  { 
    id: 4, 
    title: 'Upcoming Deadline', 
    message: 'The deadline for "Complete Problem Set #5" is tomorrow.', 
    time: '5 days ago' 
  },
];

const NotificationsPage = () => {
 
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarVisible((prev) => !prev);
  };

  return (
   
    <div className="dashboard-container">
      {isSidebarVisible && <Sidebar isSidebarVisible={isSidebarVisible} />}
      <div className={`main-content${isSidebarVisible ? '' : ' full-width'}`}>
        <Header toggleSidebar={toggleSidebar} />
        
        {/* content in notification page */}
        <div className="page-card">
          <h2 className="notifications-main-title">🔔 Notifications</h2>
          <div className="notifications-list">

            {notificationsData.map((notification) => (
              <div className="notification-item" key={notification.id}>
                
                <div className="notification-content">
                  <h3 className="notification-title">{notification.title}</h3>
                  <p className="notification-message">{notification.message}</p>
                </div>
                <span className="notification-time">{notification.time}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
      <RightSidebar />
    </div>
  );
};



export default NotificationsPage;
