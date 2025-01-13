import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/Home/HeroSection";
import Footer from "../components/Footer";
import Jumbotron from "../components/Home/Jumbotron";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Jumbotron />
      <Footer />
    </div>
  );
};

export default Home;
