import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ThemeProvider } from "../src/components/ThemeProvider";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import ProjectDisplay from "./pages/ProjectDisplay";
import Projects from "./pages/Projects";

function App() {
  return (
    <ThemeProvider>
      <div className="h-screen flex justify-center items-center">
        <div className="App">
          <Router basename="/nadine-portfolio">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
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
