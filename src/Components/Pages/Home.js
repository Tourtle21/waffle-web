import React, {useState, useEffect} from 'react';
import { Parallax } from 'react-scroll-parallax';
import goal from '../../Assets/goal.png';
import ball from '../../Assets/SoccerBall.png';
import stageBack from '../../Assets/StageBack.png';
import stageFront from '../../Assets/StageFront.png';
import stageMiddle from '../../Assets/StageMiddle.png';
import timeline from '../../Assets/TimeLine.png';
import face from '../../Assets/Face.png';
import Header from '../Styles/Header'
import Form from '../Usables/Forms/Form';
import ContactForm from '../Usables/ContactForm';
import axios from 'axios';

const Home = (props) => {
    const [submitted, setSubmitted] = useState(false);

    const onSubmit = (data) => {
        setSubmitted(true);
    }

    return (
        <main>
            <div className="hero">
                <div className="blue-back">
                <Header>Custom Web</Header>
                <Header><h2>Design and Development</h2></Header>
                <button onClick={() => window.scrollTo(0,document.body.scrollHeight)} className="getStarted">Get Started</button>
                </div>
            </div>
            <div className="container goals">
                <div class="text">
                    <Header className="title"><h2>You Can</h2></Header>
                    <p className="smallText">start by meeting with our team.  We will help create a plan to meet your business’s needs, based on your...</p>
                </div>
                <div className="paralaxs">
                    <div className="flex-row">
                        <Header className="blue">Goals</Header>
                        <div className="goalParalax">
                            <img alt='img' width="300px" src={goal} />
                            <Parallax className="paralax" y={[100, -300]} x={[80, -30]} tagOuter="figure">
                                <img alt='img' width="50px" src={ball} />
                            </Parallax>
                        </div>
                    </div>
                    <div className="flex-row">
                        <div className="audienceParalax">
                            <div class='stage'>
                                <div className='stageImgOne'> 
                                    <Parallax className="paralax" x={[-20, -75]} tagOuter="figure" >
                                        <img alt='img' className='stageImgTwo' width="150px" src={stageMiddle} />
                                    </Parallax>
                                    <Parallax className="paralax" x={[0, 75]} tagOuter="figure">
                                        <img alt='img' className='stageImgThree right' width="150px" src={stageMiddle} />
                                    </Parallax>
                                    <img alt='img' className='stageImgFour' width="300px" src={stageFront} />
                                </div>
                            </div>
                        </div>
                        <Header className="blue">Audience</Header>
                    </div>
                    <div className="flex-row">
                        <Header className="blue">And Timeline</Header>
                        <div className="timelineParalax">
                            <img alt='img' width="300px" src={timeline} />
                            <Parallax className="paralax" x={[-50, 50]} tagOuter="figure">
                                <img alt='img' class="face" width="50px" src={face} />
                            </Parallax>
                        </div>
                    </div>
                </div>
            </div>
            {!submitted ? <div className="container">
                {/* <Form submit={onSubmit} inputs={["Name", "Phone", "Email"]} idNames= {["name", "phone", "email"]}></Form> */}
                <ContactForm submit={onSubmit} />
            </div>: <> </>}
        </main>

    )
};

export default Home;