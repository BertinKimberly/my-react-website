import React from 'react'
import '../Styles/Footer.css';
import { Link } from 'react-router-dom';
import { FaFacebook, FaGithub, FaLinkedin, FaMailBulk } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="f-content">
        <div>
            <h2>About Us</h2>
            <p>Online education</p>
        </div>
        <div>
            <h2>Contact</h2>
            <p><FaGithub/>Github</p>
            <p><FaLinkedin/>LinkedIn</p>
            <p><FaFacebook/>Facebook</p>
            <p><FaMailBulk/>Email</p>
        </div>
        <div>
            <h2>Services</h2>
            <p>Online courses</p>
            <p>Certification</p>
            <p>Start for free</p>
            <p>Pro</p>
        </div>
        <div>
            <h2>Help</h2>
            <p>Security & privacy</p>
        </div>
      </div>
      <div className='info'><Link to='/'>Bertin</Link> <span>&copy; online learning</span></div>
    </div>
  )
}

export default Footer
