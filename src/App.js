import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "../src/components/ThemeProvider";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectDisplay from "./pages/ProjectDisplay";

function App() {
  return (
    <ThemeProvider>
      <div className="h-screen flex justify-center items-center">
        <div className="App">
          <Router>
            <Navbar />
            <Routes>
              <Route path="" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/project/:id" element={<ProjectDisplay />} />
              <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
          </Router>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
