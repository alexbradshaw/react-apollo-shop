import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import './Footer.css';
import translate from "translate";

const Footer = () => {

    function location() {
        console.log('location has been pressed');
    }

    function language() {
        console.log('language has been pressed');
    }

    function currency() {
        console.log('currency has been pressed');
    }

return (
<div className='footerDiv'> 
    <div className='buttonContainer'>
        <div>
            <button onClick={location}>US</button>
            <button onClick={language}>ENGLISH</button>
            <button onClick={currency}>$USD</button>
        </div>
    </div>
    <div className='copyright'>© 2022 Trasher, Inc. 🤘</div> 
</div>
)
}



export default Footer
