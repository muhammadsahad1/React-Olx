import React from 'react'

import Header from '../components/Header/Header'
import Banner from '../components/Banner/Banner'
import Posts from '../components/posts/Post'
import Footer from '../components/footer/Footer'

const Homepage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Posts />
      <Footer />
    </div>
  )
}

export default Homepage
