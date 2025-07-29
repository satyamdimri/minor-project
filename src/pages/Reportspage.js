function ReportsPage() {
  return (
    <div className="page-container">
      <h2 className="page-title">Reports</h2>
      <p className="page-subtitle">View your progress and report items.</p>
      <div className="grid">
        <div className="card">
          <h3>Submitted Assignments</h3>
        </div>
        <div className="card">
          <h3>Marks</h3>
        </div>
        <div className="card" style={{ gridColumn: '1 / -1' }}>
          <h3>History</h3>
        </div>
      </div>
    </div>
  );
}

export default ReportsPage;
