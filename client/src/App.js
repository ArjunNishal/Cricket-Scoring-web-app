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
import ChooseTeams from "./components/Match-Start/ChooseTeams";
import SelectTeam from "./components/Match-Start/SelectTeam";
import SelectSquad from "./components/Match-Start/SelectSquad";
import AddNewTeam from "./components/Match-Start/AddNewTeam";
import AddPlayers from "./components/team/AddPlayers";
import TeamCreated from "./components/team/TeamCreated";

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
          {/*=================== Start Match pages=============================================== */}
          <Route path="/select-team" element={<SelectTeam />} />
          <Route path="/select-squad" element={<SelectSquad />} />
          <Route path="/add-new-team" element={<AddNewTeam />} />
          <Route path="/add-players" element={<AddPlayers />} />
          <Route path="/team-created" element={<TeamCreated />} />
          <Route path="/leaderboards" element={<Leaderboards />} />
          <Route path="/leaderboards" element={<Leaderboards />} />
          {/* ============================================== */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
