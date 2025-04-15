import React, { useContext } from 'react'
import { ParkContext } from './ParkContext'
ParkContext


function Child1() {
   const data = useContext(ParkContext)
  return (
    <div className='children'>
        <h3>Child1 {data.rollerCoaster} </h3>
     
    </div>
  )
}

export default Child1