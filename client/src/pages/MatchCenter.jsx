import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumb from "../components/match-center/Breadcrumb";
import MatchLists from "../components/match-center/MatchLists";

const MatchCenter = () => {
  return (
    <div>
      <Navbar />
      <Breadcrumb />
      <MatchLists />
      <Footer />
    </div>
  );
};

export default MatchCenter;
