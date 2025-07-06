
import { Link } from 'react-router-dom';

const EmployeeNavbar = () => {
  return (
    <nav className="navbar employee-navbar">
      <div className="navbar-brand">Employee Portal</div>
      <ul className="navbar-nav">
        <li><Link to="/employee/dashboard">Dashboard</Link></li>
        <li><Link to="/employee/tasks">My Tasks</Link></li>
        <li><Link to="/employee/time-tracker">Time Tracker</Link></li>
        <li><Link to="/employee/profile">My Profile</Link></li>
        <li><Link to="/logout">Logout</Link></li>
      </ul>
    </nav>
  );
};

export default EmployeeNavbar;