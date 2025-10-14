import React from 'react'
import './Intro.css'
import CS from '../Asset/Cs.png'

const Intro = () => {
  return (
    <div className='intro'>
      <div className='intro-content'>
        <h1>WHY REMOTE WORKHUB?</h1>
        <p>Enables organizations to access a broader talent pool, reduce overhead costs, and improve employee satisfaction.</p>
        <button>Check now</button>
      </div>
      <div className="intro-left">
        <img src={CS} alt='remote_workhub' width={290}/>
      </div>
    </div>
  )
}

export default Intro
