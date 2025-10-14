import React from 'react'
import './price.css'

const Price = () => {
  return (
    <div className='price'>
      <div className="price-list">
        <h1 className='tier1'>TIER 1 POSITION</h1>
        <p className='price-amt1'><span>$10</span> <br></br>Per team member per hour</p>
        <button className='btn1'>Get started</button><hr></hr>
        <div className='price-content'>
          <h4>Common position</h4>
          <p>Data Entry</p>
          <p>Call center associate</p>
          <p>Customer service rep</p>
          <p>Social Media Manager</p>
          <p>Live chat/email support</p>
          <p>Back office/admin task</p>
        </div>
      </div>

       <div className="price-list">
        <h1 className='tier2'>TIER 2 POSITION</h1>
        <p className='price-amt2'><span>$12.5</span> <br></br>Per team member per hour</p>
        <button className='btn2'>Get started</button><hr></hr>
        <div className="price-content">
          <h4>Common position</h4>
          <p>TierII Data Entry</p>
          <p>Bookkeepers/Billers</p>
          <p>Technical support rep</p>
          <p>Sales development rep</p>
          <p>TierII Customer service</p>
          <p>Medical billing/coding</p>
        </div>
      </div>

       <div className="price-list">
        <h1 className='tier3'>TIER 3 POSITION</h1>
        <p className='price-amt3'><span>$15</span> <br></br>Per team member per hour</p>
        <button className='btn3'>Get started</button><hr></hr>
        <div className="price-content">
          <h4>Common position</h4>
          <p>Translator</p>
          <p>Project Manager</p>
          <p>Data/Research Analyst</p>
          <p>Software developer</p>
          <p>TierII technical support</p>
          <p>TierIII customer service</p>
        </div>
      </div>
    </div>
  )
}

export default Price
