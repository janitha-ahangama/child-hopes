import React, { useEffect } from 'react'
import DashBoard from '../components/dashboard'
import Content from '../components/content'
import Feed from '../components/feed'
import Footer from '../components/footer'
import Footer_bottom from '../components/footer_bottom'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1300, // Adjust the duration (animation speed) here
    });
    
  }, [])

  return (
    <div>
      <DashBoard />
      <div data-aos="fade-left">
        <Content />
      </div>
      <div data-aos="fade-right">
        <Feed />
      </div>
      <Footer />
      <Footer_bottom />
    </div>
  )
}

export default Home