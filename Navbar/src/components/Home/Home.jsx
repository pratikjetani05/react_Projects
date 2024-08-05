import React from 'react'
import Card from '../../../../card/src/components/Card'
import CardData from '../../../../card/src/components/CardData'

const Home = () => {
  return (
    <>
      <div className='w-[80%] text-center m-[10%] '>
      <Card details={CardData} />
    </div>
    </>
  )
}

export default Home
