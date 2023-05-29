import style from "./Windows.module.scss";

const Windows = ({ timeOfDay, previousTimeOfDay }) => {
  const getColor = () => {
    if (timeOfDay === "evening") {
      return "#ebe06c";
    } else if (timeOfDay === "night") {
      return "black";
    } else if (timeOfDay === "morning" || timeOfDay === "afternoon") {
      return "white";
    }
  };

  return (
    <g stroke="none" fill={getColor()} className={style.windows}>
      <g>
        <rect x="16" y="89" width="3" height="8" />
        <rect x="23" y="89" width="3" height="8" />
        <rect x="30" y="89" width="3" height="8" />
        <rect x="37" y="89" width="3" height="8" />
        <rect x="16" y="75" width="3" height="8" />
        <rect x="23" y="75" width="3" height="8" />
        <rect x="30" y="75" width="3" height="8" />
        <rect
          x="37"
          y="75"
          width="3"
          height="8"
          style={{
            transitionDelay:
              timeOfDay === "night" && previousTimeOfDay === "evening"
                ? "500ms"
                : "0ms",
          }}
        />
        <rect x="16" y="61" width="3" height="8" />
        <rect x="23" y="61" width="3" height="8" />
        <rect x="30" y="61" width="3" height="8" />
        <rect x="37" y="61" width="3" height="8" />
        <rect x="16" y="47" width="3" height="8" />
        <rect x="23" y="47" width="3" height="8" />
        <rect x="30" y="47" width="3" height="8" />
        <rect x="37" y="47" width="3" height="8" />
        <rect x="16" y="33" width="3" height="8" />
        <rect x="23" y="33" width="3" height="8" />
        <rect x="30" y="33" width="3" height="8" />
        <rect x="37" y="33" width="3" height="8" />
        <rect x="19.5" y="21" width="3" height="6" />
        <rect x="26.5" y="21" width="3" height="6" />
        <rect x="33.5" y="21" width="3" height="6" />
      </g>
      <g>
        <rect x="53.5" y="92" width="4" height="6" />
        <rect x="59.5" y="92" width="4" height="6" />
        <rect x="65.5" y="92" width="4" height="6" />
        <rect x="71.5" y="92" width="4" height="6" />
        <rect x="77.5" y="92" width="4" height="6" />
        <rect x="83.5" y="92" width="4" height="6" />
        <rect x="89.5" y="92" width="4" height="6" />
        <rect x="53.5" y="83" width="4" height="6" />
        <rect x="59.5" y="83" width="4" height="6" />
        <rect x="65.5" y="83" width="4" height="6" />
        <rect x="71.5" y="83" width="4" height="6" />
        <rect x="77.5" y="83" width="4" height="6" />
        <rect x="83.5" y="83" width="4" height="6" />
        <rect x="89.5" y="83" width="4" height="6" />
        <rect x="53.5" y="74" width="4" height="6" />
        <rect x="59.5" y="74" width="4" height="6" />
        <rect x="65.5" y="74" width="4" height="6" />
        <rect x="71.5" y="74" width="4" height="6" />
        <rect x="77.5" y="74" width="4" height="6" />
        <rect x="83.5" y="74" width="4" height="6" />
        <rect x="89.5" y="74" width="4" height="6" />
        <rect x="53.5" y="65" width="4" height="6" />
        <rect x="59.5" y="65" width="4" height="6" />
        <rect x="65.5" y="65" width="4" height="6" />
        <rect x="71.5" y="65" width="4" height="6" />
        <rect x="77.5" y="65" width="4" height="6" />
        <rect x="83.5" y="65" width="4" height="6" />
        <rect x="89.5" y="65" width="4" height="6" />
        <rect x="53.5" y="56" width="4" height="6" />
        <rect x="59.5" y="56" width="4" height="6" />
        <rect x="65.5" y="56" width="4" height="6" />
        <rect x="71.5" y="56" width="4" height="6" />
        <rect x="77.5" y="56" width="4" height="6" />
        <rect x="83.5" y="56" width="4" height="6" />
        <rect x="89.5" y="56" width="4" height="6" />
        <rect x="53.5" y="47" width="4" height="6" />
        <rect x="59.5" y="47" width="4" height="6" />
        <rect x="65.5" y="47" width="4" height="6" />
        <rect x="71.5" y="47" width="4" height="6" />
        <rect x="77.5" y="47" width="4" height="6" />
        <rect x="83.5" y="47" width="4" height="6" />
        <rect x="89.5" y="47" width="4" height="6" />
        <rect x="57" y="35" width="3" height="6" />
        <rect x="62" y="35" width="3" height="6" />
        <rect x="67" y="35" width="3" height="6" />
        <rect x="72" y="35" width="3" height="6" />
        <rect x="77" y="35" width="3" height="6" />
        <rect x="82" y="35" width="3" height="6" />
        <rect x="87" y="35" width="3" height="6" />
        <rect x="57" y="30" width="3" height="4" />
        <rect x="62" y="30" width="3" height="4" />
        <rect
          x="67"
          y="30"
          width="3"
          height="4"
          style={{
            transitionDelay:
              timeOfDay === "night" && previousTimeOfDay === "evening"
                ? "500ms"
                : "0ms",
          }}
        />
        <rect x="72" y="30" width="3" height="4" />
        <rect x="77" y="30" width="3" height="4" />
        <rect x="82" y="30" width="3" height="4" />
        <rect x="87" y="30" width="3" height="4" />
      </g>
      <g>
        <rect x="105" y="94" width="2" height="6" />
        <rect x="110" y="94" width="2" height="6" />
        <rect x="115" y="94" width="2" height="6" />
        <rect x="120" y="94" width="2" height="6" />
        <rect x="125" y="94" width="2" height="6" />
        <rect x="130" y="94" width="2" height="6" />
        <rect x="105" y="76" width="2" height="8" />
        <rect x="110" y="76" width="2" height="8" />
        <rect x="115" y="76" width="2" height="8" />
        <rect x="120" y="76" width="2" height="8" />
        <rect x="125" y="76" width="2" height="8" />
        <rect x="130" y="76" width="2" height="8" />
        <rect x="105" y="66" width="2" height="8" />
        <rect x="110" y="66" width="2" height="8" />
        <rect x="115" y="66" width="2" height="8" />
        <rect x="120" y="66" width="2" height="8" />
        <rect x="125" y="66" width="2" height="8" />
        <rect x="130" y="66" width="2" height="8" />
      </g>
      <g>
        <rect x="143.5" y="96" width="3" height="4" />
        <rect x="148.5" y="96" width="3" height="4" />
        <rect x="153.5" y="96" width="3" height="4" />
        <rect x="143.5" y="87" width="3" height="6" />
        <rect x="148.5" y="87" width="3" height="6" />
        <rect x="153.5" y="87" width="3" height="6" />
        <rect x="143.5" y="79" width="3" height="6" />
        <rect x="148.5" y="79" width="3" height="6" />
        <rect x="153.5" y="79" width="3" height="6" />
        <rect x="143.5" y="71" width="3" height="6" />
        <rect x="148.5" y="71" width="3" height="6" />
        <rect x="153.5" y="71" width="3" height="6" />
        <rect x="146" y="62" width="3" height="5" />
        <rect x="151" y="62" width="3" height="5" />
      </g>
      <g>
        <rect x="169.5" y="70" width="3" height="5" />
        <rect x="174.5" y="70" width="3" height="5" />
        <rect x="179.5" y="70" width="3" height="5" />
        <rect x="184.5" y="70" width="3" height="5" />
        <rect x="169.5" y="62" width="3" height="5" />
        <rect x="174.5" y="62" width="3" height="5" />
        <rect x="179.5" y="62" width="3" height="5" />
        <rect x="184.5" y="62" width="3" height="5" />
        <rect x="169.5" y="54" width="3" height="5" />
        <rect x="174.5" y="54" width="3" height="5" />
        <rect x="179.5" y="54" width="3" height="5" />
        <rect x="184.5" y="54" width="3" height="5" />
        <rect x="169.5" y="46" width="3" height="5" />
        <rect x="174.5" y="46" width="3" height="5" />
        <rect x="179.5" y="46" width="3" height="5" />
        <rect x="184.5" y="46" width="3" height="5" />
        <rect x="169.5" y="38" width="3" height="5" />
        <rect x="174.5" y="38" width="3" height="5" />
        <rect x="179.5" y="38" width="3" height="5" />
        <rect x="184.5" y="38" width="3" height="5" />
        <rect x="169.5" y="30" width="3" height="5" />
        <rect x="174.5" y="30" width="3" height="5" />
        <rect x="179.5" y="30" width="3" height="5" />
        <rect x="184.5" y="30" width="3" height="5" />
        <rect x="169.5" y="22" width="3" height="5" />
        <rect x="174.5" y="22" width="3" height="5" />
        <rect x="179.5" y="22" width="3" height="5" />
        <rect x="184.5" y="22" width="3" height="5" />
        <rect x="169.5" y="14" width="3" height="5" />
        <rect x="174.5" y="14" width="3" height="5" />
        <rect x="179.5" y="14" width="3" height="5" />
        <rect x="184.5" y="14" width="3" height="5" />
        <rect x="169.5" y="6" width="3" height="5" />
        <rect x="174.5" y="6" width="3" height="5" />
        <rect x="179.5" y="6" width="3" height="5" />
        <rect
          x="184.5"
          y="6"
          width="3"
          height="5"
          style={{
            transitionDelay:
              timeOfDay === "night" && previousTimeOfDay === "evening"
                ? "1000ms"
                : "0ms",
          }}
        />
      </g>
    </g>
  );
};

export default Windows;
