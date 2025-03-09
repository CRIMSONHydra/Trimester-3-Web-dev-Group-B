import React, { useState } from 'react'
import './App.css'

import ToDo from './components/ToDo';
import AutoResetCounter from './components/AutoResetCounter';
import ShowHideText from './components/ShowHideText';
import Stopwatch from './components/Stopwatch';
import RandomBg from './components/RandomBg';
import FilterList from './components/FilterList';
import Clock from './components/Clock';

function App() {

  const [comp, setComp] = useState("");

  const mp = {
    "ToDo": ToDo,
    "Counter": AutoResetCounter,
    "SHT": ShowHideText,
    "watch": Stopwatch,
    "RandBG": RandomBg,
    "filter": FilterList,
    "clock": Clock
  }

  const ActiveComp = mp[comp];

  return (
    <>
      <div>
        <button onClick={() => setComp("ToDo")}>1 - ToDo</button>
        <button onClick={() => setComp("Counter")}>2 - Auto Reset Counter</button>
        <button onClick={() => setComp("SHT")}>5 - Show/Hide Text</button>
        <button onClick={() => setComp("watch")}>6 - Stopwatch</button>
        <button onClick={() => setComp("RandBG")}>7 - Random Background Color</button>
        <button onClick={() => setComp("filter")}>10 - Filter List</button>
        <button onClick={() => setComp("clock")}>15 - Real Time Clock</button>
      </div>
    
      {comp != "" && <ActiveComp />}
    
    </>


  )
}

export default App