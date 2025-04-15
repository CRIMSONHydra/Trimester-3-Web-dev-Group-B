import React, { useState, useCallback, useEffect } from "react";
import Child from "./components/Child";
import Ref from "./components/Ref";

function App() {
  return (
    <div>
      {/* <Child buttonName='Click this Button'/> */}
      <Ref />
    </div>
  );
}

export default App;
