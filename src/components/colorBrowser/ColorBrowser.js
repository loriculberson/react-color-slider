import React, { useState } from "react";
import ColorSlider from "../colorSlider/ColorSlider";
import ColorOutput from "../colorOutput/ColorOutput"

export default function ColorBrowser() {
  const [colors, setColors] = useState({
    red: 55,
    green: 150,
    blue: 25,
  });
  //allow the child to tell the parent what it's value is
  function updateColor(name, value){
    setColors({...colors, [name]: value})
  }

  return (
    <div>
      <h1>Color Browser</h1>
      <ColorSlider name={"red"} value={colors.red} updateColor={updateColor}/>
      <ColorSlider name={"green"} value={colors.green} updateColor={updateColor}/>
      <ColorSlider name={"blue"} value={colors.blue} updateColor={updateColor}/>
      <ColorOutput red={colors.red} green={colors.green} blue={colors.blue}/>
    </div>
  );
}