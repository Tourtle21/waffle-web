import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Form from '../styles/Form'
import Header from '../styles/Header'
import Input from '../styles/Input'
import Button from '../styles/Button';

const ContactForm = (props) => {
  const [state, handleSubmit] = useForm("xzbyewko");

  if (state.succeeded) {
      props.submit();
  }

  return (
      <Form onSubmit={handleSubmit}>
        <Header>{props.title}</Header>
        <p class="hero-paragraph">{props.home ? "It’s really simple. Just fill out your contact information, give us a short description of what you want to accomplish, and we will contact you within 24 hrs!" : "Contact us today to learn more about our web design services and how we can help take your business to the next level! Just fill out your contact information, give us a short description of what you want to accomplish, and we will contact you within 24 hrs!"}</p>

      <div className="inputs">
      <div className="infoInputs">
      <Input
        id="name"
        type="name" 
        name="name"
        placeholder="Name"
        style={{background: props.background, color: props.background === "white" ? "black" : "white"}}
        required
      />
      <Input
        id="phone number"
        type="phone number" 
        name="phone number"
        placeholder="Phone"
        style={{background: props.background, color: props.background === "white" ? "black" : "white"}}
        required
      />
      <Input
        id="email"
        type="email" 
        name="email"
        placeholder="Email"
        style={{background: props.background, color: props.background === "white" ? "black" : "white"}}
        required
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      </div>
      <textarea
        rows="10"
        cols="30"
        id="message"
        name="message"
        placeholder="Description"
        style={{background: props.background, color: props.background === "white" ? "black" : "white"}}
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      </div>  

      <Button className={state.submitting ? "submitting" : ""} type="submit" disabled={state.submitting}>
        {state.submitting ? "Submitting" : "Submit"}
      </Button>
    </Form>
  );
}

export default ContactForm;