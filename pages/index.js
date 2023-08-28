import React, {useState} from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Button from '../styles/Button';
import ContactForm from '../components/ContactForm'
import Link from 'next/link';
export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const resetVideo = (e) => {
    e.target.currentTime = 0;
    e.target.pause();
}
const onSubmit = (data) => {
  setSubmitted(true);
}
  return (
    <div className="home">
      <div class='black center right'>
        <div id='hero' className="main-hero">
            <h1 class="hero-header">Custom Web Design</h1>
            <p class="hero-paragraph">
            Because you deserve a website as unique as your 
business
            </p>
            <Button onClick={() => window.scrollTo(0,document.body.scrollHeight)}>Contact Us</Button>
        </div>
        </div>
        
        {/* <Cards /> */}

        <div className="container">
          <h1>We Specialize In...</h1>

          <div className="cards">
          <Link href='/design' >
          <div className="card blue">
              <h2>Design</h2>
              <div className="image-container">
                <Image src='/images/design.png' layout="fill" />
              </div>
            </div>
            </Link>
            <Link href='/development' >
            <div className="card red">
              <h2>Development</h2>
              <div className="image-container">
                <Image src='/images/development.png' layout="fill" />
              </div>
            </div>
            </Link>
            <Link href='/branding' >
            <div className="card yellow">
              <h2>Branding</h2>
              <div className="image-container">
                <Image src='/images/branding.png' layout="fill" />
              </div>
            </div>
            </Link>
            <div className="spacer"></div>
              <div className="bullet blue"></div>
              <div className="bullet red"></div>
              <div className="bullet yellow"></div>
              <div className="spacer"></div>
          </div>

        </div>

        <div className="black">
          <div id="hero" className="hero-nocolor">
          <h1 class="hero-header">Our Mission</h1>
          <p class="hero-paragraph">
          We help entrepreneurs build their dream businesses, support their missions, and expand their capacity. Our goal is to help your website, brand, and business succeed. Why? Because we succeed when you do.
            </p>
            <Button onClick={() => window.scrollTo(0,document.body.scrollHeight)}>Contact Us</Button>
            </div>
        </div>

        <div className="container">
          <h1>Past Projects</h1>
          <div className="pastprojects">
            <div className="project-image"><Image src='/images/kleinconstruction.png' layout="fill" /></div>
            <div className="project-image"><Image src='/images/jerrylambertautomotive.png' layout="fill" /></div>
          </div>
        </div>

        <div className="container black">
          {!submitted ?
                <ContactForm submit={onSubmit} title="Let’s Get Started!" background="black" home={true} inputs={["Name", "Phone", "Email"]} idNames= {["name", "phone", "email"]}></ContactForm>
            : <div className="thanks">Thanks! We will get back to you ASAP! </div>}
        </div>

        {/* <div class='computer-container'>
          <h1>Past Projects</h1>
          <div class='contained-computer'>
            <div id='computer'>
              <video className="video" onMouseEnter={(e) => {e.target.play(); e.target.playbackRate = 10;}} onMouseLeave={(e) => resetVideo(e)} width="320" height="240" muted="muted" playsInline>
                <source src='/images/TrulyYours.mov' type='video/mp4' />
              </video>
            </div>
      </div>
        </div>
        {!submitted ?
                <ContactForm submit={onSubmit} inputs={["Name", "Phone", "Email"]} idNames= {["name", "phone", "email"]}></ContactForm>
            : <div className="thanks">Thanks! We will get back to you ASAP! </div>} */}
    </div>
  )
}
