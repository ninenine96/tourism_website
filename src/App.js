import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/index.js";
import About from "./pages/about/about.js";
import ContactUs from "./pages/contact-us/contact-us.js";
import GlobalStyle from "./globalStles";
import Pricing from "./components/pricing/pricing";
import ScrollToTop from "./components/ScrollToTop";
import FAQ from "./pages/faq/faq";
import Packages from "./pages/packages/package";
import Ladakh from "./pages/ladakh/package";
import TripKKK from "./pages/trips/Kashmir-Katra_Amritsar/kashmir-katra";
import SpecialHoliday from "./pages/trips/specialHoliday/sHoliday";
import SpecialHoneymoon from "./pages/trips/specialHoneymoon/honeymoon";
import Honeymoon from "./pages/trips/honeymoon/honeymoon";
import SpecialHolidayGroup from "./pages/trips/specialHolidayGroup/sHoliday";
import TripKK from "./pages/trips/Kashmir-Katra/kashmir-katra";
import TripLadakh from "./pages/trips/trip-ladakh/ladakh";
import Footer from "./components/footer";
import Reviews from "./components/gReviews";
import Hotels from "./pages/hotels/Hotels";

function App() {
  return (
    <Router>
      <Navbar />
      <GlobalStyle />
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tours" element={<Packages />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/packages" element={<Pricing />} />
        <Route path="/ladakh" element={<Ladakh />} />
        <Route path="/trip-kashmir-katra-amritsar" element={<TripKKK />} />
        <Route path="/special-holiday" element={<SpecialHoliday />} />
        <Route
          path="/special-holiday-group"
          element={<SpecialHolidayGroup />}
        />
        <Route path="/special-honeymoon" element={<SpecialHoneymoon />} />
        <Route path="/honeymoon" element={<Honeymoon />} />
        <Route path="/trip-kashmir-katra" element={<TripKK />} />
        <Route path="/trip-ladakh" element={<TripLadakh />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/hotels" element={<Hotels />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
