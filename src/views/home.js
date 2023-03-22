import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Human Interactions Executive</title>
        <meta property="og:title" content="Human Interactions Executive" />
      </Helmet>
    </div>
  )
}

export default Home
