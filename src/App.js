import Navbar from './components/Navbar'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/index.js'
import About from './pages/about.js'

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
    
    </Routes>
    </Router>
  );
}

export default App;
