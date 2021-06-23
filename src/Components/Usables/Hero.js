import React from 'react';
import Header from "../Styles/Header";
import { ChevronDownSharp } from 'react-ionicons'

const Hero = () => {

    return (
      <div>
        <div className="container container_solid">
          <div className="title_wrapper">
            <h1>WaffleTech</h1>
            <Header className="herosub">Custom Web Design and Development</Header>
            <button onClick={() => window.scrollTo(0,document.body.scrollHeight)} className="getStarted">Get Started</button>
            <div className="arrow bounce">
            <ChevronDownSharp
              color={'#000041'} 
              height="50px"
              width="50px"
              onClick={() => window.scrollTo(0, 1600)} 
            />
            </div>
          </div>
        </div>


        <div className="container container_image" aria-hidden="true">
          <div className="title_wrapper">
            <h1 className="bigger">WaffleTech</h1>
            <Header className="herosub">Making better websites. faster.</Header>
            <button onClick={() => window.scrollTo(0,document.body.scrollHeight)} className="getStartedd">Get Started</button>
            <div className="arrow bounce">
            <ChevronDownSharp
              color={'#f3f3f3'} 
              height="50px"
              width="50px"
              onClick={() => window.scrollTo(0, 1600)}
            />
            </div>
          </div>
        </div>
      </div>
    )
};

export default Hero;