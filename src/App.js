import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from './pages/Resume'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
        <Router>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/work" element={<Projects />} />
          </Routes>
        </Router>
        <Footer/>
    </div>
  );
}

export default App;