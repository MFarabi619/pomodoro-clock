import React from "react";
import "./Clock.scss";

function Clock() {
  return (
    <div className="container-1">
      <p className="time-remaining">Time Remaining:</p>
      <p className="time">15:46</p>

      <div className="container-2">
        <section className="break-container">
          <p id="break-label">Break Length</p>
        </section>

        <section className="session-container">
          <p id="session-label">Session Length</p>
        </section>
      </div>
    </div>
  );
}

export default Clock;
