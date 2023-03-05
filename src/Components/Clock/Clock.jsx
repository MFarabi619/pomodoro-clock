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
  const [timer, setTimer] = useState(25*60);
  const [breakNum, setBreakNum] = useState(5);
  const [sessionNum, setSessionNum] = useState(25);
  let running = false;

  const formatTime = (time) => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    return (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);
  }

  const handleClick = (string) => { 
    if (!running) { 
      if (string === "session-increment") {
        setSessionNum(sessionNum + 1);
        setTimer((sessionNum + 1) * 60);
      } else if (string === "session-decrement") {
        setSessionNum(Math.max(sessionNum - 1, 0));
        setTimer(Math.max((sessionNum - 1) * 60, 0));
      }
    }
    if (string === "start_stop") {
      running = true;
      console.log("start_stop "+running);
    }
    else if (string === "pause") {
      running = false;
      console.log("pause "+running);
    }
    else if(string==="reset"){
      setSessionNum(25);
      setBreakNum(5);
      setTimer(25*60);
    } 
  }

  return (
    <div className="container-1">
      <p id="timer-label">Time Remaining:</p>
      <p id="time-left">{formatTime(timer)}</p>

      <div className="container-2">
        <section className="break-container">
          <p id="break-label">Break Length</p>
          <div className="container-3">
            <span
              className="btn"
              id="break-decrement"
              onClick={() => setBreakNum(Math.max(breakNum - 1, 0))}
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
            onClick={() =>
              handleClick("start_stop")}
          >
            <FaPlay />
          </span>

          <span className="btn"
          onClick={()=>handleClick("pause")}>
            <FaPause />
          </span>
          <span id="reset"
            className="btn"
            onClick={() =>
          handleClick("reset")}>
            <FaRedo />
          </span>
        </section>

        <section className="session-container">
          <p id="session-label">Session Length</p>
          <div className="container-3">
            <span
              className="btn"
              id="session-decrement"
              onClick={() =>
                handleClick("session-decrement")
                }
            >
              <FaArrowDown />
            </span>
            <span id="session-length"> {sessionNum} </span>
            <span
              className="btn"
              id="session-increment"
              onClick={() =>
                handleClick("session-increment")}
            >
              <FaArrowUp />
            </span>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Clock;
