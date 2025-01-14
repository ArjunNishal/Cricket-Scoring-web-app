import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";
import MatchCenter from "./pages/MatchCenter";
import Startmatch from "./pages/Startmatch";
import Leaderboards from "./pages/Leaderboards";
import Register from "./pages/Register";
import MatchSummary from "./pages/MatchSummary";

function App() {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* home page */}
          <Route path="/" element={<Home />} />
          {/* auth */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* Match pages */}
          <Route path="/match-center" element={<MatchCenter />} />
          <Route path="/match" element={<Startmatch />} />{" "}
          <Route path="/match-summary" element={<MatchSummary />} />
          {/* leaderboards pages */}
          <Route path="/leaderboards" element={<Leaderboards />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
