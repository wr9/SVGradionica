const Star = ({ timeOfDay }) => {
  if (timeOfDay !== "night" && timeOfDay !== "evening") {
    return null;
  }

  return (
    <g fill="#f0e67a">
      <polygon
        points="6.603,6.62 4.08,5.32 2.073,7.326 2.528,4.525 0,3.236 2.805,2.803 3.249,0 4.527,2.534 7.327,2.09 5.312,4.089"
        style={{ transform: "translate(50px, -10px)" }}
      />
      <polygon
        points="6.603,6.62 4.08,5.32 2.073,7.326 2.528,4.525 0,3.236 2.805,2.803 3.249,0 4.527,2.534 7.327,2.09 5.312,4.089"
        style={{ transform: "translate(100px, 10px)" }}
      />
      <polygon
        points="6.603,6.62 4.08,5.32 2.073,7.326 2.528,4.525 0,3.236 2.805,2.803 3.249,0 4.527,2.534 7.327,2.09 5.312,4.089"
        style={{ transform: "translate(150px, -30px)" }}
      />
      <polygon
        points="6.603,6.62 4.08,5.32 2.073,7.326 2.528,4.525 0,3.236 2.805,2.803 3.249,0 4.527,2.534 7.327,2.09 5.312,4.089"
        style={{ transform: "translate(90px, -20px)" }}
      />
      <polygon
        points="6.603,6.62 4.08,5.32 2.073,7.326 2.528,4.525 0,3.236 2.805,2.803 3.249,0 4.527,2.534 7.327,2.09 5.312,4.089"
        style={{ transform: "translate(30px, -30px)" }}
      />
    </g>
  );
};

export default Star;
