import style from "./Stars.module.scss";

const starPoints =
  "6.603,6.62 4.08,5.32 2.073,7.326 2.528,4.525 0,3.236 2.805,2.803 3.249,0 4.527,2.534 7.327,2.09 5.312,4.089";
const pointyStarPoints =
  "6.603,6.62 3.981,4.018 2.073,7.326 3.481,3.618 0,3.236 3.582,3.117 3.249,0 4.1,3.05 7.327,2.09 4.378,3.5";

const Star = ({ timeOfDay }) => {
  return (
    <g fill="#f0e67a">
      <polygon
        style={{ transform: "translate(50px, -10px)", transitionDelay: "50ms" }}
        className={`${style.star} ${
          timeOfDay === "morning" || timeOfDay === "afternoon"
            ? style.invisible
            : style.visible
        }`}
      >
        <animate
          dur="5s"
          begin="-1s"
          repeatCount="indefinite"
          attributeName="points"
          values={`${starPoints};${pointyStarPoints};${starPoints};`}
        />
      </polygon>
      <polygon
        style={{ transform: "translate(100px, 10px)" }}
        className={`${style.star} ${
          timeOfDay === "morning" || timeOfDay === "afternoon"
            ? style.invisible
            : style.visible
        }`}
      >
        <animate
          dur="5s"
          repeatCount="indefinite"
          attributeName="points"
          values={`${starPoints};${pointyStarPoints};${starPoints};`}
        />
      </polygon>
      <polygon
        style={{
          transform: "translate(150px, -30px)",
          transitionDelay: "-50ms",
        }}
        className={`${style.star} ${
          timeOfDay === "morning" || timeOfDay === "afternoon"
            ? style.invisible
            : style.visible
        }`}
      >
        <animate
          dur="5s"
          begin="-3s"
          repeatCount="indefinite"
          attributeName="points"
          values={`${starPoints};${pointyStarPoints};${starPoints};`}
        />
      </polygon>
      <polygon
        style={{ transform: "translate(90px, -20px)" }}
        className={`${style.star} ${
          timeOfDay === "morning" || timeOfDay === "afternoon"
            ? style.invisible
            : style.visible
        }`}
      >
        <animate
          dur="5s"
          begin="-2s"
          repeatCount="indefinite"
          attributeName="points"
          values={`${starPoints};${pointyStarPoints};${starPoints};`}
        />
      </polygon>
      <polygon
        style={{ transform: "translate(30px, -30px)" }}
        className={`${style.star} ${
          timeOfDay === "morning" || timeOfDay === "afternoon"
            ? style.invisible
            : style.visible
        }`}
      >
        <animate
          dur="5s"
          begin="-2s"
          repeatCount="indefinite"
          attributeName="points"
          values={`${starPoints};${pointyStarPoints};${starPoints};`}
        />
      </polygon>
    </g>
  );
};

export default Star;
