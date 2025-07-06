import { Link } from 'react-router-dom';

const ManagerNavbar = () => {
  return (
    <nav className="navbar manager-navbar">
      <div className="navbar-brand">Manager Dashboard</div>
      <ul className="navbar-nav">
        <li><Link to="/manager/dashboard">Dashboard</Link></li>
        <li><Link to="/manager/team">My Team</Link></li>
        <li><Link to="/manager/tasks">Task Management</Link></li>
        <li><Link to="/manager/approvals">Approvals</Link></li>
        <li><Link to="/logout">Logout</Link></li>
      </ul>
    </nav>
  );
};

export default ManagerNavbar;