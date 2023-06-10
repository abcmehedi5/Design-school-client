import React from "react";

const AdminHome = () => {
  return (
    <div>
      {/* Main Content */}
      <div className="flex flex-col p-8">
        <h1 className="text-2xl mb-4">Dashboard</h1>
        <div className="grid grid-cols-3 gap-4">
          {/* Users */}
          <div className="bg-white p-4 rounded shadow bg-gradient-to-b from-teal-400 via-teal-200 to-teal-500">
            <h2 className="text-lg font-semibold">Users</h2>
            <p className="text-3xl font-bold">100</p>
          </div>

          {/* Classes */}
          <div className="bg-white p-4 rounded shadow bg-gradient-to-b from-blue-400 via-blue-200 to-blue-500">
            <h2 className="text-lg font-semibold">Classes</h2>
            <p className="text-3xl font-bold">50</p>
          </div>

          {/* Sales */}
          <div className="bg-white p-4 rounded shadow bg-gradient-to-b from-fuchsia-400 via-fuchsia-200 to-fuchsia-500">
            <h2 className="text-lg font-semibold">Sales</h2>
            <p className="text-3xl font-bold">$10,000</p>
          </div>

          {/* Add more components here */}
        </div>
      </div>


    </div>
  );
};

export default AdminHome;
