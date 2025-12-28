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
    <Router>
      <Header />
      <Routes>
        <Route path="/" basename="/portafolio-dev" element={<Home />} />
        <Route path="/about" basename="/portafolio-dev/about" element={<About />} />
        <Route path="/contact" basename="/portafolio-dev/contact" element={<Contact />} />
        <Route path="/projects" basename="/portafolio-dev/projects" element={<Projects />} />
        <Route path="/technologies" basename="/portafolio-dev/technologies" element={<Technologies />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;