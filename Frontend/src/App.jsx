 import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import EyeCare from './Pages/EyeCare';
import ContactLenses from './Pages/ContactLenses';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SpecialOffers from './Pages/SpecialOffers';
import ChildrenZone from './Pages/ChildrenZone';
import FreeEyeTestService from './Pages/FreeEyeTestService';
import CorporateEyeCare from './Pages/CorporateEyeCare';
import HomeVisit from './Pages/HomeVisit';
import HearingTest from './Pages/HearingTest';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import FreedomOfInformation from './Pages/FreedomOfInformation';
import TermsAndConditions from './Pages/TermsAndConditions';
import BookAppointment from './Pages/BookAppointment';
import ScrollToTop from './Components/ScrollToTop';
function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <ScrollToTop/>
      
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/eyecare" element={<EyeCare />} />
          <Route path="/contactlenses" element={<ContactLenses />} />
          <Route path="/specialoffers" element={<SpecialOffers/>} />
          <Route path="/childrenzone" element={<ChildrenZone/>} />
          <Route path="/freeeyetest" element={<FreeEyeTestService/>} />
          <Route path="/corporate-eye-care" element={<CorporateEyeCare />} />
          <Route path="/home-visit" element={<HomeVisit />} />
          <Route path="/hearing-test" element={<HearingTest />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/freedom-of information" element={<FreedomOfInformation />} />
          <Route path="/terms-& Conditions" element={<TermsAndConditions />} />
          <Route path="/book-appointment" element={<BookAppointment />} />



        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;