import React, {useState} from 'react';
import Image from 'next/image';
import Hero from '../components/Hero';
import Head from 'next/head';
import Cards from '../components/Cards';
import ContactForm from '../components/ContactForm'
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
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>
        <Hero/>
        
        <Cards />
        <div class='computer-container'>
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
            : <div className="thanks">Thanks! We will get back to you ASAP! </div>}
    </div>
  )
}
