import { useEffect, useRef, useState } from "react";
import "./App.css";
import { HiMiniPlayPause } from "react-icons/hi2";
import { FiRefreshCcw } from "react-icons/fi";

function App() {
 const [breakLength, setBreakLength] = useState(5);
 const [sessionLength, setSessionLength] = useState(25);
 const [sessionTime, setSessionTime] = useState(1500);
 const [isBreak, setIsBreak] = useState(false);
 const [isPlaying, setIsPlaying] = useState(false);
 const [calculatedTime, setCalculatedTime] = useState("");

 const audio = useRef<HTMLAudioElement | null>(null);

 useEffect(() => {
  setSessionTime(() => {
   if (isBreak) {
    return breakLength * 60;
   }
   return sessionLength * 60;
  });
 }, [breakLength, isBreak, sessionLength]);

 useEffect(() => {
  setCalculatedTime(
   `${Math.floor(sessionTime / 60)}:${String(sessionTime % 60).padStart(
    2,
    "0"
   )}`
  );
 }, [sessionTime]);

 function reset() {
  setBreakLength(5);
  setSessionLength(25);
  if (audio.current) audio.current.pause();
  setSessionTime(1500);
  setIsBreak(false);
  setIsPlaying(false);
 }

 useEffect(() => {
  let timer: number | undefined;

  if (isPlaying && sessionTime > 0) {
   timer = setTimeout(() => {
    setSessionTime((prevTime) => prevTime - 1);
   }, 1000);
  } else if (sessionTime === 0) {
   if (audio.current) audio.current.play();

   if (isBreak) {
    setIsBreak(false);
    setSessionTime(sessionLength * 60);
   } else {
    setIsBreak(true);
    setSessionTime(breakLength * 60);
   }
  }

  return () => {
   clearTimeout(timer);
  };
 }, [isPlaying, sessionTime, breakLength, sessionLength, isBreak, audio]);

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
        setBreakLength((prev) => (prev > 1 ? prev - 1 : 1));
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
        setSessionLength((prev) => (prev > 1 ? prev - 1 : 1));
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
     {isBreak ? "Break" : "Session"}
    </h2>
    <h3 style={{ fontSize: 35, margin: 0, marginBottom: 15 }}>
     {calculatedTime}
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
    <audio src="./bell.mp3" ref={audio} />
   </div>
  </div>
 );
}

export default App;
