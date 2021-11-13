import React, { useState } from "react";

function App() {
  setInterval(currentTime, 1000);

  const [time, setTime] = useState("What's the time?");

  function currentTime() {
    setTime(new Date().toLocaleTimeString());
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={currentTime}>Get Time</button>
    </div>
  );
}

export default App;
