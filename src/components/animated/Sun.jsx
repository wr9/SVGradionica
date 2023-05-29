import { useRef, useEffect } from "react";

import style from "./Sun.module.scss";

const Sun = ({ timeOfDay, previousTimeOfDay }) => {
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      if (
        (timeOfDay === "afternoon" && previousTimeOfDay === "morning") ||
        (timeOfDay === "morning" && previousTimeOfDay === "afternoon")
      ) {
        ref.current.beginElement();
      }
    }
  }, [timeOfDay, ref]);

  return (
    <circle
      cx={
        timeOfDay === "afternoon" && previousTimeOfDay !== "morning"
          ? "210"
          : "0"
      }
      cy={
        timeOfDay === "afternoon" && previousTimeOfDay !== "morning"
          ? "-40"
          : "0"
      }
      r="15"
      fill="#e0b722"
      className={`${style.sun} ${
        timeOfDay === "morning" || timeOfDay === "afternoon"
          ? style.visible
          : style.invisible
      }`}
    >
      {(timeOfDay === "afternoon" || previousTimeOfDay === "afternoon") && (
        <animateMotion
          dur="800ms"
          path="M 0,0 Q 105,-80 210,-40"
          fill="freeze"
          repeatCount="1"
          begin="indefinite"
          ref={ref}
          keyPoints={timeOfDay === "morning" ? "1;0" : "0;1"}
          keyTimes="0;1"
        />
      )}
    </circle>
  );
};

export default Sun;
