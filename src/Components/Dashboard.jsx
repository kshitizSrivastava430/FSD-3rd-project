const Dashboard = () => {
  const metrics = [
    { label: "Completed Labs", value: "6 / 6" },
    { label: "GraphQL Queries", value: "3 Fields" },
    { label: "REST Endpoints", value: "4 Operations" },
    { label: "Status", value: "100% Verified" }
  ];

  const modules = [
    { name: "Frontend SPA", framework: "React 19 + Vite 8", status: "Active & Built" },
    { name: "Lab-1: Events & Loop", framework: "Node.js EventEmitter & Timers", status: "Completed" },
    { name: "Lab-2: File I/O", framework: "node:fs/promises async CRUD", status: "Completed" },
    { name: "Lab-3: Native Server", framework: "Node http module", status: "Completed" },
    { name: "Lab-4: GraphQL API", framework: "express-graphql & GraphQL schema", status: "Completed" },
    { name: "Lab-5: REST API", framework: "Express.js CRUD student service", status: "Completed" },
    { name: "Lab-6: Static Server", framework: "Node.js multi-page router", status: "Completed" },
    { name: "API: Optional GraphQL", framework: "Express + GraphQL service", status: "Completed" }
  ];

  return (
    <div className="dashboard-container">
      <section className="hero-section" style={{ paddingBottom: '16px' }}>
        <h1 className="hero-title">Workshop Dashboard</h1>
        <p className="hero-subtitle">
          Real-time overview of the Full Stack Development modules, lab exercises, and API endpoints.
        </p>
      </section>

      <div className="metrics-row">
        {metrics.map((m) => (
          <div key={m.label} className="metric-card">
            <div className="metric-value">{m.value}</div>
            <p className="metric-label">{m.label}</p>
          </div>
        ))}
      </div>

      <h2 className="section-heading">Module Verification Status</h2>
      <div className="labs-grid">
        {modules.map((mod) => (
          <div key={mod.name} className="lab-card">
            <div>
              <div className="lab-header">
                <span className="lab-tag">{mod.name}</span>
                <span className="lab-status">Passing</span>
              </div>
              <h3 className="lab-title">{mod.framework}</h3>
              <p className="lab-desc">Verified syntax, modular packaging, and test executions.</p>
            </div>
            <div className="lab-meta">
              <span className="tech-chip">{mod.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
