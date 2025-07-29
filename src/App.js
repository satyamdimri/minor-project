// App.js
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './App.css';
import AssignmentsPage from './pages/AssignmentsPage';
import ReportsPage from './pages/Reportspage';
import DashboardPage from './pages/DashboardPage';

import {useLocation } from 'react-router-dom';
import { FiHome, FiBookOpen, FiBarChart2, FiMessageCircle, FiTablet, FiSettings } from 'react-icons/fi';

function NavBar() {
  const location = useLocation();

  const isActive = (path) => location.pathname.startsWith(path);

  return (
    <nav className="navbar">
      <div className="logo">Minor Project</div>
      <div className="nav-links">
        <Link to="/dashboard" className={isActive('/dashboard') ? 'active' : ''}>
          <FiHome /> Dashboard
        </Link>

        <div className="dropdown">
          <span className={`dropdown-label ${isActive('/assignments') ? 'active' : ''}`}>
            <FiBookOpen /> Assignments
          </span>
          <div className="dropdown-content">
            <Link to="/assignments/assigned">Assigned</Link>
            <Link to="/assignments/missed">Missed</Link>
            <Link to="/assignments/done">Done</Link>
          </div>
        </div>

        <Link to="/reports" className={isActive('/reports') ? 'active' : ''}>
          <FiBarChart2 /> Reports
        </Link>
        <Link to="/messages" className={isActive('/messages') ? 'active' : ''}>
          <FiMessageCircle /> Messages
        </Link>
        <Link to="/subjects" className={isActive('/subjects') ? 'active' : ''}>
          <FiTablet /> Subjects
        </Link>
      </div>

      <div className="nav-icons">
        <FiMessageCircle />
        <FiSettings />
      </div>
    </nav>
  );
}



function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/assignments/*" element={<AssignmentsPage />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="*" element={<DashboardPage />} />
      </Routes>
    </Router>
  );
}

export default App;
