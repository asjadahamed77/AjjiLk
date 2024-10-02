import React from 'react'
import Hero from '../components/Hero'
import HomeBrands from '../components/HomeBrands'
import HomeiPhones from '../components/HomeiPhones'
import HomeSamsung from '../components/HomeSamsung'

const Home = () => {
  return (
    <div className='flex flex-col w-full sm:w-[90%] mx-auto'>
      <Hero />
      <HomeBrands />
      <HomeiPhones />
      <HomeSamsung />
    </div>
  )
}

export default Home
