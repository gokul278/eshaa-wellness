import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

import Header from "./components/00-Header/Header";
import Home from "./components/01-Home/Home";
import About from "./components/02-About/About";
import Treatments from "./components/03-Treatments/Treatments";
import Price from "./components/04-Price/Price";
import Appointments from "./components/05-Appointments/Appointments";
import Voucher from "./components/06-Voucher/Voucher";
import Gallery from "./components/07-Gallery/Gallery";
import Contact from "./components/08-Contact/Contact";
import Footer from "./components/09-Footer/Footer";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      mirror: true,
      anchorPlacement: "top-bottom",
    });
  }, []);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  return (
    <>
      <div>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/treatments" element={<Treatments />} />
            <Route path="/price" element={<Price />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/voucher" element={<Voucher />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
