import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MatchDetails from "../components/Match summary/MatchDetails";

const MatchSummary = () => {
  return (
    <>
      <Navbar />
      <MatchDetails />
      <Footer />
    </>
  );
};

export default MatchSummary;
