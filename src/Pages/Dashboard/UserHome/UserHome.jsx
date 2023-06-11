import React, { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import PaymentHistory from "../PaymentHistory/PaymentHistory";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";
const UserHome = () => {
  const { user } = useContext(AuthContext);
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
  const data = [
    {
      name: "Order",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Classes",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Payment",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "instructor",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Instructor",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <div className="p-8">
      {/* Main Content */}
      <div className="flex flex-col ">
        <h1 className="text-2xl mb-4">Dashboard</h1>
        <div className="grid grid-cols-3 gap-4">
          {/* Users */}
          <div className="bg-white p-4 rounded shadow bg-gradient-to-r from-emerald-300 via-teal-300 to-neutral-100">
            <h2 className="text-lg font-semibold">Users</h2>
            <p className="text-3xl font-bold">100</p>
          </div>

          {/* Classes */}
          <div className="bg-white p-4 rounded shadow bg-gradient-to-r from-lime-300 via-cyan-300 to-neutral-100">
            <h2 className="text-lg font-semibold">Classes</h2>
            <p className="text-3xl font-bold">50</p>
          </div>

          {/* Sales */}
          <div className="bg-white p-4 rounded shadow bg-gradient-to-r from-pink-300 via-pink-300 to-neutral-100">
            <h2 className="text-lg font-semibold">Sales</h2>
            <p className="text-3xl font-bold">$10,000</p>
          </div>

          {/* Add more components here */}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 text-center items-center h-96 justify-center mt-10">
        <div className="text-center bg-gradient-to-r  from-teal-400 via-fuchsia-200 to-fuchsia-100 h-90 p-20 rounded-lg">
          <img
            className="w-40 h-40 mx-auto rounded-full"
            src={user?.photoURL}
            alt=""
          />
          <h4 className="mt-4 text-3xl">{user?.displayName}</h4>
          <h4 className="mt-4 text-md">{user?.email}</h4>
        </div>
        <div className="text-center bg-gradient-to-r from-fuchsia-400 via-fuchsia-200 to-sky-300 h-90  p-14  rounded-lg">
          {/* chart */}

          <BarChart width={400} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Bar dataKey="uv" fill="#8884d8" label={{ position: "top" }}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
              ))}
            </Bar>
          </BarChart>
        </div>
      </div>

      <div className="mt-10">
        <PaymentHistory></PaymentHistory>
      </div>
    </div>
  );
};

export default UserHome;
