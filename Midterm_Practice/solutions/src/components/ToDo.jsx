import React, { useState } from 'react'


function ToDo() {

  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  function addTask() {
    if(input.trim === "") return;
    setTasks([...tasks, input]);
    setInput("");
  }

  function deleteTask(id) {
    setTasks(tasks.filter((_, index) => {
      return index != id;
    }))
  }

  return (
    <div>
      <input type="text" placeholder="Enter task" onChange={e => setInput(e.target.value)} value={input}/>
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task, id) => (
          <li key={id} onClick={() => deleteTask(id)}>{task}</li>
        ))}
      </ul>
    </div>
  )
}

export default ToDo