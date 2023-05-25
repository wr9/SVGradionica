const Sun = ({ timeOfDay }) => {
  if (timeOfDay === "night" || timeOfDay === "evening") {
    return null;
  }

  return (
    <circle
      cx={timeOfDay === "morning" ? "0" : "210"}
      cy={timeOfDay === "morning" ? "0" : "-40"}
      r="15"
      fill="#e0b722"
    />
  );
};

export default Sun;
