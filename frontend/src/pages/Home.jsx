import React from 'react'
import Hero from '../components/Hero'
import HomeBrands from '../components/HomeBrands'

const Home = () => {
  return (
    <div className='flex flex-col w-full sm:w-[90%] mx-auto'>
      <Hero />
      <HomeBrands />
    </div>
  )
}

export default Home
