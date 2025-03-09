import React, { useState } from 'react'

function ShowHideText() {

  const [visibility, setVisibility] = useState(true);

  return (
    <div>
      <button onClick={() => setVisibility(!visibility)}>Toggle</button>
      <p style={{display: ((visibility) ? "block" : "none")}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis expedita adipisci ullam in laborum, ducimus odio corrupti tempore dignissimos esse est consequatur commodi? Quos, itaque nisi illo ad eius maiores.</p>
    </div>
  )
}

export default ShowHideText