import React from 'react';
import Sidebar from '../dashboard/Sidebar';
import Header from '../dashboard/Header';
import FormHeader from './FormHeader';
import FormContent from './FormContent';

const EditProfilePage = () => {
  return (
    <div className="dashboard-container" style={{ display: 'flex', height: '100vh' }}>
      <Sidebar />
      <div className="main-content" style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <Header />
        <div className="form-container" style={{ flex: 1, overflowY: 'auto', padding: '24px' }}>
          <FormHeader />
          <FormContent />
        </div>
      </div>
    </div>
  );
};
export default EditProfilePage;