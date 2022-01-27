import React, {useState} from 'react';
import Link from 'next/link'
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
      <div className="service-hero">
          <div className="service-title">
              <div className="service-header">Branding</div>
              <div className="service-subheader">Build trust, and grow your business with a brand that works</div>
              <div className="service-text">We know you need to create a strong, positive perception for your company, this is acheived by combining elements such as logo, design, mission statement, and a consistent theme, whatever you need, we've got you covered.</div>
          </div>
          <div className="designImg img-blue"></div>
      </div>
      <div className="servicecont"><h1>Branding</h1></div>
      <div className="serviceBox red first">
          <div>First,</div>
          <div>We'll set up a time for you to meet with our team, so we can get to know you and your business, we'll figure out your needs, and your audience so we know what we can do, and the brand and style to match your Idea.</div>
      </div>
      <div className="serviceBox blue second">
          <div>Then,</div>
          <div>We'll get to work, we'll impliment the industries best practices, so you end up with a product using the newest cutting edge technologies. Our goal is to see you succeed, so we'll work on your business like it's our own, and give you an edge over the competition. </div>
      </div>
      <div className="serviceBox green third">
          <div>Finally,</div>
          <div>We'll deliver our results, we'll walk you through everything we did, and everything you can expect to see happen from it. We'll answer any of the questions that you have, and we'll keep in touch to ensure your continued success.</div>
      </div>
      <Link href='/contact'><div className='serviceButton'>Let's Get Started</div></Link>
        {!submitted ?
                <ContactForm submit={onSubmit} inputs={["Name", "Phone", "Email"]} idNames= {["name", "phone", "email"]}></ContactForm>
            : <div className="thanks">Thanks! We will get back to you ASAP! </div>}
    </div>
  )
}
