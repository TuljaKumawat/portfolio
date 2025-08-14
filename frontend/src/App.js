import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Footer from './components/Footer';
import About from './components/pages/About';
import Skills from './components/pages/Myskill';
import Project from './components/pages/Projects';
import Contact from './components/pages/Contact';





function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route >
        <Route path='/About' element={<About />}></Route >
        <Route path='/Myskill' element={<Skills />}></Route >
        <Route path='/Projects' element={<Project />}></Route >
        <Route path='/Contact' element={<Contact />}></Route >
      </Routes>
      <Footer />
    </Router >
  );
}

export default App;

