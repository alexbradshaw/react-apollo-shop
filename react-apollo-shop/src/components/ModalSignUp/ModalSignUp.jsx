import './ModalSignUp.css';
import React, { useState } from 'react';
import Backdrop from '../BackDrop/BackDrop';
import { AnimatePresence, motion } from 'framer-motion';

const ModalSignUp = ({ signUpOpen, toggleBackDrop, toggleSignUp, showRegisterForm, showRegister }) => {

  

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
                        <h3> Sign In </h3>

                        
                        <button 
                            className='btn-register'
                            onClick={() => showRegisterForm()}
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

export default ModalSignUp;