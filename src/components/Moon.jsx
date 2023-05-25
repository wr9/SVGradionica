const Moon = ({ timeOfDay }) => {
  if (timeOfDay !== "night" && timeOfDay !== "evening") {
    return null;
  }

  return (
    <path
      fill="#f0e67a"
      d="M29,28c0-11.917,7.486-22.112,18-26.147C43.892,0.66,40.523,0,37,0C21.561,0,9,12.561,9,28
  s12.561,28,28,28c3.523,0,6.892-0.66,10-1.853C36.486,50.112,29,39.917,29,28z"
      transform="translate(120,-60) scale(0.4)"
      transform-origin="top left"
      transform-box="fill-box"
    />
  );
};

export default Moon;
