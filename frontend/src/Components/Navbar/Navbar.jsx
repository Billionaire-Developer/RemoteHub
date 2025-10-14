import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  
  
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() =>{
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
  
    
  },[]);
  return (
    <div className={`navbar ${sticky? 'dark-nav' : ''}`}>
      <div className="nav-logo">
        <img src="" alt="" />
        <Link style={{textDecoration: 'none'}} to='/'><p>Remote WorkHub</p></Link>
      </div>

      <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
        <li><Link style={{textDecoration: 'none'}} to='/Companies' onClick={() => setMenuOpen(false)}>For Companies</Link></li>
        <li><Link style={{textDecoration: 'none'}} to='/for-candidates' onClick={() => setMenuOpen(false)}>For Candidates</Link></li>
        <li><Link style={{textDecoration: 'none'}} to='/Careers' onClick={() => setMenuOpen(false)}>Careers</Link></li>
        <li><Link style={{textDecoration: 'none'}} to='Blog' onClick={() => setMenuOpen(false)}>Blog</Link></li>
        <li><Link style={{textDecoration: 'none'}} to='/Pricing' onClick={() => setMenuOpen(false)}>Pricing</Link></li>
        <li><Link style={{textDecoration: 'none'}} to='/Impacts' onClick={() => setMenuOpen(false)}>Our Impacts</Link></li>
      </ul>

      <div className="nav-hire">
        <Link to='/Hiring'><button>Start Hiring</button></Link>
      </div>
      <div className='hamburger' onClick={() => setMenuOpen(!menuOpen)}>
        <GiHamburgerMenu />
      </div>
    </div>
  )
}

export default Navbar
