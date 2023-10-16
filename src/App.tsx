import { useEffect, useState } from "react";
import "./App.css";
import { HiMiniPlayPause } from "react-icons/hi2";
import { FiRefreshCcw } from "react-icons/fi";

function App() {
 const [breakLength, setBreakLength] = useState(5);
 const [sessionLength, setSessionLength] = useState(25);
 const [sessionTime, setSessionTime] = useState(1500);
 const [isBreak, setIsBreak] = useState(false);
 const [isPlaying, setIsPlaying] = useState(false);

 function reset() {
  setBreakLength(5);
  setSessionLength(25);
  setSessionTime(1500);
  setIsBreak(false);
  setIsPlaying(false);
 }

 useEffect(() => {
  function countTime() {
   if (!isPlaying) {
    return;
   }

   if (sessionTime > 0) {
    setSessionTime((prev) => prev - 1);
    return;
   }

   if (sessionTime === 0) {
    if (isBreak) {
     setIsBreak(false);
     setSessionTime(sessionLength * 60);
     return;
    }
    setIsBreak(true);
    setSessionTime(breakLength * 60);
    return;
   }
  }

  setTimeout(countTime, 1000);
 }, [breakLength, isBreak, isPlaying, sessionLength, sessionTime]);

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
       onClick={() => {
        setBreakLength((prev) => prev - 1);
        setIsPlaying(false);
       }}
       style={{ cursor: "pointer" }}
      >
       -
      </span>
      {breakLength}
      <span
       onClick={() => {
        setBreakLength((prev) => prev + 1);
        setIsPlaying(false);
       }}
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
       onClick={() => {
        setSessionLength((prev) => prev - 1);
        setIsPlaying(false);
       }}
       style={{ cursor: "pointer" }}
      >
       -
      </span>
      {sessionLength}
      <span
       onClick={() => {
        setSessionLength((prev) => prev + 1);
        setIsPlaying(false);
       }}
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
    <h3 style={{ fontSize: 35, margin: 0, marginBottom: 15 }}>
     {Math.floor(sessionTime / 60)}:{String(sessionTime % 60).padStart(2, "0")}
    </h3>
    <div
     style={{
      display: "flex",
      gap: 15,
      alignItems: "center",
      justifyContent: "center",
     }}
    >
     <HiMiniPlayPause
      fontSize={35}
      style={{ cursor: "pointer" }}
      onClick={() => setIsPlaying((prev) => !prev)}
     />
     <FiRefreshCcw
      fontSize={35}
      style={{ cursor: "pointer" }}
      onClick={reset}
     />
    </div>
   </div>
  </div>
 );
}

export default App;
