import React from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

// Child 1 - rollerCoatster - Rules and Tickets
// Child 2 - merryGoRound - Rules and Tickets


function Parent1({parkInformation}) {


  return (
    <>
    <div className='parent'>Parent1 {parkInformation.parkName}</div>
       <Child1 rules={parkInformation.rollerCoaster} tickets={parkInformation.ticketForRollerCoaster}  />
       <Child2 rules={parkInformation.merryGoRound} tickets={parkInformation.ticketForMerryGoRound}   />
    </>
  )
}

export default Parent1