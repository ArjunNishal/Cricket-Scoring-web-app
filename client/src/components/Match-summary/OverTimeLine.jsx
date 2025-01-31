import React from "react";

const OverTimeLine = () => {
  const overBallNames = [
    {
      class: "leg-bye",
      text: "lb2",
    },
    {
      class: "bye",
      text: "b",
    },
    {
      class: "wide",
      text: "W",
    },
    {
      class: "no-ball",
      text: "nb",
    },
    {
      class: "wicket",
      text: "W",
    },
    {
      class: "six",
      text: "6",
    },
    {
      class: "four",
      text: "4",
    },
    {
      class: "",
      text: "2",
    },
    {
      class: "",
      text: "2",
    },
  ];

  return (
    <div className="col-12 py-2">
      <div className="over-timeline-wrapper">
        <div className="d-flex last-ten-balls  justify-content-center align-items-center">
          <div className="over-start text-center">7th</div>

          {/* over balls */}
          <div className="over-balls-wrapper ">
            {overBallNames.map((el, index) => {
              return (
                <div
                  key={index}
                  className={`over-ball  text-center ${
                    el.class && `over-ball-${el.class}`
                  }`}
                >
                  <div className="run">{el.text}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverTimeLine;
