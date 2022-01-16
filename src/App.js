import Navbar from './components/Navbar'
// import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/index.js'
import  About from './pages/about/about.js'
import  ContactUs from './pages/contact-us/contact-us.js'
import { FooterContainer } from './containers/footer'
import GlobalStyle from './globalStles';
import Pricing from './components/pricing/pricing'


function App() {
  
  return (
    <Router>
      <Navbar />
      <GlobalStyle />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/packages' element={<Pricing />} />
          <Route path='/home' element={<Home />} />
          <Route path='/contactUs' element={<ContactUs />} />
        </Routes>
      <FooterContainer />
      
    </Router>

    
  );
}

export default App;
