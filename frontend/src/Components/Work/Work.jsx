import React from 'react'
import './Work.css'

const Work = () => {
  return (
    <div className='work-form'>
      <h1>Start Working With Remote Hub</h1>
      <p>Join our waitlist and be among the first to access top job opportunities tailored to your skill and goals.</p>
      <div className="form">
        <h2>Application Form</h2>
        <p>Welcome to Remote WorkHub!</p>
        <fieldset>
          <legend>Profile information</legend>
          <label>Full Name:</label>
          <input type='text' id='fullname' name='fullname' required></input>

          <label>Email:</label>
          <input type='email' id='email' name='email' required></input>

          <label>Address:</label>
          <textarea id='address' name='address' rows={3} placeholder='Enter your full address'></textarea>

          <label>Date of Birth:</label>
          <input type='date' id='dob' name='dob' required></input>

          <label>Tel:</label>
          <input type='tel' id='phone' name='phone' placeholder='+1 234 567 8901' pattern='^\+\d{1,3}\s?\d{4,14}$'required></input>

          <label>Sex</label>
          <select id='sex'>
            <option value="">Gender</option>
            <option value="">Male</option>
            <option value="">Female</option>
            <option value="">Non-binary</option>
            <option value="">Prefer not to say</option>
          </select>

          <label>Country:</label>
          <select id='country' name='country'>
            <option value="">Select a Country</option>
            <option value="">Ghana</option>
            <option value="">United Kingdom</option>
            <option value="">United State</option>
            <option value="">Nigeria</option>
            <option value="">Australia</option>
            <option value="">India</option>
            <option value="">South Africa</option>
            <option value="">Philippine</option>
            <option value="">Canada</option>
          </select>
        </fieldset>

        <fieldset>
          <label>Highest Qualification:</label>
          <select id='high-level'>
            <option value="">Select Qualification</option>
            <option value="">High School Diploma</option>
            <option value="">Associate's Degree</option>
            <option value="">Bachelor's Degree</option>
            <option value="">Master's Degree</option>
            <option value="">Doctor's (Ph.D.)</option>
            <option value="">Other</option>
          </select>
          <label>Institution:</label>
          <input type='text' id='institution' name='institution'></input>
        </fieldset>

        <fieldset>
          <legend>Work Experience</legend>
          <label>Describe Your Work Experience</label>
          <textarea id='experience' name='experience' rows={8} cols={50}></textarea>
        </fieldset>

        <fieldset>
          <legend>Resume</legend>
          <label>Upload Your Resume (PDF Only)</label>
          <input type='file' id='resume' name='resume' accept='.pdf' required></input>
        </fieldset>

        <fieldset>
          <legend>Additional Infomation</legend>
          <label>Cover Letter:</label>
          <textarea id='coverletter' name='coverletter' rows={8} cols={100}></textarea>

          <label>Available Start Date:</label>
          <input type='date' id='startdate' name='startdate'></input>
        </fieldset>
        <button type='submit'>Submit</button>
      </div>
    </div>
  )
}

export default Work
