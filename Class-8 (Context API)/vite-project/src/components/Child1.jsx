import React from 'react'


function Child1({rules , tickets}) {
   
  return (
    <div className='children'>
        <h3>Child1 {rules} </h3>
        <h3>Ride Started {tickets()}</h3>
    </div>
  )
}

export default Child1