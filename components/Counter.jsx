import React from "react";
import CountUp from "react-countup";

const Counter = ({ endValue1, endValue2, endValue3 }) => {
  return (
    <div
      className="flex bg-warning100 items-center"
      style={{ padding: "3rem" }}
    >
      <div className="w-full text-center border-e-4">
        <h1 className="header-1_black mb-3">
          <CountUp end={endValue1} duration={5} />+
        </h1>
        <h5 className="text-1_regular">Projects</h5>
      </div>
      <div className="w-full text-center border-e-4">
        <h1 className="header-1_black mb-3">
          <CountUp end={endValue2} duration={5} />
        </h1>
        <h5 className="text-1_regular">Average Clients</h5>
      </div>
      <div className="w-full text-center">
        <h1 className="header-1_black mb-3">
          <CountUp end={endValue3} duration={5} />
        </h1>
        <h5 className="text-1_regular">Team Members</h5>
      </div>
    </div>
  );
};

export default Counter;
