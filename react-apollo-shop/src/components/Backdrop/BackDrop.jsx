import './BackDrop.css';
import { motion } from 'framer-motion';

//! This should wrap all modals
const BackDrop = ({ children, toggleBackDrop }) => {

    const backdropVariants = {
        hidden: { 
            opacity: 0 
        },
        visible: { 
            opacity: 1
        },
        //! exit animation can only be used on the first animatable child of the AnimatePresence component (in this example the Backdrop component) 
        exit: {
           
        }
    };

    /* opaque background to target click event to toggle state to false & hide modal */
    return ( 
        <motion.div 
            className='backdrop'
            onClick={toggleBackDrop}
            variants={backdropVariants}
            initial='hidden'
            animate='visible' 
            exit='exit'
        >
            {/* Allows for child components to be nested */}
            { children }

        </motion.div>
     );
};
 
export default BackDrop;