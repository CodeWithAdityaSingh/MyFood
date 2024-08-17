import React from 'react'
import MiddleBodyHeader from './MiddleBodyHeader'
import Buttons from './Buttons'
import CardsContainer from './CardsContainer'


const MiddleBody = () => {
  return (
    <div className='p-4  w-11/12'>
      <MiddleBodyHeader/>
      <Buttons/>
     <CardsContainer/>
    </div>
  )
}

export default MiddleBody
