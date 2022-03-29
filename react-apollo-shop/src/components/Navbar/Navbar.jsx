import './Navbar.css';
import React, { useState } from 'react';
//* Framer Motion
import { motion } from 'framer-motion';

//* Images
import burgerMenuDark from './imgs/burger_menu_dark.png';
import burgerMenuLight from './imgs/burger_menu_light.png';
import shoppingCartDark from './imgs/shopping_cart_dark.png';
import shoppingCartLight from './imgs/shopping_cart_light.png';
import search from './imgs/search.png';

const Navbar = ({ modalOpen, toggle, theme }) => {

    

    return (
        
        /* Navbar */
        <nav className='nav-container'>
            <h4 className='logo'> Trasher 🤘 </h4>
            <img className='burger-menu'
                /* conditionally renders dark or light burger menu icon */
                src={theme === 'light' ? burgerMenuDark : burgerMenuLight}
                onClick={() => toggle()}
            />
            <input className='search-bar'
                type="text" 
                placeholder='Search'
                
            />
            <img className='search-icon'
                src={search} 
            />
            <a href='#' className='sign-in'> Sign in </a>
            <img className='shopping-cart'
                src={theme === 'light' ? shoppingCartDark : shoppingCartLight}
            />

        </nav>
        
    )

};

export default Navbar;