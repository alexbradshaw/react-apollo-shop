import './BackDrop.css';
import { motion } from 'framer-motion';

//! This should wrap all modals
const BackDrop = ({ children, toggleBackDrop }) => {

    const backdropVariants = {
        hidden: {
            x: 0,
            opacity: 0,
            when: 'afterChildren',
            transition: {
                opacity: 0,
                duration: .2,
                /* transition will wait until child animations are complete to 
                start 'exit' animation  */
                
            } 
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0,
                /* when: 'beforeChildren', */
            }
        },
    };

    /* opaque background to target click event to toggle state to false & hide modal */
    return ( 
        <motion.div 
            className='backdrop'
            onClick={toggleBackDrop}
            variants={backdropVariants}
            initial='hidden'
            animate='visible'
            /* exit animation can only be used on the parent container */
            exit='hidden'
        >
            {/* Allows for child components to be nested */}
            { children }

        </motion.div>
     );
};
 
export default BackDrop;