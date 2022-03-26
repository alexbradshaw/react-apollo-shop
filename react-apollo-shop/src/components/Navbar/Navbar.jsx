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

    /* Nav Categories */
    const navVariants = {
        hidden: {
            y: '100vh',
            opacity: 0
        },
        visible: {
            y: '10vh',
            opacity: 1,
            transition: {
                duration: 0,
            }
        },
        exit: {
            y: '10vh',
            transition: {
                duration: 0,
            }
        }
    };

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

            {/* If modalOpen state is true modal open | else if state is false modal hidden */}
            {modalOpen && (
                
                /* opaque background to target click event to toggle state to false & hide modal */
                <div className='backdrop'>
                
                    <motion.section 
                        className='navbar-categories'
                        variants={ navVariants }
                        initial='hidden'
                        animate='visible'
                        exit='exit'
                    >
                        <h2> Browse Categories </h2>
                        <p className='close' onClick={() => toggle()}> X </p>
                    </motion.section>
                </div>
                )}
        </nav>
        
    )

};

export default Navbar;