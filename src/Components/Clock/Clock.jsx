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
          <span id="break-decrement">
            <FaArrowDown />
          </span>
          <span id="break-length"></span>
          <span id="break-increment">
            <FaArrowUp />
          </span>
        </section>

        <section className="session-container">
          <p id="session-label">Session Length</p>
          <span id="session-decrement">
            <FaArrowDown />
          </span>
          <span id="session-length"></span>
          <span id="session-increment">
            <FaArrowUp />
          </span>
        </section>
      </div>
    </div>
  );
}

export default Clock;
