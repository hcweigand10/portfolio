import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import {Switch} from "react-router"
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from './pages/Resume'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <div className="container-main">
        <Router>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/work" element={<Projects />} />
          </Routes>
        </Router>
      </div>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
