import React, { useEffect, useState } from 'react'

function Stopwatch() {

  const [time, setTime] = useState(0);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if(!active) return;

    const timer = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [active]);

  return (
    <div>
      <p>Time: {time}s</p>
      <button onClick={() =>setActive(true)}>Start</button>
      <button onClick={() => setActive(false)}>Stop</button>
      <button onClick={() => {setTime(0), setActive(false);}}>Reset</button>
    </div>
  )
}

export default Stopwatch