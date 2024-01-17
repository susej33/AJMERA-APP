// src/components/MainContent.js
import React from 'react';
import { FaUser, FaBriefcase, FaFileAlt, FaMoneyBill } from 'react-icons/fa';
import Card from './Card';
import Analytics from './Analytics';

const Home = () => {
    return (
      <div className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-10">
        <h1 className="text-2xl font-semibold mb-4">Dashboard Overview</h1>
  
        <div className='flex m-5 p-5'>
        <Card title="Total Users" data="1200" element={ <FaUser className="text-2xl mr-2" />}/>
        <Card title="Total Sales" data="$50,000" element={<FaMoneyBill className="text-2xl mr-2" /> }/>
        <Card title="Projects" data="15" element={ <FaBriefcase className="text-2xl mr-2" />}/>
        <Card title="Reports" data="800" element={ <FaFileAlt className="text-2xl mr-2" />}/>
        </div>

        <Analytics/>
  
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="p-3 font-semibold text-left border">ID</th>
                <th className="p-3 font-semibold text-left border">Product</th>
                <th className="p-3 font-semibold text-left border">Amount</th>
                <th className="p-3 font-semibold text-left border">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border">1</td>
                <td className="p-3 border">Product A</td>
                <td className="p-3 border">$50.00</td>
                <td className="p-3 border">2023-01-01</td>
              </tr>
              <tr>
                <td className="p-3 border">2</td>
                <td className="p-3 border">Product B</td>
                <td className="p-3 border">$30.00</td>
                <td className="p-3 border">2023-01-02</td>
              </tr>
              <tr>
                <td className="p-3 border">2</td>
                <td className="p-3 border">Product C</td>
                <td className="p-3 border">$80.00</td>
                <td className="p-3 border">2023-01-03</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  };

export default Home;
