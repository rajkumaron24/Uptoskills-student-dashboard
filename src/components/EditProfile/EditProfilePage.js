import React, { useState } from 'react';
import Sidebar from '../dashboard/Sidebar';
import Header from '../dashboard/Header';
import StudentProfileForm from './StudentProfileForm';

const EditProfilePage = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarVisible((prev) => !prev);
  };

  return (
    <div className="dashboard-container" style={{ display: 'flex', height: '100vh' }}>
      {isSidebarVisible && <Sidebar isSidebarVisible={isSidebarVisible} />}
      <div className={`main-content${isSidebarVisible ? '' : ' full-width'}`} style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <Header toggleSidebar={toggleSidebar} />
        <div className="form-container" style={{ flex: 1, overflowY: 'auto', padding: '24px' }}>
          <StudentProfileForm />
        </div>
      </div>
    </div>
  );
};

export default EditProfilePage;
