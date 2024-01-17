import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = ({ setToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform authentication logic
    axios.post('http://localhost:5000/api/login', { username, password })
      .then(response => {
        const token = response.data.token;
        if(token) {
          setToken(token);
          navigate('/dashboard');
        }
        else {
          setError("Invalid Credentials. Please try again!!");
        }

      })
      .catch(error => {
        console.error('Login failed:', error);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-indigo-800">
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
        <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-800">Ajmera Login</h2>
        {error && <div className='text-center text-red-500'>{error}</div>}
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Username</label>
            <input
              type="text"
              id="username"
              className="border-2 border-indigo-800 rounded w-full py-2 px-3 focus:outline-none focus:ring focus:border-indigo-500"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input
              type="password"
              id="password"
              className="border-2 border-indigo-800 rounded w-full py-2 px-3 focus:outline-none focus:ring focus:border-indigo-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="button"
            onClick={handleLogin}
            className="bg-indigo-800 text-white py-2 px-4 rounded hover:bg-indigo-800 focus:outline-none focus:shadow-outline-purple active:bg-indigo-500"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;