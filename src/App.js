import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";

function App() {
  return (
    <>
      <Router>
        <Link to="/">Go Home</Link>
        <Link to="/about">about page</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/:project" element={<Project />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
