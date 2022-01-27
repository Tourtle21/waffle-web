import React, {useState} from 'react';
import trulyYours from '../../Assets/TrulyYours.mov';
import Header from '../Styles/Header'
import ContactForm from '../Usables/ContactForm';
import Popup from "reactjs-popup";
import Hero from '../Usables/Hero';
import Cards from '../Usables/Cards';
import {Helmet} from "react-helmet";

const Home = () => {
    const [submitted, setSubmitted] = useState(false);
    const [open, setOpen] = useState(false);
    const closeModal = () => {setOpen(false); document.body.style.overflow = "visible"};

    const onSubmit = (data) => {
        setSubmitted(true);
    }

    const resetVideo = (e) => {
        e.target.currentTime = 0;
        e.target.pause();
    }

    return (
        <main>
            <Helmet>
                <title>WaffleTech | Custom Web Design</title>
                <meta name="description" content="WaffleTech your custom web design and development company. Our web designers and web developers are able to create a custom website at affordable pricing." />
                <meta name="keywords" content="Custom website design, Custom web design, Web design company, Web designer, Custom web design pricing, Custom web design cost, Custom web design services, Custom website builder, Custom web design prices, Custom web design and development, Custom website Website design, Web designers, Website designer, Best website builder, Create a website, Custom website development" />
            </Helmet>
            <Hero/>

            <Cards />
            <div className="cont">
                <Header className="start">Our Work</Header>
                
            <video className="video" onClick={(e) => {setOpen(o => !o); document.body.style.overflow = "hidden";}} onMouseEnter={(e) => {e.target.play(); e.target.playbackRate = 10;}} onMouseLeave={(e) => resetVideo(e)} width="320" height="240" muted="muted" playsInline>
      <source src={trulyYours} type='video/mp4' />
    </video>
    <Popup open={open} closeOnDocumentClick onClose={closeModal}>
    <div className="modal">
    <button className="close" onClick={closeModal}>
                &times;
                </button>
          </div>
      </Popup>
            </div>
            {!submitted ?
                <ContactForm submit={onSubmit} inputs={["Name", "Phone", "Email"]} idNames= {["name", "phone", "email"]}></ContactForm>
            : <div className="thanks">Thanks! We will get back to you ASAP! </div>}
        </main>

    )
};

export default Home;