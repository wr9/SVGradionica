import { useState } from "react";

import Sky from "src/components/Sky";
import BuildingsSilhouette from "src/components/BuildingsSilhouette";
import Windows from "src/components/Windows";
import Sun from "src/components/Sun";
import NeonSign from "src/components/NeonSign";
import Moon from "src/components/Moon";
import Stars from "src/components/Stars";

export default function Home() {
  const [timeOfDay, setTimeOfDay] = useState("morning");
  const [previousTimeOfDay, setPreviousTimeOfDay] = useState("");

  const setMorning = () => {
    setPreviousTimeOfDay(timeOfDay);
    setTimeOfDay("morning");
  };

  const setAfternoon = () => {
    setPreviousTimeOfDay(timeOfDay);
    setTimeOfDay("afternoon");
  };

  const setEvening = () => {
    setPreviousTimeOfDay(timeOfDay);
    setTimeOfDay("evening");
  };

  const setNight = () => {
    setPreviousTimeOfDay(timeOfDay);
    setTimeOfDay("night");
  };

  return (
    <div>
      <svg
        viewBox="-100 -100 400 200"
        width="2400"
        height="1200"
        stroke="none"
        fill="black"
      >
        <Sky timeOfDay={timeOfDay} />
        <BuildingsSilhouette timeOfDay={timeOfDay} />
        <Windows timeOfDay={timeOfDay} previousTimeOfDay={previousTimeOfDay} />
        <Sun timeOfDay={timeOfDay} previousTimeOfDay={previousTimeOfDay} />
        <NeonSign timeOfDay={timeOfDay} previousTimeOfDay={previousTimeOfDay} />
        <Moon timeOfDay={timeOfDay} />
        <Stars timeOfDay={timeOfDay} />
      </svg>
      <div>
        <button onClick={setMorning}>Morning</button>
        <button onClick={setAfternoon}>Afternoon</button>
        <button onClick={setEvening}>Evening</button>
        <button onClick={setNight}>Night</button>
      </div>
    </div>
  );
}
