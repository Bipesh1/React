import React, { useState,useEffect } from 'react'
import Navigation from './navigation'
import Makeapp from './Makeapp'
import FeaturedOffers from './FeaturedOffers';
import AOS from 'aos';
import 'aos/dist/aos.css'
import Portfolios from './Portfolios';






const imageList = [
  'url("/images/bg.jpg")',
  'url("/images/bg1.jpg")',
  'url("/images/bg2.jpg")',
];


function App() {
  //animation for text
  useEffect(()=>{
    AOS.init({duration:2000})
},[])
//change image continuously
  var [currentImageIndex,setImageIndex]=useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex(currentImageIndex => (currentImageIndex + 1)%imageList.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
    
  return (
    <div>
       <div className='bg-img' style={{backgroundImage:imageList[currentImageIndex]}}>
        <div className="title">
          <h2 data-aos="fade-in">FASHION & STYLES</h2>
          <p  data-aos="fade-in" >BESTANB Hair Salon, established in 1999, is an oasis of beauty, hair
          indulgence, and the synonym of stylish haircuts.</p>
        </div>
        <Navigation/>
        <Makeapp/>
       
       </div>

    <FeaturedOffers/>
    <Portfolios/>
     </div>
  )
}

export default App
