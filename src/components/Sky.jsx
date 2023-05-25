const Sky = ({ timeOfDay }) => {
  const getColor = () => {
    if (timeOfDay === "evening") {
      return "#020e78";
    } else if (timeOfDay === "night") {
      return "#02083d";
    } else if (timeOfDay === "morning") {
      return "#517ce0";
    } else if (timeOfDay === "afternoon") {
      return "#225be0";
    }
  };

  return <rect x="-40" y="-80" width={280} height={180} fill={getColor()} />;
};

export default Sky;
