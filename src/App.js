import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AssignmentsSection from './components/dashboard/AssignmentsSection';
import BottomProfileMessages from './components/dashboard/BottomProfileMessages';
import ChartSection from './components/dashboard/ChartSection';
import Header from './components/dashboard/Header';
import NoticeBoard from './components/dashboard/NoticeBoard';
import RightSidebar from './components/dashboard/RightSidebar';
import Sidebar from './components/dashboard/Sidebar';
import StatsGrid from './components/dashboard/StatsGrid';
import WelcomeSection from './components/dashboard/WelcomeSection';
import EditProfilePage from './components/EditProfile/EditProfilePage';
import MilestonePage from './components/milestonesPage/milestonePage';
import MyProjects from './components/myProjects/MyProjects';
import NotificationsPage from './components/Notifications/NotificationsPage';
import './styles.css';

import { useState } from 'react';

function Dashboard() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarVisible((prev) => !prev);
  };

  return (
    <div className="dashboard-container">
      {isSidebarVisible && <Sidebar isSidebarVisible={isSidebarVisible} />}
     <div className={`main-content${isSidebarVisible ? '' : ' full-width'}`}>

        <Header toggleSidebar={toggleSidebar} />
        <WelcomeSection />
        <StatsGrid />
        <div className="content-row">
          <NoticeBoard />
          <ChartSection />
        </div>
        <AssignmentsSection />
        <BottomProfileMessages />
      </div>
      <RightSidebar />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/edit-profile" element={<EditProfilePage />} />
        <Route path="/my-project" element={<MyProjects />} />
        <Route path="/milestones" element={<MilestonePage />} />
        <Route path="/notifications" element={<NotificationsPage />} />
      </Routes>
    </Router>
  );
}

export default App;