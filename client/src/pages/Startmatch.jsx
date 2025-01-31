import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ChooseTeams from "../components/Match-Start/ChooseTeams";

const Startmatch = () => {
  return (
    <div>
      {/* <div className="d-sm-block d-none">
        <Navbar />
      </div> */}
      <ChooseTeams />
      {/* <div className="d-sm-block d-none">
        <Footer />
      </div> */}
    </div>
  );
};

export default Startmatch;
