import { useState } from "react";
import React from 'react';
import Button from '@mui/material/Button';
import { ColorBox } from "./ColorBox";

export function ColorGame() {
  const [color, setColor] = useState("cyan");
  const styles = {
    background: color,
  };
  const [ColorList, setColorList] = useState(["violet", "indigo", "blue", "green", "yellow", "orange", "red"]);
  return (
    <div>
      <input
        style={styles}
        onChange={(event) => setColor(event.target.value)}
        placeholder="Enter a color" />
      <Button onClick={() => setColorList([...ColorList, color])} variant="outlined">ADD COLOR</Button>
      {ColorList.map((clr) => (
        <ColorBox color={clr} />))}
    </div>
  );
}
