import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Technologies from "./Pages/Technologies";

function App() {
  return (
    <Router basename="/portafolio-dev">
      <Header />
      <Routes>
        <Route path="/" basename="/" element={<Home />} />
        <Route path="/about" basename="/about" element={<About />} />
        <Route path="/contact" basename="/contact" element={<Contact />} />
        <Route path="/projects" basename="/projects" element={<Projects />} />
        <Route path="/technologies" basename="/technologies" element={<Technologies />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;