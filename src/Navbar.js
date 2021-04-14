import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {

    return (
        <nav className='Navbar'>
        <NavLink exact to='/dogs'>Home</NavLink>
        <NavLink exact to='/dogs/whiskey'>Whiskey</NavLink>
        <NavLink exact to='/dogs/duke'>Duke</NavLink>
        <NavLink exact to='/dogs/perry'>Perry</NavLink>
        <NavLink exact to='/dogs/tubby'>Tubby</NavLink>  
        </nav>
    )

}

export default Navbar;

