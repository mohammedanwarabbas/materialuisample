import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {HashRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
