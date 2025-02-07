import React from 'react'
import Banner from './Banner'
import TopSelling from './TopSelling'
import Recomended from './Recomended'
import News from './News'


const Home = () => {
  return (
    <div>
      <Banner/>
      <TopSelling/>
      <Recomended/>
      <News/>
    </div>
  )
}

export default Home
