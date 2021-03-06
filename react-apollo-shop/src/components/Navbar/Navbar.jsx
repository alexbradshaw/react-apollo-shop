import './Navbar.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

//* Images
import burgerMenuDark from './imgs/burger_menu_dark.png';
import burgerMenuLight from './imgs/burger_menu_light.png';
import shoppingCartDark from './imgs/shopping_cart_dark.png';
import shoppingCartLight from './imgs/shopping_cart_light.png';
import userProfileDark from './imgs/user_profile_dark.png';
import userProfileLight from './imgs/user_profile_light.png';
import searchLight from './imgs/search_light.png';
import searchDark from './imgs/search_dark.png';

//* Components
import ModalDropDown from '../ModalDropDown/ModalDropDown';
//import { AnimatePresence } from 'framer-motion';

const Navbar = ({ theme, setShowCategories, setShowSignIn, setShowCart }) => {


    const [ loggedIn, setLoggedIn ] = useState(true);

    const [ showDropDown, setShowDropDown ] = useState(false);

    const handleIcons = (dark, light) => {
        return theme === 'light' ? dark : light;
    };

    const handleDropDown = () => {
        return showDropDown ? setShowDropDown(false) : setShowDropDown(true); 
    };

    return (
        
        /* Navbar */
        <nav className='nav-container'>
            <h4 className='logo'> <Link to={'/'}> Trasher 🤘 </Link> </h4>
            <img 
                className='burger-menu'
                /* conditionally renders dark or light burger menu icon */
                src={handleIcons(burgerMenuDark, burgerMenuLight)}
                alt='Navigation bar menu icon'
                onClick={() => setShowCategories(true)}
            />
            <input className='search-bar'
                type="text" 
                placeholder='Search'
                
            />
            <img 
                className='search-icon'
                src={handleIcons(searchDark, searchLight)}
                alt='Search icon'
            />

            { loggedIn ? (
                <img
                    className='user-profile'
                    src={handleIcons(userProfileDark, userProfileLight)}
                    alt='User profile icon'
                    onClick={handleDropDown}
                />
            ) : (
                <a href='#sign-in' 
                    className='sign-in'
                    onClick={() => setShowSignIn(true)}
                    > 
                    Sign in 
                </a>
            )}
            <img 
                className='shopping-cart'
                onClick={() => setShowCart(true)}
                /* conditionally renders dark or light cart icon */
                src={handleIcons(shoppingCartDark, shoppingCartLight)}
                alt='Shopping cart icon'
            />
            
            { showDropDown &&
                <ModalDropDown />
            }

        </nav>
    )
};

export default Navbar;