import React from 'react';
import Sidebar from '../dashboard/Sidebar';

function MyProjects() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example project cards */}
          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-xl font-semibold mb-2">Project One</h2>
            <p className="text-gray-600">Description of project one.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-xl font-semibold mb-2">Project Two</h2>
            <p className="text-gray-600">Description of project two.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-xl font-semibold mb-2">Project Three</h2>
            <p className="text-gray-600">Description of project three.</p>
          </div>
          {/* Add more project cards as needed */}
        </div>
      </main>
    </div>
  );
}

export default MyProjects;
