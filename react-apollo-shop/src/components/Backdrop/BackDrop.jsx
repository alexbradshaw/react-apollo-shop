import './BackDrop.css';
import { motion } from 'framer-motion';

//! This should wrap all modals
const Backdrop = ({ children, toggle }) => {

    const backdropVariants = {
        hidden: { 
            opacity: 0 
        },
        visible: { 
            opacity: 1
        },
        exit: {
            y: '10vh',
            transition: {
                duration: 0,
            }
        }
    };

    /* opaque background to target click event to toggle state to false & hide modal */
    return ( 
        <motion.div className='backdrop'
                    onClick={() => toggle() }
                    variants={ backdropVariants }
                    initial='hidden'
                    animate='visible'
                    exit='exit'
        >
            {/* Allows for child components to be nested */}
            { children }

        </motion.div>
     );
};
 
export default Backdrop;