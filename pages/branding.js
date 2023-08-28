import React, {useState, useEffect} from 'react';
import Link from 'next/link'
import Image from 'next/image';
import ContactForm from '../components/ContactForm'
export default function Home() {
  const [submitted, setSubmitted] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [checkpoint2, setCheckpoint2] = useState(129);
  const [checkpoint3, setCheckpoint3] = useState(394);
  const [checkpoint4, setCheckpoint4] = useState(694);
  const [checkpoint5, setCheckpoint5] = useState(944);

const onSubmit = (data) => {
  setSubmitted(true);
}

function handleWindowSizeChange() {
  setIsMobile(window.innerWidth < 750);
  if (window.innerWidth < 750) {
    setCheckpoint2(494);
    setCheckpoint3(794);
    setCheckpoint4(1144);
    setCheckpoint5(1294);
  } else {
    setCheckpoint2(129);
    setCheckpoint3(394);
    setCheckpoint4(694);
    setCheckpoint5(944);
  }
}

const [scroll, setScroll] = useState(false);
 useEffect(() => {
   window.addEventListener("scroll", () => {
     setScroll(window.scrollY);
   });
   handleWindowSizeChange();
   window.addEventListener('resize', handleWindowSizeChange);
    return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
        window.removeEventListener("scroll", () => {
          setScroll(window.scrollY);
        });
    }
 }, []);

  return (
    <div className="home">
      <div class='black center movable' style={{position: `${scroll > checkpoint2 && !isMobile ?'fixed': 'relative'}`, top: `${scroll > checkpoint5 ? checkpoint5 - scroll : '0'}px`}}>
        <div id='hero' class="servicehero hero-yellow">
            <h1 class="hero-header">Branding</h1>
            <p class="hero-paragraph">
            Are you looking for ways to build brand recognition and trust with your customers? Or perhaps you want to increase customer loyalty and differentiate your business from your competitors?
            </p>
        </div>
        </div>

        <div className="container main-container" style={{position:`${isMobile ? 'absolute' : scroll > checkpoint2 ? 'fixed' : 'relative'}`, top: `${isMobile ? 'initial' : scroll > checkpoint2 && scroll < checkpoint5 ? '290px': scroll > checkpoint5 ? checkpoint5 - scroll + 290 + "px" : '0px'}`}}>
          <h1 className="scroll-header">We Specialize In...</h1>
          <div className="info">
              <div className="info-image-text" style={{top: `-${scroll}px`, opacity: scroll > checkpoint2 ? `${(50 - (scroll - checkpoint2)) / 100}` : 1}}>
              <div className="service-image"><Image src='/images/branding.png' width="450" height="370" /></div>
                <p>We understand that a strong brand is crucial for building recognition and trust with your customers. That's why we specialize in delivering high-quality products or services with a recognizable brand identity that resonates with your target audience. By consistently delivering on your brand promise, we'll help you gain the trust of your customers and position your business as a leader in your industry.</p>
              </div>

              <div className="info-image-text" style={{top: `-${scroll}px`, opacity: scroll > checkpoint3 ? `${(50 - (scroll - checkpoint3)) / 100}` : 1}}>
              <div className="service-image"><Image src='/images/circles.png' width="570" height="500" /></div>
                <p>But building trust is just the beginning. We'll also help you increase customer loyalty by creating an emotional connection with your audience. By developing a brand that resonates with your customers on a deeper level, we'll help you create repeat business and generate positive word-of-mouth marketing.</p>
              </div>

              <div className="info-image-text" style={{top: `-${scroll}px`, opacity: scroll > checkpoint4 ? `${(50 - (scroll - checkpoint4)) / 100}` : 1}}>
              <div className="service-image"><Image src='/images/arrows.png' width="420" height="420" /></div>
                <p>And let's not forget about the competition. Our unique and well-developed brand strategies will help you differentiate your business from competitors, making it easier for customers to remember and choose you over others.</p>
              </div>

              <div className="info-image-text" style={{top: `-${scroll > checkpoint5 ? checkpoint5 : scroll}px`}}>
              <div className="service-image"><Image src='/images/tags.png' width="470" height="620" /></div>
                <p>Finally, our branding services can help increase the perceived value of your products or services, which can lead to higher profits and a stronger reputation in the market. By creating a strong brand that customers perceive as trustworthy and of high quality, they may be willing to pay a premium price for your offerings.</p>
              </div>
          </div>
        </div>
        <div className="container-filler"></div>
        <div className="container black">
          {!submitted ?
                <ContactForm submit={onSubmit} home={false} background="black" title="Don't settle for a mediocre website that fails to capture your brand's essence." inputs={["Name", "Phone", "Email"]} idNames= {["name", "phone", "email"]}></ContactForm>
            : <div className="thanks">Thanks! We will get back to you ASAP! </div>}
        </div>
        {scroll < checkpoint5 && <div className="blur"></div>}
    </div>
  )
}
