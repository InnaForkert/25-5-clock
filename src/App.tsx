import { useState } from "react";
import "./App.css";
import { HiMiniPlayPause } from "react-icons/hi2";
import { FiRefreshCcw } from "react-icons/fi";

function App() {
 const [breakLength, setBreakLength] = useState(5);
 const [sessionLength, setSessionLength] = useState(25);
 const [sessionTime, setSesisonTime] = useState("25:00");
 const [isBreak, setIsBreak] = useState(false);
 const [isPlaying, setIsPlaying] = useState(false);

 return (
  <div
   style={{
    display: "flex",
    flexDirection: "column",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
   }}
  >
   <h1 style={{ margin: 0 }}>25 + 5 clock</h1>
   <div style={{ display: "flex", gap: 15, alignItems: "center" }}>
    <div style={{ fontSize: 25 }}>
     <p style={{ margin: 0, display: "flex", gap: 5, alignItems: "center" }}>
      Break length
     </p>
     <div
      style={{
       margin: 0,
       display: "flex",
       gap: 15,
       alignItems: "center",
       justifyContent: "center",
       fontSize: 45,
      }}
     >
      <span
       onClick={() => setBreakLength((prev) => prev - 1)}
       style={{ cursor: "pointer" }}
      >
       -
      </span>
      {breakLength}
      <span
       onClick={() => setBreakLength((prev) => prev + 1)}
       style={{ cursor: "pointer" }}
      >
       +
      </span>
     </div>
    </div>
    <div style={{ fontSize: 25 }}>
     <p style={{ margin: 0, display: "flex", gap: 5, alignItems: "center" }}>
      Session length
     </p>
     <div
      style={{
       margin: 0,
       display: "flex",
       gap: 15,
       alignItems: "center",
       justifyContent: "center",
       fontSize: 45,
      }}
     >
      <span
       onClick={() => setSessionLength((prev) => prev - 1)}
       style={{ cursor: "pointer" }}
      >
       -
      </span>
      {sessionLength}
      <span
       onClick={() => setSessionLength((prev) => prev + 1)}
       style={{ cursor: "pointer" }}
      >
       +
      </span>
     </div>
    </div>
   </div>
   <div>
    <h2
     style={{
      margin: 0,
      fontSize: 35,
     }}
    >
     Session
    </h2>
    <h3 style={{ fontSize: 35, margin: 0, marginBottom: 15 }}>{sessionTime}</h3>
    <div
     style={{
      display: "flex",
      gap: 15,
      alignItems: "center",
      justifyContent: "center",
     }}
    >
     <HiMiniPlayPause fontSize={35} style={{ cursor: "pointer" }} />
     <FiRefreshCcw fontSize={35} style={{ cursor: "pointer" }} />
    </div>
   </div>
  </div>
 );
}

export default App;
