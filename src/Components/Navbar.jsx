import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Navbar.css'
import {FaTimes,FaBars} from 'react-icons/fa';

const Navbar = () => {
    const [click,setClick]=useState(false)
    const handleClick=()=>setClick(!click)
    
  return (
    <div className='navbar'>
      <h1><Link>Bertin</Link></h1>
        <ul className={click? "navlinks":"navlinks mobile-menu"}>
            <li><Link to='/'onClick={handleClick}>Home</Link></li>
            <li><Link>About</Link></li>
            <li><Link>Contact</Link></li>
            <li><Link>Services</Link></li>
        </ul>
      <div className='hamburger-menu' onClick={handleClick}>
        {click? (<FaTimes color='#fff' size={20}/>): (<FaBars color='#fff' size={20}/>)}
      </div>
    </div>
  )
}

export default Navbar
