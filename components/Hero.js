import React from 'react';
import Image from 'next/image'
import Button from '../styles/Button';

const Hero = () => {

    return (
        <div class='container'>
        <div id='hero'>
            <h1>Custom Web Design</h1>
            <p class="cards-text" id="cards-text">
                Join us on a journey to success!!!
            </p>
            <Button onClick={() => window.scrollTo(0,document.body.scrollHeight)}>Get Started</Button>
            <div class='squares yellow square1'></div>
            <div class='squares red square2'></div>
            <div class='squares blue square3'></div>
            <div class='squares green square4'></div>
            <div class='squares yellow square5'></div>
            <div class='squares square6'><Image layout="fill" src='/images/branding.jpg' /></div>
            <div class='squares red square6 opacity'></div>
            <div class='squares blue square7'></div>
            <div class='squares green square8'></div>
            <div class='squares red square9'></div>
            <div class='squares green square10'></div>
            <div class='squares red square11'></div>
            <div class='squares square12'><Image layout="fill" src='/images/serviceshero.jpg' /></div>
            <div class='squares lightblue square12 opacity'></div>
            <div class='squares blue square13'></div>
            <div class='squares yellow square14'></div>
            <div class='squares square15'><Image layout="fill" src='/images/design.jpg' /></div>
            <div class='squares yellow square15 opacity'></div>
            <div class='squares green square16'></div>
            <div class='squares red square17'></div>
            <div class='squares green square18'></div>
            <div class='squares square19'><Image layout="fill" src='/images/marketing.jpg' /></div>
            <div class='squares red square19 opacity'></div>
            <div class='squares yellow square20'></div>
            <div class='squares grey square21'></div>
        </div>
    </div>
    )
};

export default Hero;