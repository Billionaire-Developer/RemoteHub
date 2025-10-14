import React from 'react'
import './Carousel.css'
import person1 from '../Asset/Phil.jpg'
import person2 from '../Asset/logo.jpg'
import person3 from '../Asset/Integration (2).jpg'
import person4 from '../Asset/pexels-tima-miroshnichenko-5685952.jpg'
import person5 from '../Asset/Research.jpg'

const Carousel = () => {
  return (
    <div className='carousel'>
        <h2>Trusted By</h2>
      <div className="carousel-content">
        <img src={person1} alt='Phil'></img>
        <img src={person2} alt=''></img>
        <img src={person3} alt=''></img>
        <img src={person4} alt=''></img>
        <img src={person5} alt=''></img>
        <img src={person2} alt=''></img>
        <img src={person3} alt=''></img>
        <img src={person5} alt=''></img>
        <img src={person3} alt=''></img>
        <img src={person5} alt=''></img>
        <img src={person2} alt=''></img>


        <img src={person1} alt='Phil'></img>
        <img src={person2} alt=''></img>
        <img src={person3} alt=''></img>
        <img src={person4} alt=''></img>
        <img src={person5} alt=''></img>
        <img src={person2} alt=''></img>
        <img src={person3} alt=''></img>
        <img src={person5} alt=''></img>
        <img src={person3} alt=''></img>
        <img src={person5} alt=''></img>
        <img src={person2} alt=''></img>
        
      </div>
    </div>
  )
}

export default Carousel
