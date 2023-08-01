import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="" element={<Projects />} />
          <Route path="" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
