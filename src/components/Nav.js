import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Nav.css"
import { FaBars } from "react-icons/fa";
import Logo from "../assets/images/Logo.png"



const Nav = () => {

    const [fixNavBar, setFixNavBar] = useState('nav')

    const activeNavBar = () => {
        window.scrollY > 0 ? setFixNavBar('nav active') : setFixNavBar('nav')
    }

    window.addEventListener('scroll', activeNavBar)


    return (
       <nav className={fixNavBar}>
           <div className='logo'>
             LOGO
           </div>
           <ul className='menu'>
               <li><Link to="/">Home</Link></li>
               <li><Link to="/about">About</Link></li>
               <li><Link to="/contact">Contact</Link></li>
           </ul>

           <div className='menu-btn'>
               <FaBars/>
           </div>

       </nav>
    )
}

export default Nav