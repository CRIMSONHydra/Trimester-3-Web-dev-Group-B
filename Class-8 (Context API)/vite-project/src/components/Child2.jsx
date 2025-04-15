import React, { useContext } from 'react'
import { ParkContext } from './ParkContext'





function Child2() {

    const data = useContext(ParkContext)
    console.log(data)
   
  return (
    <div className='children'>
        <h3>Child2 {data.merryGoRound} </h3>
   
    </div>
  )
}

export default Child2