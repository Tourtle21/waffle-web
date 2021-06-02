import React, {useState, useEffect} from 'react';
import { Parallax } from 'react-scroll-parallax';
import goal from '../../Assets/goal.png';
import ball from '../../Assets/SoccerBall.png';
import trulyYours from '../../Assets/TrulyYours.mov';
import yourstruly from '../../Assets/yourstruly.jpeg';
import stageBack from '../../Assets/StageBack.png';
import stageFront from '../../Assets/StageFront.png';
import stageMiddle from '../../Assets/StageMiddle.png';
import timeline from '../../Assets/TimeLine.png';
import face from '../../Assets/Face.png';
import Header from '../Styles/Header'
import ContactForm from '../Usables/ContactForm';
import Popup from "reactjs-popup";
import axios from 'axios';
import Hero from '../Usables/Hero';
import Cards from '../Usables/Cards';

const Home = (props) => {
    const [submitted, setSubmitted] = useState(false);
    const [open, setOpen] = useState(false);
    const closeModal = () => {setOpen(false); document.body.style.overflow = "visible"};

    const onSubmit = (data) => {
        axios.post('/email', data)
        .then(() => {
            setSubmitted(true);
        }).catch((err) => {
            console.log(err);
        })
    }

    const resetVideo = (e) => {
        e.target.currentTime = 0;
        e.target.pause();
    }

    return (
        <main>
            <Hero/>

            <Cards />
            <div className="cont">
                <Header className="start">Our Work</Header>
                
            <video className="video" onClick={(e) => {setOpen(o => !o); document.body.style.overflow = "hidden";}} onMouseEnter={(e) => {e.target.play(); e.target.playbackRate = 10;}} onMouseLeave={(e) => resetVideo(e)} width="320" height="240" muted="muted" >
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
            : <div> </div>}
        </main>

    )
};

export default Home;