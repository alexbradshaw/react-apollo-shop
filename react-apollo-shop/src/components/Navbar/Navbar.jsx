import './Navbar.css';

//* Framer Motion
import { motion } from 'framer-motion';

//* Images
import burgerMenu from './imgs/burger_menu.png';
import shoppingCart from './imgs/shopping_cart.png'
import search from './imgs/search.png';

const Navbar = () => {

    return (

        <motion.div className='nav-container'>
            <h4 className='logo'> Trasher🤘 </h4>
            <img className='burger-menu'
                src={burgerMenu} 
            />
            <input className='search-bar'
                type="text" 
                placeholder='Search' 
            />
            <img className='search-icon'
                src={search} 
            />
            <a className='sign-in'> Sign in </a>
            <img className='shopping-cart'
                src={shoppingCart} 
            />
            
            
            

        </motion.div>

    )

};

export default Navbar;