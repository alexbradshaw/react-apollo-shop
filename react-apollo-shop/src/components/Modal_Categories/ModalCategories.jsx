import './ModalCategories.css';
import { AnimatePresence, motion } from 'framer-motion';

const ModalCategories = ({ toggle, modalOpen }) => {
    
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
        },
        exit: {
            y: '10vh',
            transition: {
                duration: 0,
            }
        }
    };

    const backdropVariants = {
        hidden: { 
            opacity: 0 
        },
        visible: { 
            opacity: 1,
        }
    };
    
    return (
        
        <AnimatePresence 
            initial={false}
            exitBeforeEnter={true}
        >
            
            {/* If modalOpen state is true modal open | else if state is false modal hidden */}
            {modalOpen && (
                
                /* opaque background to target click event to toggle state to false & hide modal */
                <motion.div className='backdrop' 
                    onClick={() => toggle()}
                    variants={backdropVariants}
                    initial='hidden'
                    animate='visible'
                >
                
                    <motion.section 
                        className='navbar-categories'
                        variants={ categoryVariants }
                        initial='hidden'
                        animate='visible'
                        exit='exit'
                    >
                        <h2> Browse Categories </h2>
                        <p className='close' onClick={() => toggle()}> X </p>
                    </motion.section>
                </motion.div>
                
            )}

        </AnimatePresence>
    );
};

export default ModalCategories;