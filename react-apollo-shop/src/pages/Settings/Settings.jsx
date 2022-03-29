import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import Collapsible from 'react-collapsible';
import './Settings.css';
import useLocalStorage from 'use-local-storage';


// all that's really left here is functionality and making it so the button for the collapsible is the entire box and not just the text

const Settings = ({ theme, switchTheme }) => {

  //const [darkMode, setDarkMode] = useState(false);

  function deleteAccount() {
      console.log('delete account has been pressed');
  }

  function both() {
      //setDarkMode(!darkMode) 
      //console.log(`theme has been toggled to ${!darkMode}`)
  }

  function changePassword() {
      console.log('change password has been pressed');
  }

  function logout() {
      console.log('logout has been pressed');
  }

  return (
      <div className='mainContent'>
        <Collapsible trigger="About *Insert Name*" className='collapsibleContainer' openedClassName='collapsibleContainer'>
          <p> 
              This is a project created by <a>Alex Bradshaw</a> and <a>Sam Sweigart</a>. This project was created to demonstrate their proficiency by creating a MERN application that proxies requests to the Apollo Server.
          </p>
        </Collapsible>
        <button className='collapsibleContainer settingsButtons' onClick={deleteAccount}>Delete Account</button>
        
        {/* Capitalize first chararacter */}
        <button className='collapsibleContainer settingsButtons' onClick={switchTheme}>Theme {`${theme[0].toUpperCase()}${theme.slice(1)}`}</button>
        <button className='collapsibleContainer settingsButtons' onClick={changePassword}>Change Password</button>
        <Collapsible trigger="Contribute" className='collapsibleContainer' openedClassName='collapsibleContainer'>
          <p> 
              Check out the <a href="https://github.com/alexbradshaw/react-apollo-shop" target="_blank"> Github Repository </a> and if you would like to contribute, feel free to send us an email. Thanks! 
          </p>
        </Collapsible>
        <Collapsible trigger="Help and Support" className='collapsibleContainer' openedClassName='collapsibleContainer'>
          <p> 
              If you are having trouble with our website or you would like to suggest a feature, feel free to send us an email. Thanks!
          </p>
        </Collapsible>
        <button className='collapsibleContainer settingsButtons' onClick={logout}>Logout</button>
      </div>
  )

}



export default Settings
