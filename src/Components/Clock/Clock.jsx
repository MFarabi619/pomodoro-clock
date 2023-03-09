import React from "react";
import { useState, useEffect } from "react";
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
  let [onBreak, setOnBreak] = useState(false);
  let [running, setRunning] = useState(false);
  const [breakAudio, setBreakAudio] = useState(new Audio('/src/assets/Beep Sound Effect.mp3'));

  
  
  const formatTime = (time) => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    return (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);
  }
  
  const handleClick = (string) => { 
    if (!running) { 
      if (string === "start_stop") {
        setRunning(running=true);
        controlTime();
      }
      else if (string === "session-increment") {
        setSessionNum(sessionNum + 1);
        setTimer((sessionNum + 1) * 60);
      } else if (string === "session-decrement") {
        setSessionNum(Math.max(sessionNum - 1, 1));
        setTimer(Math.max((sessionNum - 1) * 60, 1*60));
      }
    }

    if (string === "pause") {
      setRunning(running = false);
      controlTime();
    }
    else if(string==="reset"){
      setRunning(running = false);
      setSessionNum(25);
      setBreakNum(5);
      setTimer(25 * 60);
      controlTime();
    } 
  }
  
  const controlTime = () => {
    let second = 1000;
    let date = new Date().getTime();
    let nextDate = new Date().getTime() + second;
    if (running) {
      let interval = setInterval(() => {
        date = new Date().getTime();
        if (date > nextDate) {
          setTimer((prev) => {
            if (prev <= 0) {
              if (!onBreak) {
                  playBreakSound();
                  return breakNum;
              }
              else { 
                playBreakSound();
                return sessionNum;
              }
            }
            return prev - 1;
          });
          nextDate += second;
        }
      }, 30);
      
      localStorage.clear();
      localStorage.setItem('interval-id', interval);
    }
    else {
      clearInterval(localStorage.getItem('interval-id'));
    }
  };
  
  const playBreakSound = () => { 
    breakAudio.currentTime = 0; 
    breakAudio.play();
  }
  
  useEffect(() => {
    if (timer == 0) {
    setTimeout(() => { 
        setOnBreak(onBreak = !onBreak);
      }, 1000);
    }
  }, [timer]);
  

  return (
    <div className="container-1">
      <p id="timer-label"
      style={{ userSelect: "none" }}
      >{onBreak ? "Break" : "Time"} remaining:</p>
      <p id="time-left"
      style={{ userSelect: "none" }}
      >{formatTime(timer)}</p>

      <div className="container-2">
        <section className="break-container">
          <p id="break-label"
            style={{ userSelect: "none" }}
          >Break Length</p>
          <div className="container-3">
            <span
              className="btn"
              id="break-decrement"
              onClick={() => setBreakNum(Math.max(breakNum - 1, 1))}
            >
              <FaArrowDown />
            </span>
            <span id="break-length"
            
            style={{ userSelect: "none" }}
            > {breakNum} </span>
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
            onClick={() => {
              handleClick("start_stop")
            }}
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
          <p id="session-label"
            style={{ userSelect: "none" }}
          
          >Session Length</p>
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
            <span id="session-length"
            
            style={{ userSelect: "none" }}
            > {sessionNum} </span>
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
