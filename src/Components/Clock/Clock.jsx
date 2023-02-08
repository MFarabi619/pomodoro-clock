import React from "react";
import "./Clock.scss";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

function Clock() {
  return (
    <div className="container-1">
      <p className="time-remaining">Time Remaining:</p>
      <p className="time">15:46</p>

      <div className="container-2">
        <section className="break-container">
          <p id="break-label">Break Length</p>
          <div className="container-3">
            <span className="btn" id="break-decrement">
              <FaArrowDown />
            </span>
            <span id="break-length"> 5 </span>
            <span className="btn" id="break-increment">
              <FaArrowUp />
            </span>
          </div>
        </section>

        <section className="btn-container">
          <span></span>
          <span></span>
          <span></span>
        </section>

        <section className="session-container">
          <p id="session-label">Session Length</p>
          <div className="container-3">
            <span className="btn" id="session-decrement">
              <FaArrowDown />
            </span>
            <span id="session-length"> 25 </span>
            <span className="btn" id="session-increment">
              <FaArrowUp />
            </span>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Clock;
