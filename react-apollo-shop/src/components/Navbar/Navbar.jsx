import './Navbar.css';
import React, { useState } from 'react';
//* Framer Motion
import { motion } from 'framer-motion';

//* Images
import burgerMenu from './imgs/burger_menu.png';
import shoppingCart from './imgs/shopping_cart.png'
import search from './imgs/search.png';

const Navbar = ({ modalOpen, toggle }) => {

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
                duration: 0.5,
            }
        },
        exit: {
            y: '10vh',
            transition: {
                duration: 0.5,
            }
        }
    };

    return (
        
        /* Navbar */
        <nav className='nav-container'>
            <h4 className='logo'> Trasher 🤘 </h4>
            <img className='burger-menu'
                src={burgerMenu}
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
                src={shoppingCart} 
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