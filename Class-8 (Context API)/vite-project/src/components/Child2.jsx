import React from 'react'


function Child2({rules , tickets}) {
   
  return (
    <div className='children'>
        <h3>Child2 {rules} </h3>
        <h3>Ride Started {tickets()}</h3>
    </div>
  )
}

export default Child2