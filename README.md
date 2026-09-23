# Full Stack Development (FSD) Workshop - CSE-22 (2nd Year)

**Developer:** Kshitiz Srivastava 
**Program:** CSE-22, 2nd Year  
**Repository:** 

---

## 📖 Overview

This repository contains the complete coursework, lab exercises, and projects for the Full Stack Development (FSD) workshop. It covers client-side single-page applications using **React 19** and **Vite**, server-side programming using **Node.js** and **Express**, RESTful API architecture, and modern **GraphQL** schemas.

---

## 🗂️ Project Structure

```text
.
├── src/                          # Frontend SPA (React 19 + Vite 8)
│   ├── Components/
│   │   ├── Home.jsx              # Workshop modules & curriculum overview
│   │   ├── Dashboard.jsx         # Verification status and progress metrics
│   │   └── Footer.jsx            # Social links and copyright
│   ├── App.jsx                   # Main layout and tab navigation
│   ├── App.css                   # Custom responsive styling
│   └── main.jsx                  # React application entry point
├── Backend/                      # Backend Lab Exercises
│   ├── Lab-1/                    # Events & Event Loop
│   │   ├── event-emmiter.js      # EventEmitter implementation
│   │   ├── domEvents.js          # DOM custom event dispatcher simulation
│   │   ├── newEventLoop.js       # Event loop phases (nextTick, timers, promises)
│   │   └── notes-lab1            # Lab 1 study notes
│   ├── Lab-2/                    # File System Operations
│   │   ├── fileDemo.js           # Async CRUD via node:fs/promises
│   │   └── user-data.txt         # Sample data file
│   ├── LAB-3/                    # Native Node.js Web Server
│   │   └── text.js               # HTTP server with plain-text responses
│   ├── Lab-4/                    # GraphQL API
│   │   └── graphql-api/
│   │       └── graph.js          # GraphQL schema & resolver service
│   ├── Lab-5/                    # Express REST API
│   │   └── server.js             # Student CRUD service (GET, POST, PUT, DELETE)
│   └── Lab-6/                    # Static Web Server
│       ├── server.js             # Multi-page HTTP server
│       ├── index.html            # Home page
│       ├── about.html            # About page
│       └── contact.html          # Contact page
├── API/                          # Standalone GraphQL Endpoint
│   └── optional.js               # Express + express-graphql implementation
├── eslint.config.js              # ESLint flat config (React + Node environments)
├── vite.config.js                # Vite configuration
└── package.json                  # Root dependencies and scripts
```

---

## 🚀 Getting Started

### 1. Frontend SPA (React + Vite)

Install dependencies and start the local development server:

```bash
# Install dependencies
npm install

# Start Vite dev server
npm run dev

# Lint codebase
npm run lint

# Build for production
npm run build
```

---

### 2. Backend Labs

#### Lab 1: Event Emitter & Event Loop
```bash
node Backend/Lab-1/event-emmiter.js
node Backend/Lab-1/domEvents.js
node Backend/Lab-1/newEventLoop.js
```

#### Lab 2: File System Operations
```bash
node Backend/Lab-2/fileDemo.js
```

#### Lab 3: Native HTTP Server
```bash
node Backend/LAB-3/text.js
# Access at http://localhost:4000
```

#### Lab 4: GraphQL API
```bash
cd Backend/Lab-4/graphql-api
npm install
node graph.js
# Access GraphiQL explorer at http://localhost:4000/graphql
```

#### Lab 5: Student REST API
```bash
cd Backend/Lab-5
npm install
node server.js
# Endpoints:
# GET    /student
# POST   /student
# PUT    /student
# DELETE /student
```

#### Lab 6: Static File Server
```bash
node Backend/Lab-6/server.js
# Access routes at http://localhost:4000 (/, /about, /contact)
```

#### API: Standalone GraphQL Service
```bash
cd API
npm install
node optional.js
# Access GraphiQL explorer at http://localhost:4000/graphql
```

---

## 🛠️ Technologies Used

- **Frontend**: React 19, Vite 8, JavaScript (ES6+), CSS3
- **Backend**: Node.js, Express.js, GraphQL, express-graphql
- **Tooling**: ESLint 10, npm, Git

---

## 👤 Author

**Krishna Porwal**  
- Email: [krishporwal486@gmail.com](mailto:krishporwal486@gmail.com)  
- GitHub: [@krishporwal011](https://github.com/krishporwal011)
