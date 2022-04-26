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
import search from './imgs/search.png';


const Navbar = ({ theme, setShowCategories, setShowSignIn, setShowCart }) => {


    const [ loggedIn, setLoggedIn ] = useState(true);

    const handleIcons = (dark, light) => {
        return theme === 'light' ? dark : light;
    }

    return (
        
        /* Navbar */
        <nav className='nav-container'>
            <h4 className='logo'> <Link to={'/'}> Trasher 🤘 </Link> </h4>
            <img className='burger-menu'
                /* conditionally renders dark or light burger menu icon */
                src={handleIcons(burgerMenuDark, burgerMenuLight)}
                onClick={() => setShowCategories(true)}
            />
            <input className='search-bar'
                type="text" 
                placeholder='Search'
                
            />
            <img className='search-icon'
                src={search} 
            />

            { loggedIn ? (
                <img
                    className='user-profile'
                    src={handleIcons(userProfileDark, userProfileLight)}
                />
            ) : (
                <a href='#' 
                    className='sign-in' 
                    onClick={() => setShowSignIn(true)}
                    > 
                    Sign in 
                </a>
            )}
            <img className='shopping-cart'
                onClick={() => setShowCart(true)}
                /* conditionally renders dark or light cart icon */
                src={handleIcons(shoppingCartDark, shoppingCartLight)}
            />
            

        </nav>
    )
};

export default Navbar;