import { Link } from 'react-router-dom';

const AdminNavbar = () => {
  return (
    <nav className="navbar admin-navbar">
      <div className="navbar-brand">Admin Dashboard</div>
      <ul className="navbar-nav">
        <li><Link to="/admin/dashboard">Dashboard</Link></li>
        <li><Link to="/admin/users">User Management</Link></li>
        <li><Link to="/admin/settings">System Settings</Link></li>
        <li><Link to="/admin/reports">Reports</Link></li>
        <li><Link to="/logout">Logout</Link></li>
      </ul>
    </nav>
  );
};

export default AdminNavbar;