import React, { useEffect, useState } from 'react'

function AutoResetCounter() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    if(count == 0) return;

    const timer = setTimeout(() => setCount(0), 5000);

    return () => clearTimeout(timer);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default AutoResetCounter