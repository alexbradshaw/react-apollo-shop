import './ModalCategories.css';
import Backdrop from '../Backdrop/BackDrop';
import { AnimatePresence, motion } from 'framer-motion';

const ModalCategories = ({ handleClose, toggle, modalOpen }) => {
    
    /* Nav Categories */
    const categoryVariants = {
        hidden: {
            y: '100vh',
            opacity: 0
        },
        visible: {
            y: '0',
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
            { modalOpen && (
                
                /* opaque background to target click event to toggle state to false & hide modal */
                <Backdrop toggle={toggle}>
                
                    <motion.section 
                        className='navbar-categories'
                        onClick={(e) => e.stopPropagation()}
                        variants={ categoryVariants }
                        initial='hidden'
                        animate='visible'
                    >
                        <h2> Browse Categories </h2>
                        <p className='close' onClick={ () => toggle() }> X </p>
                    </motion.section>
                </Backdrop>

            )}

        </AnimatePresence>
    );
};

export default ModalCategories;