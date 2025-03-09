import React from 'react'
import { useState } from 'react';

function RandomBg() {

  const [color, setColor] = useState("#ffffff");

  function handleChange() {
    const newColor = "#" + Math.floor(Math.random() * Math.pow(16, 6)).toString(16).padStart(6, "0");
    setColor(newColor);
  }

  return (
    <div style={{ backgroundColor: color }}>
      <button onClick={handleChange}>Change Color</button>
    </div>
  )
}

export default RandomBg