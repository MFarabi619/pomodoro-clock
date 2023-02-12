import React from "react";
import { useState } from "react";
import "./Clock.scss";
import {
  FaArrowUp,
  FaArrowDown,
  FaPlay,
  FaPause,
  FaRedo,
} from "react-icons/fa";

function Clock() {
  let [timer, setTimer] = useState(0);
  let [breakNum, setBreakNum] = useState(5);

  return (
    <div className="container-1">
      <p id="timer-label">Time Remaining: {timer}</p>
      <p id="time-left">25:00</p>

      <div className="container-2">
        <section className="break-container">
          <p id="break-label">Break Length</p>
          <div className="container-3">
            <span
              className="btn"
              id="break-decrement"
              onClick={() => setBreakNum(breakNum - 1)}
            >
              <FaArrowDown />
            </span>
            <span id="break-length"> {breakNum} </span>
            <span
              className="btn"
              id="break-increment"
              onClick={() => setBreakNum(breakNum + 1)}
            >
              <FaArrowUp />
            </span>
          </div>
        </section>

        <section className="btn-container">
          <span
            id="start_stop"
            className="btn start_stop"
            onClick={() => setTimer(timer + 1)}
          >
            <FaPlay />
          </span>

          <span className="btn">
            <FaPause />
          </span>
          <span id="reset" className="btn">
            <FaRedo />
          </span>
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
