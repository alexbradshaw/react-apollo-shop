import './Navbar.css';

//* Images
import burgerMenuDark from './imgs/burger_menu_dark.png';
import burgerMenuLight from './imgs/burger_menu_light.png';
import shoppingCartDark from './imgs/shopping_cart_dark.png';
import shoppingCartLight from './imgs/shopping_cart_light.png';
import search from './imgs/search.png';

const Navbar = ({ theme, setShowCategories, setShowSignIn, setShowCart }) => {

    return (
        
        /* Navbar */
        <nav className='nav-container'>
            <h4 className='logo'> Trasher 🤘 </h4>
            <img className='burger-menu'
                /* conditionally renders dark or light burger menu icon */
                src={theme === 'light' ? burgerMenuDark : burgerMenuLight}
                onClick={() => setShowCategories(true)}
            />
            <input className='search-bar'
                type="text" 
                placeholder='Search'
                
            />
            <img className='search-icon'
                src={search} 
            />
            <a href='#' 
                className='sign-in' 
                onClick={() => setShowSignIn(true)}
                > 
                Sign in 
            </a>
            <img className='shopping-cart'
                onClick={() => setShowCart(true)}
                /* conditionally renders dark or light cart icon */
                src={theme === 'light' ? shoppingCartDark : shoppingCartLight}
            />

        </nav>
    )
};

export default Navbar;