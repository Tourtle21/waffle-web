import React from 'react';
import Image from 'next/image'
import Button from '../styles/Button';

const Hero = () => {

    return (
        <div class='container right black'>
        <div id='hero'>
            <h1>Custom Web Design.</h1>
            <p class="cards-text" id="cards-text">
            because you deserve a website as unique as your 
business.
            </p>
            <Button onClick={() => window.scrollTo(0,document.body.scrollHeight)}>Contact Us</Button>
        </div>
        </div>
    )
};

export default Hero;