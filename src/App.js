import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/index.js'
import  About from './pages/about/about.js'
import  ContactUs from './pages/contact-us/contact-us.js'
import { FooterContainer } from './containers/footer'
import GlobalStyle from './globalStles';
import Pricing from './components/pricing/pricing'
import ScrollToTop from './components/ScrollToTop'
import FAQ from './pages/faq/faq'
import Packages from './pages/packages/package'
import Ladakh from './pages/ladakh/package'

function App() {
  
  return (
    <Router>
      <Navbar />
      <GlobalStyle />
      <ScrollToTop />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/tours' element={<Packages />} />
          <Route path='/home' element={<Home />} />
          <Route path='/contactUs' element={<ContactUs />} />
          <Route path='/faq' element={<FAQ />} />
          <Route path='/packages' element={<Pricing />} />
          <Route path='/ladakh' element={<Ladakh />} />
        </Routes>
      <FooterContainer />
      
    </Router>

    
  );
}

export default App;
