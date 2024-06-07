import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Breadcrumb from "./components/Breadcrumb";
import HomePage from "./pages/HomePage";
import TechnologyPage from "./pages/TechnologyPage";
import SportsPage from "./pages/SportsPage";
import BusinessPage from "./pages/BusinessPage";
import HealthPage from "./pages/HealthPage";
import EntertainmentPage from "./pages/EntertainmentPage";
import FashionPage from "./pages/FashionPage";

const App = () => {
  return (
    <Router>
      <Header />
      <Navbar />
      <Breadcrumb />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/technology" element={<TechnologyPage />} />
        <Route path="/sports" element={<SportsPage />} />
        <Route path="/business" element={<BusinessPage />} />
        <Route path="/health" element={<HealthPage />} />
        <Route path="/entertainment" element={<EntertainmentPage />} />
        <Route path="/fashion" element={<FashionPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
