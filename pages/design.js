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

 console.log(checkpoint2);

  return (
    <div className="home">
      <div class='black center movable' style={{position: `${scroll > checkpoint2 && !isMobile ?'fixed': 'relative'}`, top: `${scroll > checkpoint5 ? checkpoint5 - scroll : '0'}px`}}>
        <div id='hero' class="servicehero">
            <h1 class="hero-header">Design</h1>
            <p class="hero-paragraph">
            Looking for a brand new website design? Or just wanting to update your current website design to a new/modern look? We got you. Our skilled team can design a site to match your unique brand.
            </p>
        </div>
        </div>

        <div className="container main-container" style={{position:`${isMobile ? 'absolute' : scroll > checkpoint2 ? 'fixed' : 'relative'}`, top: `${isMobile ? 'initial' : scroll > checkpoint2 && scroll < checkpoint5 ? '290px': scroll > checkpoint5 ? checkpoint5 - scroll + 290 + "px" : '0px'}`}}>
          <h1 className="scroll-header">We Specialize In...</h1>
          <div className="info">
              <div className="info-image-text" style={{top: `-${scroll}px`, opacity: scroll > checkpoint2 ? `${(50 - (scroll - checkpoint2)) / 100}` : 1}}>
                <div className="service-image"><Image src='/images/design.png' width="500" height="500" /></div>
                <p>Creating stunning, user-friendly websites that showcase your brand and help you stand out in a crowded market. With our expertise in design, we'll work with you to create a website that not only looks great but also functions seamlessly, making it easy for your customers to navigate and find the information they need.</p>
              </div>

              <div className="info-image-text" style={{top: `-${scroll}px`, opacity: scroll > checkpoint3 ? `${(50 - (scroll - checkpoint3)) / 100}` : 1}}>
              <div className="service-image"><Image src='/images/magnifying.png' width="580" height="500" /></div>
                <p>But we don't just stop at aesthetics. We also focus on optimizing your website for search engines, making it easier for potential customers to find you online. By incorporating the latest SEO techniques and best practices, we'll help you achieve higher rankings on search engine results pages, which can lead to more website traffic and ultimately more customers.</p>
              </div>

              <div className="info-image-text" style={{top: `-${scroll}px`, opacity: scroll > checkpoint4 ? `${(50 - (scroll - checkpoint4)) / 100}` : 1}}>
              <div className="service-image"><Image src='/images/phone.png' width="420" height="500" /></div>
                <p>And with our mobile-responsive design, your website will look great and function flawlessly on all devices, including smartphones and tablets. This ensures that your customers can access your website from anywhere, at any time, increasing your visibility and reach.</p>
              </div>

              <div className="info-image-text" style={{top: `-${scroll > checkpoint5 ? checkpoint5 : scroll}px`}}>
              <div className="service-image"><Image src='/images/computer.png' width="480" height="400" /></div>
                <p>But most importantly, we'll work closely with you to understand your unique needs and goals, and create a website that reflects your brand and resonates with your target audience. By combining our design expertise with your vision, we'll create a website that not only looks great but also drives business growth.</p>
              </div>
          </div>
        </div>
        <div className="container-filler"></div>
        <div className="container black">
          {!submitted ?
                <ContactForm submit={onSubmit} background="black" home={false} title="Don't settle for a mediocre website that fails to capture your brand's essence." inputs={["Name", "Phone", "Email"]} idNames= {["name", "phone", "email"]}></ContactForm>
            : <div className="thanks">Thanks! We will get back to you ASAP! </div>}
        </div>
        {scroll < checkpoint5 && <div className="blur"></div>}
    </div>
  )
}
