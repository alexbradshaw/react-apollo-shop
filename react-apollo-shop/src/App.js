import './App.css';
import React, { useState } from 'react';
//! No longer use Switch | Instead use Routes
import { Routes, Route } from 'react-router-dom';
import useLocalStorage from 'use-local-storage';

//* Pages
import Landing from './pages/Landing/Landing';
import Register from './components/Register/Register';
import Settings from './pages/Settings/Settings';

//* Components
import Navbar from './components/Navbar/Navbar';
import { AnimatePresence } from 'framer-motion';
import Footer from './components/Footer/Footer'

function App() {


  const [modalOpen, setModalOpen] = useState(false);

  const toggle= () => {
    console.log('Toggle clicked', modalOpen)
    modalOpen ? setModalOpen(false) : setModalOpen(true);
  }

  const close = () => {
    console.log('Close clicked')
    setModalOpen(false)
  };

  const open = () => {
    //e.stopPropgation();
    console.log('Open clicked')
    setModalOpen(true)
  };

  //! Light/Dark mode state saved to localStorage
  const [ theme, setTheme ] = useLocalStorage('theme', 'theme' ? 'dark' : 'light');

  //! pass as a prop to Settings for light/dark mode toggle
  const switchTheme = () => {
    console.log('Switch Theme clicked!')
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    
    <div data-theme={theme}>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
      >
        <Navbar modalOpen={modalOpen} setModalOpen={setModalOpen} open={open} close= {close} toggle={toggle} theme={theme}/>
        <Routes>

          <Route path='/' exact element={< Landing /> }/>
          <Route path='/settings' exact element={< Settings theme={theme} switchTheme={switchTheme}/> } />
          {/* Temporary route */}
          <Route path='/register' exact element={< Register /> }/>
          <Route path='/footer' exact element={< Footer /> }/>

        </Routes>
      </AnimatePresence>
      </div>

  );
}

export default App;
