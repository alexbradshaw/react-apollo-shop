import './ModalSignIn.css';
import React, { useState } from 'react';
import Backdrop from '../BackDrop/BackDrop';
import { AnimatePresence, motion } from 'framer-motion';

const ModalSignIn = ({ showSignIn, toggleBackDrop, setShowRegister, showRegister }) => {

    const signInVariants = {
        hidden: {
            y: '200vh',
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

    //! CHECKBOX
    const [ rememberMeState, setRememeberMeState ] = useState(false);

    const handleRememberMe = (e) => {
        
        setRememeberMeState(!rememberMeState);
        console.log(rememberMeState)
    };

    //! REGISTER
    const [ registerState, setRegisterState] = useState(
        {
            email: '',
            username: '',
            password: ''
        }
    );

    const handleRegisterChange = (e) => {
        const { name, value } = e.target;
        setRegisterState({ ...setRegisterState, [ name ]: value });
        console.log(registerState);
    }
    

    const handleRegisterForm = (e) => {

    };
    
    //! SIGNIN
    const [ signInState, setSignInState] = useState(
        {
            username: '',
            password: ''
        }
    );

    const handleSignInChange = (e) => {
        const { name, value } = e.target;
        setSignInState({ ...setSignInState, [ name ]: value });
        console.log(signInState);
    }
    

    const handleSignInForm = (e) => {

    };

    return (
        <AnimatePresence
            initial={false}
            exitBeforeEnter={true}
        >
            {/* DEFAULT SHOWS SIGNIN MODAL */}
            { showSignIn && (
            
                <Backdrop toggleBackDrop={toggleBackDrop} >
                    <motion.div 
                        className='register-modal-container'
                        onClick={(e) => e.stopPropagation()}
                        variants={signInVariants}
                    >

                        { !showRegister ? (
                            /* signin modal */
                            <form className='signin-form' 
                                onClick={(e) => e.preventDefault()}
                                onSubmit={handleSignInForm}
                                onChange={handleSignInChange}
                            >
                                <p onClick={toggleBackDrop}> X </p>
                                <h3> Sign In </h3>
                                <button 
                                        className='btn-register'
                                        onClick={() => { 
                                            showRegister ? setShowRegister(false) : setShowRegister(true)}
                                        }
                                >
                                    Register
                                </button>
                                <input
                                    className='username'
                                    name='username' 
                                    type="text" 
                                    placeholder='Username'
                                />
                                <input
                                    className='password'
                                    name='password' 
                                    type="password" 
                                    placeholder='Password'
                                />
                                <input 
                                    type='checkbox'
                                    checked={rememberMeState}
                                    onChange={handleRememberMe}
                                />
                                <label> Remember Me</label>
                                <button
                                    className='register-btn btn'
                                    
                                >
                                    Submit
                                </button>
                            
                                <div className='hr' />
                                <span>OR</span>
                                
                                
                                <button
                                    className='google-btn btn'
                                >
                                    Continue with Google
                                </button>
                            </form>
                        ):(
                            //! register modal 
                            <form className='register-form' 
                                onSubmit={handleRegisterForm} 
                                onClick={(e) => e.preventDefault()}
                                onChange={handleRegisterChange}
                            >
                                <p onClick={toggleBackDrop}> X </p>
                                <h3> Register </h3>
                                <button 
                                        className='btn-register'
                                        onClick={() => showRegister ? setShowRegister(false) : setShowRegister(true)}
                                >
                                    Sign In
                                </button>
                                <input
                                className='email'
                                name='email' 
                                type="text" 
                                placeholder='Email'
                                />
                                
                                <input
                                    className='username'
                                    name='username' 
                                    type="text" 
                                    placeholder='Username'
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
                            
                                <div className='hr' />
                                <span>OR</span>
                                
                                
                                <button
                                    className='google-btn btn' 
                                >
                                    Continue with Google
                                </button>
                            </form>
                        )}
                    </motion.div>
                
                </Backdrop>
            )}
        </AnimatePresence>
    )
};

export default ModalSignIn;