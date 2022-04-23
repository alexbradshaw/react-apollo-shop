import './ModalCart.css';
import BackDrop from '../BackDrop/BackDrop';
import { AnimatePresence, motion } from 'framer-motion';

const ModalCart = ({ toggleBackDrop, showCart }) => {

    const cartVariants = {
        hidden: {
            x: '100vw',
            opacity: 1
        },
        visible: {
            x: '0',
            opacity: 1,
        }
    };

    return (

        <AnimatePresence
            initial={false}
            exitBeforeEnter={true}
        >
            { showCart && (
           
                <BackDrop toggleBackDrop={toggleBackDrop}>

                    <motion.section 
                        className='cart'
                        onClick={(e) => e.stopPropagation()}
                        variants={cartVariants}
                    >
                        <p onClick={toggleBackDrop}> X </p>
                        <h3> You have no items in your cart ☹️ </h3>
                    </motion.section>

                </BackDrop>
           
            )}

        </AnimatePresence>
        
    )

};

export default ModalCart;