import React, {useState} from 'react';
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
        <div class='black center right'>
        <div id='hero'>
            <h1 class="hero-header">Contact Us.</h1>
            <p class="hero-paragraph">
            Whether you are a new or continuing partner, your satisfaction is our greatest concern. You can count on us for a fast and comprehensive reply! 
            </p>
        </div>
        </div>
          {!submitted ?
                  <ContactForm submit={onSubmit} background="white" home={true} inputs={["Name", "Phone", "Email"]} idNames= {["name", "phone", "email"]}></ContactForm>
              : <div className="thanks">Thanks! We will get back to you ASAP! </div>}
        <div id="thank-you">
          <h1 class="hero-header">Thank you.</h1>  
        </div>
      </div>
    )
  }