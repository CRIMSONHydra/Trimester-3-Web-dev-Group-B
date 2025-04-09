import React, { useState , useCallback, useEffect} from "react";
import Child from "./components/Child";


function App() {
  const [count, setCount] = useState(0);


  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h3>count:{count} </h3>

      <Child buttonName='Click this Button'/>
    </div>
  );
}

export default App;