import './ModalSignIn.css';
import Backdrop from '../BackDrop/BackDrop';
import { AnimatePresence, motion } from 'framer-motion';

const ModalSignIn = ({ showSignIn, toggleBackDrop, setShowRegister, showRegister }) => {

    const signInVariants = {
        hidden: {
            y: '100vw',
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
            { showSignIn && (
            
                <Backdrop toggleBackDrop={toggleBackDrop} >
                    <motion.div 
                        className='register-modal-container'
                        onClick={(e) => e.stopPropagation()}
                        variants={signInVariants}
                    >
                        <p onClick={toggleBackDrop}> X </p>
                        <h3> Sign In </h3>

                        
                        <button 
                            className='btn-register'
                            onClick={() => showRegister ? setShowRegister(false) : setShowRegister(true)}
                        >
                            Register 
                        </button>
                        <input
                            className='username'
                            name='username' 
                            type="text" 
                            placeholder='Username'
                        />

                        {/* //* STARTING POINT - toggle form from register to signup */}
                        { showRegister && (
                        
                        <input
                            className='email'
                            name='email' 
                            type="text" 
                            placeholder='Email'
                        />
                        )}

                        <input
                            className='password'
                            name='password' 
                            type="password" 
                            placeholder='Password'
                        />
                        <button
                            className='register-btn btn'
                            type='submit'
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

export default ModalSignIn;