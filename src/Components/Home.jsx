const Home = () => {
  const labs = [
    {
      id: "Lab-1",
      title: "Event Emitter & Event Loop",
      desc: "Node.js EventEmitter implementation, simulated DOM dispatchEvent system, and event loop phase analysis with nextTick and timers.",
      tech: ["Node.js", "Events", "Event Loop"]
    },
    {
      id: "Lab-2",
      title: "File System Operations",
      desc: "Asynchronous file manipulation using node:fs/promises covering create, read, append, and unlink operations.",
      tech: ["fs/promises", "Async/Await"]
    },
    {
      id: "Lab-3",
      title: "Native HTTP Web Server",
      desc: "Building a native Node.js HTTP server handling routes and serving custom plaintext and multi-line responses.",
      tech: ["http", "Server", "Routing"]
    },
    {
      id: "Lab-4",
      title: "GraphQL API",
      desc: "Configuring Express with express-graphql and GraphQL schemas to query student records with typed fields.",
      tech: ["Express", "GraphQL", "GraphiQL"]
    },
    {
      id: "Lab-5",
      title: "Student REST API",
      desc: "Full CRUD RESTful endpoints (GET, POST, PUT, DELETE) on student records using Express and express.json().",
      tech: ["Express", "REST", "CRUD"]
    },
    {
      id: "Lab-6",
      title: "Static Multi-Page Server",
      desc: "Routing and serving static HTML pages (Home, About, Contact) using Node.js filesystem and stream operations.",
      tech: ["Node.js", "Static Files", "HTML5"]
    }
  ];

  return (
    <div className="home-container">
      <section className="hero-section">
        <h1 className="hero-title">Full Stack Web Development</h1>
        <p className="hero-subtitle">
          CSE-22 2nd Year Workshop — A complete hands-on curriculum encompassing React 19 single-page apps, Node.js internals, Express REST APIs, and GraphQL.
        </p>
        <div className="author-pill">
          <span>👨‍💻 Krishna Porwal</span>
          <span>•</span>
          <span>CSE-22 (2nd Year)</span>
        </div>
      </section>

      <h2 className="section-heading">Backend Lab Modules</h2>
      <div className="labs-grid">
        {labs.map((lab) => (
          <div key={lab.id} className="lab-card">
            <div>
              <div className="lab-header">
                <span className="lab-tag">{lab.id}</span>
                <span className="lab-status">Ready</span>
              </div>
              <h3 className="lab-title">{lab.title}</h3>
              <p className="lab-desc">{lab.desc}</p>
            </div>
            <div className="lab-meta">
              {lab.tech.map((t) => (
                <span key={t} className="tech-chip">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
