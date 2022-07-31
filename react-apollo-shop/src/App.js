import './App.css';
import React, { useState } from 'react';
//! No longer use Switch | Instead use Routes
import { Routes, Route } from 'react-router-dom';
import useLocalStorage from 'use-local-storage';
import translate from "translate";

//* Pages
import Landing from './pages/Landing/Landing';
import ModalSignIn from './components/ModalSignIn/ModalSignIn';
import Settings from './pages/Settings/Settings';
import Profile from './pages/Profile/Profile';

//* Components
import Navbar from './components/Navbar/Navbar';
import ModalCategories from './components/ModalCategories/ModalCategories';
import ModalCart from './components/ModalCart/ModalCart';
import Footer from './components/Footer/Footer';

const App = () => {

  //! Light/Dark mode state saved to localStorage
  const [ theme, setTheme ] = useLocalStorage('theme', 'theme' ? 'dark' : 'light');

  const [ showCategories, setShowCategories ] = useState(false);
  const [ showCart, setShowCart ] = useState(false);
  const [ showRegister, setShowRegister ] = useState(false);
  const [ showSignIn, setShowSignIn ] = useState(false);

  //! pass as a prop to Settings for light/dark mode toggle
  //? could possibly move this to the settings component
  const switchTheme = () => {
    console.log('Switch Theme clicked!');
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  //! When backdrop for modals is clicked set all modal states to false
  const toggleBackDrop = (e) => {
    e.stopPropagation();
    console.log('Toggle Backdrop clicked!');
    setShowCategories(false);
    setShowSignIn(false);
    setShowRegister(false);
    setShowCart(false);
  };

  translate.engine = "google"; 
  translate.key = "AIzaSyBeWvW7mmVeht7ldMTPr0RXyNrJ4fQcroA";

  return (
    
    <div data-theme={theme}>
      
      {/* Components */}
      <Navbar
        setShowCategories={setShowCategories}
        setShowSignIn={setShowSignIn}
        toggleBackDrop={toggleBackDrop}
        setShowCart={setShowCart}
        theme={theme}
      />

      <ModalCategories
        showCategories={showCategories}
        toggleBackDrop={toggleBackDrop}
      />
      <ModalSignIn
        showSignIn={showSignIn}
        toggleBackDrop={toggleBackDrop}
        showRegister={showRegister}
        setShowRegister={setShowRegister}
      /> 
      <ModalCart 
        showCart={showCart}
        toggleBackDrop={toggleBackDrop}
      />
      
      <Routes>

        {/* Pages */}
        <Route path='/' exact element={< Landing /> }/>
        <Route path='/settings' exact element={< Settings theme={theme} switchTheme={switchTheme}/> } />
        <Route path='/Profile' exact element={< Profile /> }/>
        
        {/* Temporary Route */}
        <Route path='/footer' exact element={< Footer /> }/>

      </Routes>
      < Footer />
    </div>

  );
};

export default App;
