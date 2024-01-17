import { Link } from 'react-router-dom';
import { FaHome, FaUser } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="w-64 bg-indigo-800 text-white p-6">
    <Link to="/" className="text-2xl font-semibold">Dashboard</Link>
    <nav className="mt-6">
      <Link to="/" className="flex items-center py-2 text-white hover:bg-indigo-600">
        <FaHome className="mr-2" />
        Home
      </Link>
      <Link to="/login" className="flex items-center py-2 text-white hover:bg-indigo-600">
        <FaUser className="mr-2" />
        Logout
      </Link>

    </nav>
  </div>
  );
}

export default Sidebar;