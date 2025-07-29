import { useNavigate } from 'react-router-dom';

function AssignmentsPage() {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <h2 className="page-title">My Assignments</h2>
      <p className="page-subtitle">List of assigned assignments.</p>
      <div className="grid">
        <div className="card" onClick={() => navigate('/assignments/done')}>
          <h3>Completed</h3>
          <p>Done assignments (redirect)</p>
        </div>
        <div className="card" onClick={() => navigate('/assignments/missed')}>
          <h3>Missed</h3>
          <p>Missed assignments (redirect)</p>
        </div>
        <div className="card" onClick={() => navigate('/assignments/assigned')}>
          <h3>Upcoming</h3>
          <p>Upcoming assignments</p>
        </div>
      </div>
    </div>
  );
}

export default AssignmentsPage;
