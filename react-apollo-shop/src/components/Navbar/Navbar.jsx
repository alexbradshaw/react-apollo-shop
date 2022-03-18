import './Navbar.css';
import React, { useState } from 'react';
//* Framer Motion
import { AnimatePresence, motion } from 'framer-motion';

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
            y: '-100vh',
            transition: {
                duration: .5,
            }
        }
    };

    return (
        
        /* Navbar */
        <nav className='nav-container'>
            <h4 className='logo'> Trasher🤘 </h4>
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

            {/* If modalOpen state is true show modal | else if state is hide */}
            {modalOpen && (
                
                /* opaque background to target click event to toggle state to false & hide modal */
                <div className='backdrop' onClick={() => toggle()}>
                
                    <motion.section 
                        className='navbar-categories'
                        variants={ navVariants }
                        initial='hidden'
                        animate='visible'
                        exit='exit'
                    >
                        <h3> Trasher </h3>
                    </motion.section>
                </div>
                )}
        </nav>
        
    )

};

export default Navbar;