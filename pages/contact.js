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
          <div className="contactpage">
          {!submitted ?
                  <ContactForm submit={onSubmit} inputs={["Name", "Phone", "Email"]} idNames= {["name", "phone", "email"]}></ContactForm>
              : <div className="thanks">Thanks! We will get back to you ASAP! </div>}
           </div>
      </div>
    )
  }