import './ModalCategories.css';
import Backdrop from '../BackDrop/BackDrop';
import { AnimatePresence, motion } from 'framer-motion';

const ModalCategories = ({ toggleBackDrop, showCategories }) => {
    
    const categoryVariants = {
        hidden: {
            x: '-100vw',
            opacity: 0
        },
        visible: {
            x: '0',
            opacity: 1,
            transition: {
                duration: 0,
            }
        }
    };
    
    return (
        
        <AnimatePresence 
            initial={false}
            exitBeforeEnter={true}
        >
            
            {/* If modalOpen state is true modal open | else if state is false modal hidden */}
            { showCategories && (
                
                /* opaque background to target click event to toggle state to false & hide modal */
                <Backdrop toggleBackDrop={toggleBackDrop}>
                
                    <motion.section 
                        className='navbar-categories'
                        /* Stops event bubble from happening which allows for backdrop to close when clicked and modal to stay open when clicked */
                        onClick={(e) => e.stopPropagation()}
                        variants={ categoryVariants }
                        initial='hidden'
                        animate='visible'
                    >
                        <h2> Browse Categories </h2>
                        <p className='close' onClick={toggleBackDrop}> X </p>
                    </motion.section>
                </Backdrop>
                
            )}

        </AnimatePresence>
    );
};

export default ModalCategories;