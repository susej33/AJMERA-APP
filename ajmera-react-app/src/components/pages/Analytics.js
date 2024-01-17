import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { BarChart, Bar } from 'recharts';

const Analytics = () => {
  const chartData = [
              { name: 'January', Sales: 50 },
              { name: 'February', Sales: 60 },
              { name: 'March', Sales: 45 },
              { name: 'April', Sales: 70 },
              { name: 'May', Sales: 55 },
              { name: 'June', Sales: 80 },
            ];
          
  return (
    <div className="container mx-auto mt-8 bg-white p-8 rounded-lg shadow-md">
    <h2 className="text-xl font-semibold mb-4 text-black">Sales Overview</h2>
    <div className="w-full h-64 flex">
      <LineChart width={500} height={300} data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 20 }}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Sales" stroke="rgb(55 48 163)" />
      </LineChart>

      <BarChart width={500} height={300} data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Sales" fill="rgb(55 48 163)" />
      </BarChart>

    </div>
  </div>
  );
};

export default Analytics;