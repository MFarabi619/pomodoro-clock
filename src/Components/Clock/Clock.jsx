import React from "react";
import "./Clock.scss";

function Clock() {
  return (
    <div className="Container">
      <section className="break">
        <p className="break-label">Break Length</p>
      </section>

      <section className="session">
        <p className="session-label">Session Length</p>
      </section>
    </div>
  );
}

export default Clock;
