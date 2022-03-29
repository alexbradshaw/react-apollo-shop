import './ModalSignUp.css';
import Backdrop from '../BackDrop/BackDrop';
import { AnimatePresence, motion } from 'framer-motion';

const ModalSignUp = ({ signUpOpen, toggleBackDrop, toggleSignUp }) => {

    return (
        <AnimatePresence
            initial={false}
            exitBeforeEnter={true}
        >
            { signUpOpen && (
            
                <Backdrop toggleBackDrop={toggleBackDrop} >
                    <motion.div 
                        className='register-modal-container'
                        onClick={(e) => e.stopPropagation()}
                    >
                        <p onClick={ () => toggleSignUp() }> X </p>
                        <h3> Create your account </h3>
                        <input
                            className='username'
                            name='username' 
                            type="text" 
                            placeholder='Username'
                        />
                        <input
                            className='email'
                            name='email' 
                            type="text" 
                            placeholder='Email'
                        />
                        <input
                            className='password'
                            name='password' 
                            type="password" 
                            placeholder='Password'
                        />
                        <button
                            className='register-btn btn' 
                        >
                            Submit
                        </button>
                        <div className='hr'>
                            
                        </div>
                        <span>OR</span>
                        <button
                            className='google-btn btn' 
                        >
                            Continue with Google
                        </button>
                        
                    </motion.div>
                
                </Backdrop>
            )}
        </AnimatePresence>
    )
};

export default ModalSignUp;