import React from 'react'
import PatwaNavbar from '../Components/PatwaNavbar'
import PatwaNavbar2 from '../Components/PatwaNavbar2'
import CarouselComponent from '../Components/CarouselComponent'
import HomeHero1 from '../Components/HomeHero1'
import HomeHero2 from '../Components/HomeHero2'
import HomeGiftPromotion from '../Components/HomeGiftPromotion'
import HomeViewAll from '../Components/HomeViewAll'
function Home() {
  return (
    <div>
  
    <CarouselComponent/>
    <HomeHero1/>
    <HomeHero2/>
    <HomeGiftPromotion/>
    <HomeViewAll/>
    </div>
  )
}

export default Home
