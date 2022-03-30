import './App.css';
import React, { useState } from 'react';
//! No longer use Switch | Instead use Routes
import { Routes, Route } from 'react-router-dom';
import useLocalStorage from 'use-local-storage';
import translate from "translate";

//* Pages
import Landing from './pages/Landing/Landing';
import ModalSignUp from './components/ModalSignUp/ModalSignUp';
import Settings from './pages/Settings/Settings';

//* Components
import Navbar from './components/Navbar/Navbar';
import ModalCategories from './components/Modal_Categories/ModalCategories';
import Footer from './components/Footer/Footer'


function App() {

  const [categoriesOpen, setCategoriesOpen] = useState(false);

  //? Might not need this | possibly use toggleBackDrop
  const toggleCategories = () => {
    console.log('Toggle categories clicked', categoriesOpen)
    categoriesOpen ? setCategoriesOpen(false) : setCategoriesOpen(true);
  };

  const [signUpOpen, setSignUpOpen] = useState(false);

  //? Might not need this | possibly use toggleBackDrop
  const toggleSignUp = () => {
    console.log('Toggle clicked', categoriesOpen)
    signUpOpen ? setSignUpOpen(false) : setSignUpOpen(true);
  };

  
  //! When backdrop for modals is clicked set all modal states to false
  const toggleBackDrop = () => {
    console.log('Toggle Backdrop clicked!');
    setSignUpOpen(false);
    setCategoriesOpen(false);
  };


  //! Light/Dark mode state saved to localStorage
  const [ theme, setTheme ] = useLocalStorage('theme', 'theme' ? 'dark' : 'light');

  //! pass as a prop to Settings for light/dark mode toggle
  const switchTheme = () => {
    console.log('Switch Theme clicked!')
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  translate.engine = "google"; 
  translate.key = "AIzaSyBeWvW7mmVeht7ldMTPr0RXyNrJ4fQcroA";

  return (
    
    <div data-theme={theme}>
      
      {/* Components */}
      <Navbar modalOpen={categoriesOpen} 
        setCategoriesOpen={setCategoriesOpen} 
        toggleCategories={toggleCategories}
        toggleBackDrop={toggleBackDrop}
        toggleSignUp={toggleSignUp}
        theme={theme}
      />

      <ModalCategories toggleCategories={toggleCategories} 
        categoriesOpen={categoriesOpen}
        toggleBackDrop={toggleBackDrop}
      />
      <ModalSignUp toggleSignUp={toggleSignUp} 
        signUpOpen={signUpOpen}
        toggleBackDrop={toggleBackDrop}
      /> 
      
      <Routes>

        {/* Pages */}
        <Route path='/' exact element={< Landing /> }/>
        <Route path='/settings' exact element={< Settings theme={theme} switchTheme={switchTheme}/> } />
        
        <Route path='/footer' exact element={< Footer /> }/>

      </Routes>
      < Footer />
    </div>

  );
};

export default App;
