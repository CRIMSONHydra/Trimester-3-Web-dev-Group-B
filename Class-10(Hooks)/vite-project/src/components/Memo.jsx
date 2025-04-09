import React, { useEffect, useMemo, useState } from "react";

function Memo() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  let doubleValue2=0;
  
  function doubleValue(num) {
    console.log(`Running for the num ${num}`);
    for (let i = 0; i < 1000000000; i++) {}
    return num * 2;
  }

//    const doubledValue = doubleValue(number);// 2

//  const doubledValue = useMemo(()=>doubleValue(number), [number])

useEffect(()=>{
    doubleValue2 = doubleValue(number)
} , [number])

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h3>count:{count} </h3>

      <input
        placeholder="Enter Number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      ></input>

      <h3>Doubled Value : {doubleValue2}</h3>
    </div>
  );
}

export default Memo;
