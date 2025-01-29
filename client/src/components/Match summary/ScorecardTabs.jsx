import React from "react";

const ScorecardTabs = () => {
  const battingScorecard = [
    {
      name: "Player 1",
      runs: 45,
      balls: 32,
      fours: 6,
      sixes: 2,
      status: "Caught",
      strikeRate: ((45 / 32) * 100).toFixed(2),
    },
    {
      name: "Player 2",
      runs: 28,
      balls: 22,
      fours: 3,
      sixes: 1,
      status: "Bowled",
      strikeRate: ((28 / 22) * 100).toFixed(2),
    },
    {
      name: "Player 3",
      runs: 63,
      balls: 47,
      fours: 7,
      sixes: 3,
      status: "Not Out",
      strikeRate: ((63 / 47) * 100).toFixed(2),
    },
    {
      name: "Player 4",
      runs: 15,
      balls: 12,
      fours: 2,
      sixes: 0,
      status: "LBW",
      strikeRate: ((15 / 12) * 100).toFixed(2),
    },
    {
      name: "Player 5",
      runs: 282,
      balls: 222,
      fours: 10,
      sixes: 2,
      status: "Caught",
      strikeRate: ((282 / 222) * 100).toFixed(2),
    },
    {
      name: "Player 6",
      runs: 12,
      balls: 15,
      fours: 1,
      sixes: 0,
      status: "Run Out",
      strikeRate: ((12 / 15) * 100).toFixed(2),
    },
    {
      name: "Player 7",
      runs: 36,
      balls: 28,
      fours: 5,
      sixes: 1,
      status: "Caught & Bowled",
      strikeRate: ((36 / 28) * 100).toFixed(2),
    },
    {
      name: "Player 8",
      runs: 19,
      balls: 14,
      fours: 2,
      sixes: 1,
      status: "Bowled",
      strikeRate: ((19 / 14) * 100).toFixed(2),
    },
    {
      name: "Player 9",
      runs: 7,
      balls: 10,
      fours: 1,
      sixes: 0,
      status: "Stumped",
      strikeRate: ((7 / 10) * 100).toFixed(2),
    },
    {
      name: "Player 10",
      runs: 3,
      balls: 5,
      fours: 0,
      sixes: 0,
      status: "Bowled",
      strikeRate: ((3 / 5) * 100).toFixed(2),
    },
    {
      name: "Player 11",
      runs: 11,
      balls: 9,
      fours: 2,
      sixes: 0,
      status: "Not Out",
      strikeRate: ((11 / 9) * 100).toFixed(2),
    },
  ];

  const indiaBattingScorecard = [
    {
      name: "Rohit Sharma",
      runs: 55,
      balls: 38,
      fours: 7,
      sixes: 2,
      status: "Caught",
      strikeRate: ((55 / 38) * 100).toFixed(2),
    },
    {
      name: "Virat Kohli",
      runs: 72,
      balls: 49,
      fours: 8,
      sixes: 3,
      status: "Not Out",
      strikeRate: ((72 / 49) * 100).toFixed(2),
    },
    {
      name: "Shubman Gill",
      runs: 18,
      balls: 14,
      fours: 2,
      sixes: 0,
      status: "Bowled",
      strikeRate: ((18 / 14) * 100).toFixed(2),
    },
    {
      name: "Suryakumar Yadav",
      runs: 35,
      balls: 22,
      fours: 5,
      sixes: 1,
      status: "Caught & Bowled",
      strikeRate: ((35 / 22) * 100).toFixed(2),
    },
    {
      name: "Hardik Pandya",
      runs: 41,
      balls: 30,
      fours: 3,
      sixes: 2,
      status: "Caught",
      strikeRate: ((41 / 30) * 100).toFixed(2),
    },
    {
      name: "Ravindra Jadeja",
      runs: 14,
      balls: 12,
      fours: 1,
      sixes: 0,
      status: "LBW",
      strikeRate: ((14 / 12) * 100).toFixed(2),
    },
    {
      name: "KL Rahul",
      runs: 62,
      balls: 48,
      fours: 7,
      sixes: 2,
      status: "Not Out",
      strikeRate: ((62 / 48) * 100).toFixed(2),
    },
    {
      name: "Shardul Thakur",
      runs: 7,
      balls: 10,
      fours: 1,
      sixes: 0,
      status: "Bowled",
      strikeRate: ((7 / 10) * 100).toFixed(2),
    },
    {
      name: "Jasprit Bumrah",
      runs: 4,
      balls: 6,
      fours: 0,
      sixes: 0,
      status: "Stumped",
      strikeRate: ((4 / 6) * 100).toFixed(2),
    },
    {
      name: "Mohammed Shami",
      runs: 11,
      balls: 9,
      fours: 2,
      sixes: 0,
      status: "Bowled",
      strikeRate: ((11 / 9) * 100).toFixed(2),
    },
    {
      name: "Kuldeep Yadav",
      runs: 3,
      balls: 5,
      fours: 0,
      sixes: 0,
      status: "Not Out",
      strikeRate: ((3 / 5) * 100).toFixed(2),
    },
  ];

  const pakistanBattingScorecard = [
    {
      name: "Babar Azam",
      runs: 65,
      balls: 45,
      fours: 9,
      sixes: 1,
      status: "Caught",
      strikeRate: ((65 / 45) * 100).toFixed(2),
    },
    {
      name: "Mohammad Rizwan",
      runs: 58,
      balls: 41,
      fours: 6,
      sixes: 2,
      status: "Not Out",
      strikeRate: ((58 / 41) * 100).toFixed(2),
    },
    {
      name: "Fakhar Zaman",
      runs: 22,
      balls: 18,
      fours: 3,
      sixes: 1,
      status: "LBW",
      strikeRate: ((22 / 18) * 100).toFixed(2),
    },
    {
      name: "Shadab Khan",
      runs: 34,
      balls: 26,
      fours: 3,
      sixes: 2,
      status: "Bowled",
      strikeRate: ((34 / 26) * 100).toFixed(2),
    },
    {
      name: "Iftikhar Ahmed",
      runs: 27,
      balls: 21,
      fours: 2,
      sixes: 1,
      status: "Caught & Bowled",
      strikeRate: ((27 / 21) * 100).toFixed(2),
    },
    {
      name: "Imad Wasim",
      runs: 14,
      balls: 12,
      fours: 1,
      sixes: 0,
      status: "Caught",
      strikeRate: ((14 / 12) * 100).toFixed(2),
    },
    {
      name: "Shaheen Afridi",
      runs: 9,
      balls: 11,
      fours: 1,
      sixes: 0,
      status: "Bowled",
      strikeRate: ((9 / 11) * 100).toFixed(2),
    },
    {
      name: "Haris Rauf",
      runs: 5,
      balls: 7,
      fours: 0,
      sixes: 0,
      status: "Stumped",
      strikeRate: ((5 / 7) * 100).toFixed(2),
    },
    {
      name: "Hasan Ali",
      runs: 3,
      balls: 5,
      fours: 0,
      sixes: 0,
      status: "Bowled",
      strikeRate: ((3 / 5) * 100).toFixed(2),
    },
    {
      name: "Naseem Shah",
      runs: 11,
      balls: 9,
      fours: 2,
      sixes: 0,
      status: "Not Out",
      strikeRate: ((11 / 9) * 100).toFixed(2),
    },
    {
      name: "Mohammad Amir",
      runs: 7,
      balls: 6,
      fours: 1,
      sixes: 0,
      status: "Bowled",
      strikeRate: ((7 / 6) * 100).toFixed(2),
    },
  ];

  const indiaBowlingScorecard = [
    {
      name: "Jasprit Bumrah",
      overs: 10,
      runs: 42,
      wickets: 3,
      maidens: 1,
      economy: (42 / 10).toFixed(2),
    },
    {
      name: "Mohammed Shami",
      overs: 9,
      runs: 48,
      wickets: 2,
      maidens: 0,
      economy: (48 / 9).toFixed(2),
    },
    {
      name: "Kuldeep Yadav",
      overs: 8,
      runs: 36,
      wickets: 1,
      maidens: 1,
      economy: (36 / 8).toFixed(2),
    },
    {
      name: "Ravindra Jadeja",
      overs: 10,
      runs: 51,
      wickets: 1,
      maidens: 0,
      economy: (51 / 10).toFixed(2),
    },
    {
      name: "Hardik Pandya",
      overs: 7,
      runs: 33,
      wickets: 2,
      maidens: 0,
      economy: (33 / 7).toFixed(2),
    },
    {
      name: "Shardul Thakur",
      overs: 6,
      runs: 39,
      wickets: 1,
      maidens: 0,
      economy: (39 / 6).toFixed(2),
    },
  ];

  const pakistanBowlingScorecard = [
    {
      name: "Shaheen Afridi",
      overs: 10,
      runs: 45,
      wickets: 2,
      maidens: 1,
      economy: (45 / 10).toFixed(2),
    },
    {
      name: "Haris Rauf",
      overs: 9,
      runs: 52,
      wickets: 1,
      maidens: 0,
      economy: (52 / 9).toFixed(2),
    },
    {
      name: "Hasan Ali",
      overs: 8,
      runs: 47,
      wickets: 2,
      maidens: 0,
      economy: (47 / 8).toFixed(2),
    },
    {
      name: "Shadab Khan",
      overs: 10,
      runs: 54,
      wickets: 1,
      maidens: 0,
      economy: (54 / 10).toFixed(2),
    },
    {
      name: "Imad Wasim",
      overs: 6,
      runs: 28,
      wickets: 1,
      maidens: 0,
      economy: (28 / 6).toFixed(2),
    },
    {
      name: "Naseem Shah",
      overs: 7,
      runs: 35,
      wickets: 2,
      maidens: 1,
      economy: (35 / 7).toFixed(2),
    },
  ];

  return (
    <div className="col-12 p-0">
      <div className="score-tabs">
        <nav className="border-top">
          <div
            className="nav score-tabs-nav nav-fill"
            id="nav-tab"
            role="tablist"
          >
            <button
              className="nav-link active"
              id="nav-home-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-home"
              type="button"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
            >
              India
            </button>
            <button
              className="nav-link"
              id="nav-profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-profile"
              type="button"
              role="tab"
              aria-controls="nav-profile"
              aria-selected="false"
            >
              Pakistan
            </button>
          </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
            tabIndex={0}
          >
            <div className="scorecard-batting">
              <table className="table">
                <thead>
                  <tr className="table-light">
                    <th>Batting</th>
                    <th className="scorecard-headings">R</th>
                    <th className="scorecard-headings">B</th>
                    <th className="scorecard-headings">4s</th>
                    <th className="scorecard-headings">6s</th>
                    <th className="scorecard-headings">SR</th>
                  </tr>
                </thead>
                <tbody>
                  {indiaBattingScorecard.map((el, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          <div className="scorecard-batter-div">
                            <p className="mb-0">{el.name}</p>
                            <small className="text-muted">{el.status}</small>
                          </div>
                        </td>
                        <td className="scorecard-headings">{el.runs}</td>
                        <td className="scorecard-headings">{el.balls}</td>
                        <td className="scorecard-headings">{el.fours}</td>
                        <td className="scorecard-headings">{el.sixes}</td>
                        <td className="scorecard-headings">{el.strikeRate}</td>
                      </tr>
                    );
                  })}

                  {/* EXTRAS */}
                  <tr className="table-light">
                    <th>Extras</th>
                    <td className="text-center" colSpan={1}>
                      12
                    </td>
                    <td colSpan={4}>(W 2, LB 4, NB 5, B1)</td>
                  </tr>

                  {/* Total */}

                  <tr className="table-light">
                    <th>Total Runs</th>
                    <td className="text-center" colSpan={1}>
                      125
                    </td>
                    <td colSpan={4}>(9 wkts, 20 ov)</td>
                  </tr>

                  {/* Fall of wickets */}
                  <tr>
                    <td colSpan={6}>
                      <div>
                        <p className="m-0">
                          <b>Fall of Wickets</b>
                        </p>
                        <div className="fall-of-wickets d-flex flex-wrap">
                          <div className="fall-wicket-detail">
                            <p>
                              <span className="fall-wicket-score">16/1</span>{" "}
                              (S. Yadav, 2.2 ov)
                            </p>
                          </div>
                          <div className="fall-wicket-break">
                            <span>&nbsp;.&nbsp;</span>
                          </div>
                          <div className="fall-wicket-detail">
                            <p>
                              <span className="fall-wicket-score">16/1</span>{" "}
                              (S. Yadav, 2.2 ov)
                            </p>
                          </div>{" "}
                          <div className="fall-wicket-break">
                            <span>&nbsp;.&nbsp;</span>
                          </div>
                          <div className="fall-wicket-detail">
                            <p>
                              <span className="fall-wicket-score">16/1</span>{" "}
                              (S. Yadav, 2.2 ov)
                            </p>
                          </div>{" "}
                          <div className="fall-wicket-break">
                            <span>&nbsp;.&nbsp;</span>
                          </div>
                          <div className="fall-wicket-detail">
                            <p>
                              <span className="fall-wicket-score">16/1</span>{" "}
                              (S. Yadav, 2.2 ov)
                            </p>
                          </div>{" "}
                          <div className="fall-wicket-break">
                            <span>&nbsp;.&nbsp;</span>
                          </div>
                          <div className="fall-wicket-detail">
                            <p>
                              <span className="fall-wicket-score">16/1</span>{" "}
                              (S. Yadav, 2.2 ov)
                            </p>
                          </div>{" "}
                          <div className="fall-wicket-break">
                            <span>&nbsp;.&nbsp;</span>
                          </div>
                          <div className="fall-wicket-detail">
                            <p>
                              <span className="fall-wicket-score">16/1</span>{" "}
                              (S. Yadav, 2.2 ov)
                            </p>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>

                  {/* ========== Bowling ============*/}
                  <tr className="table-light">
                    <th>Bowling</th>
                    <th className="scorecard-headings">O</th>
                    <th className="scorecard-headings">M</th>
                    <th className="scorecard-headings">R</th>
                    <th className="scorecard-headings">W</th>
                    <th className="scorecard-headings">Econ</th>
                  </tr>
                  {pakistanBowlingScorecard.map((el, ind) => {
                    return (
                      <tr key={ind}>
                        <td>{el.name}</td>
                        <td className="scorecard-headings">{el.overs}</td>
                        <td className="scorecard-headings">{el.maidens}</td>
                        <td className="scorecard-headings">{el.runs}</td>
                        <td className="scorecard-headings">{el.wickets}</td>
                        <td className="scorecard-headings">{el.economy}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="nav-profile"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
            tabIndex={0}
          >
            <div className="scorecard-batting">
              <table className="table">
                <thead>
                  <tr className="table-light">
                    <th>Batting</th>
                    <th className="scorecard-headings">R</th>
                    <th className="scorecard-headings">B</th>
                    <th className="scorecard-headings">4s</th>
                    <th className="scorecard-headings">6s</th>
                    <th className="scorecard-headings">SR</th>
                  </tr>
                </thead>
                <tbody>
                  {pakistanBattingScorecard.map((el, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          <div className="scorecard-batter-div">
                            <p className="mb-0">{el.name}</p>
                            <small className="text-muted">{el.status}</small>
                          </div>
                        </td>
                        <td className="scorecard-headings">{el.runs}</td>
                        <td className="scorecard-headings">{el.balls}</td>
                        <td className="scorecard-headings">{el.fours}</td>
                        <td className="scorecard-headings">{el.sixes}</td>
                        <td className="scorecard-headings">{el.strikeRate}</td>
                      </tr>
                    );
                  })}
                  {/* EXTRAS */}
                  <tr className="table-light">
                    <th>Extras</th>
                    <td className="text-center" colSpan={1}>
                      12
                    </td>
                    <td colSpan={4}>(W 2, LB 4, NB 5, B1)</td>
                  </tr>

                  {/* Total */}

                  <tr className="table-light">
                    <th>Total Runs</th>
                    <td className="text-center" colSpan={1}>
                      125
                    </td>
                    <td colSpan={4}>(9 wkts, 20 ov)</td>
                  </tr>

                  {/* Fall of wickets */}
                  <tr>
                    <td colSpan={6}>
                      <div>
                        <p className="m-0">
                          <b>Fall of Wickets</b>
                        </p>
                        <div className="fall-of-wickets d-flex flex-wrap">
                          <div className="fall-wicket-detail">
                            <p>
                              <span className="fall-wicket-score">16/1</span>{" "}
                              (S. Yadav, 2.2 ov)
                            </p>
                          </div>
                          <div className="fall-wicket-break">
                            <span>&nbsp;.&nbsp;</span>
                          </div>
                          <div className="fall-wicket-detail">
                            <p>
                              <span className="fall-wicket-score">16/1</span>{" "}
                              (S. Yadav, 2.2 ov)
                            </p>
                          </div>{" "}
                          <div className="fall-wicket-break">
                            <span>&nbsp;.&nbsp;</span>
                          </div>
                          <div className="fall-wicket-detail">
                            <p>
                              <span className="fall-wicket-score">16/1</span>{" "}
                              (S. Yadav, 2.2 ov)
                            </p>
                          </div>{" "}
                          <div className="fall-wicket-break">
                            <span>&nbsp;.&nbsp;</span>
                          </div>
                          <div className="fall-wicket-detail">
                            <p>
                              <span className="fall-wicket-score">16/1</span>{" "}
                              (S. Yadav, 2.2 ov)
                            </p>
                          </div>{" "}
                          <div className="fall-wicket-break">
                            <span>&nbsp;.&nbsp;</span>
                          </div>
                          <div className="fall-wicket-detail">
                            <p>
                              <span className="fall-wicket-score">16/1</span>{" "}
                              (S. Yadav, 2.2 ov)
                            </p>
                          </div>{" "}
                          <div className="fall-wicket-break">
                            <span>&nbsp;.&nbsp;</span>
                          </div>
                          <div className="fall-wicket-detail">
                            <p>
                              <span className="fall-wicket-score">16/1</span>{" "}
                              (S. Yadav, 2.2 ov)
                            </p>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>

                  {/* ========== Bowling ============*/}
                  <tr className="table-light">
                    <th>Bowling</th>
                    <th className="scorecard-headings">O</th>
                    <th className="scorecard-headings">M</th>
                    <th className="scorecard-headings">R</th>
                    <th className="scorecard-headings">W</th>
                    <th className="scorecard-headings">Econ</th>
                  </tr>
                  {indiaBowlingScorecard.map((el, ind) => {
                    return (
                      <tr key={ind}>
                        <td>{el.name}</td>
                        <td className="scorecard-headings">{el.overs}</td>
                        <td className="scorecard-headings">{el.maidens}</td>
                        <td className="scorecard-headings">{el.runs}</td>
                        <td className="scorecard-headings">{el.wickets}</td>
                        <td className="scorecard-headings">{el.economy}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScorecardTabs;
