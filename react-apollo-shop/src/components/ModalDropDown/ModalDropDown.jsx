import './ModalDropDown.css';
//import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';


const ModalDropDown = () => {

    const dropDownVariants = {
        hidden: {
           opacity: 0,
           scale: 0,
           translateX: 60,
           translateY: -60,
        },
        visible: {
            opacity: 1,
            scale: 1,
            translateX: 0,
            translateY: 0,
            transition: {
                duration: 0
            }
        },
    }

    return ( 
            <motion.div className='drop-down'
                variants={dropDownVariants}
                initial='hidden'
                animate='visible'
            >
                <Link to={'/settings'} className='settings'> Settings </Link>
                <Link to={'/'} className='logout'> Logout </Link>
            </motion.div>
     );
}
 
export default ModalDropDown;