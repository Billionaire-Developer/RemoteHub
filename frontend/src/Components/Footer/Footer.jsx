import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTwitter, faYoutube, faLinkedin, faInstagram} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link style={{textDecoration: 'none'}}to ='/Blog'>Blog</Link></li>
              <li><Link style={{textDecoration: 'none'}}to ='/Pricing'>Pricing</Link></li>
              <li><Link style={{textDecoration: 'none'}}to ='/Career'>Career</Link></li>
              <li><Link style={{textDecoration: 'none'}}to ='/Imapcts'>Impacts</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>get help</h4>
            <ul>
              <li><Link style={{textDecoration: 'none'}}to ='/Imapcts'>FAQs</Link></li>
              <li><Link style={{textDecoration: 'none'}}to ='/Imapcts'>Privacy Policy</Link></li>
              <li><Link style={{textDecoration: 'none'}}to ='/Imapcts'>Impacts</Link></li>
              <li><Link style={{textDecoration: 'none'}}to ='/Imapcts'>Impacts</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Career</h4>
            <ul>
              <li><Link style={{textDecoration: 'none'}}to ='/Imapcts'>Impacts</Link></li>
              <li><Link style={{textDecoration: 'none'}}to ='/Imapcts'>Impacts</Link></li>
              <li><Link style={{textDecoration: 'none'}}to ='/Imapcts'>Impacts</Link></li>
              <li><Link style={{textDecoration: 'none'}}to ='/Imapcts'>Impacts</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>follow us</h4>
            <div className='social-links'>
              <li> <a href="https://twitter.com/yourProfile" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a></li>
              <li><a href="https://youtube.com/yourChannel" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube} /></a></li>
              <li><a href="https://linkedin.com/in/yourProfile" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a></li>
              <li><a href="https://instagram.com/yourProfile" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a></li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer
