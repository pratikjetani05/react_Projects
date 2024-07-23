import React from 'react'
import Card from './Card'
import CardData from './CardData'

const Home = () => {
  return (
    <div className='w-[80%] text-center m-[10%] '>
      <Card details={CardData} />
    </div>
  )
}

export default Home
