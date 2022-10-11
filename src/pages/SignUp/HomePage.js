import React from 'react'
import Nav from '../../components/Nav/Nav';
import Hero from '../../components/Hero/Hero';
import Card from '../../components/Card/Card';
import Subscription from '../../components/Subscription/Subscription';
import Review from '../../components/Review/Review';
import Activities from '../../components/Activities/Activities';
import Footer from '../../components/Footer/Footer';

const HomePage = () => {
  return (
    <div>
        <Nav />
        <Hero />
        <Card />
        <Subscription />
        <Review />
        <Activities />
        <Footer />
    </div>
  )
}

export default HomePage;