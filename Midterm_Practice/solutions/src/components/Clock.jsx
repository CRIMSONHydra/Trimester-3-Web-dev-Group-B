import React, { useEffect, useState } from 'react'

function Clock() {

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(()=>setTime(new Date()), 100);

    return () => clearInterval(timer);
  }, [])

  return (
    <div>
      <p>{time.toLocaleTimeString()}</p>
      <p>{time.toLocaleDateString()}</p>
      <p>{time.toString()}</p>
    </div>
  )
}

export default Clock