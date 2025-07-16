import React from 'react';
import './styles.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import WelcomeSection from './components/WelcomeSection';
import StatsGrid from './components/StatsGrid';
import NoticeBoard from './components/NoticeBoard';
import ChartSection from './components/ChartSection';
import AssignmentsSection from './components/AssignmentsSection';
import RightSidebar from './components/RightSidebar';
import BottomProfileMessages from './components/BottomProfileMessages';

function App() {
  return (
    <div className="dashboard-container">
      <Sidebar />

      <div className="main-content">
        <Header />
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

export default App;
