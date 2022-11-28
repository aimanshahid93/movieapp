import React from 'react';


export function ColorBox({ color }) {
  const styles = {
    height: "10px",
    width: "500px",
    gap: "5px",
    background: color,
  };
  return (
    <div style={styles}>
    </div>
  );
}
