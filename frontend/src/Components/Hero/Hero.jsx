import React from 'react'
import './Hero.css'
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>Hire Top Remote Talent. Work From Anywhere!</h2>
        <p>The all-in-one platform for learning, finding, hiring and working remotely. <br></br>
        Whether you're building a global team or looking for your next remote job, remote workhub <br></br>connects you with the people and tools you need - no matter where you are.</p>
        <Link to='/Hiring'><button className='post'>Post a Job</button></Link>
        <Link to='/Work'><button className='work'>Start Working</button></Link>
      </div>
    </div>
  );
}

export default Hero
