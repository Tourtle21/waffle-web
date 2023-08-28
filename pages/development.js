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
        <div id='hero' class="servicehero hero-red">
            <h1 class="hero-header">Development</h1>
            <p class="hero-paragraph">
            Looking for new ways to help streamline your business processes, enhance customer experience, increase scalability, and gain a competitive advantage?
            </p>
        </div>
        </div>

        <div className="container main-container" style={{position:`${isMobile ? 'absolute' : scroll > checkpoint2 ? 'fixed' : 'relative'}`, top: `${isMobile ? 'initial' : scroll > checkpoint2 && scroll < checkpoint5 ? '290px': scroll > checkpoint5 ? checkpoint5 - scroll + 290 + "px" : '0px'}`}}>
          <h1 className="scroll-header">We Specialize In...</h1>
          <div className="info">
              <div className="info-image-text" style={{top: `-${scroll}px`, opacity: scroll > checkpoint2 ? `${(50 - (scroll - checkpoint2)) / 100}` : 1}}>
              <div className="service-image"><Image src='/images/development.png' width="450" height="370" /></div>
                <p>Developing custom software solutions and implementing automation tools that can streamline your internal processes and improve efficiency. By reducing manual labor and increasing productivity, we can help you save time and money while achieving better results.</p>
              </div>

              <div className="info-image-text" style={{top: `-${scroll}px`, opacity: scroll > checkpoint3 ? `${(50 - (scroll - checkpoint3)) / 100}` : 1}}>
              <div className="service-image"><Image src='/images/circle.png' width="600" height="600" /></div>
                <p>But that's not all. We can also enhance the customer experience by providing easy-to-use online platforms and applications that make it easier for customers to interact with your business. From mobile apps to online ordering systems and chatbots, we'll help you provide your customers with a seamless experience that will keep them coming back for more.</p>
              </div>

              <div className="info-image-text" style={{top: `-${scroll}px`, opacity: scroll > checkpoint4 ? `${(50 - (scroll - checkpoint4)) / 100}` : 1}}>
              <div className="service-image"><Image src='/images/graph.png' width="420" height="420" /></div>
                <p>And as your business grows, we'll ensure that your technology can keep up by developing scalable solutions that can handle more customers, data, and transactions without the need for additional physical infrastructure. Whether you need a cloud-based infrastructure or other innovative solutions, we've got you covered.</p>
              </div>

              <div className="info-image-text" style={{top: `-${scroll > checkpoint5 ? checkpoint5 : scroll}px`}}>
              <div className="service-image"><Image src='/images/light.png' width="480" height="540" /></div>
                <p>But most importantly, we can help you gain a competitive advantage by developing innovative and unique solutions that set your business apart from the rest. By investing in research and development, we can help you create products and services that are not available from competitors, making your business stand out in the market and attract new customers while retaining existing ones.</p>
              </div>
          </div>
        </div>
        <div className="container-filler"></div>
        <div className="container black">
          {!submitted ?
                <ContactForm submit={onSubmit} home={false} background="black" title="Don't settle for a mediocre website that fails to capture your brand's essence" inputs={["Name", "Phone", "Email"]} idNames= {["name", "phone", "email"]}></ContactForm>
            : <div className="thanks">Thanks! We will get back to you ASAP! </div>}
        </div>
        {scroll < checkpoint5 && <div className="blur"></div>}
    </div>
  )
}
