// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Contact from '../Pages/Contact';
import Form from '../Styles/Form'
import Header from '../Styles/Header'
import Input from '../Styles/Input'
import Button from '../Styles/Button';
const ContactForm = (props) => {
  const [state, handleSubmit] = useForm("xzbyewko");
  if (state.succeeded) {
      props.submit();
      return <p>Thanks for joining!</p>;
  }
  return (
      <Form onSubmit={handleSubmit}>
        <Header className="blue">Let's Get Started</Header>
      <div className="inputs">
      <div className="infoInputs">
      <Input
        id="name"
        type="name" 
        name="name"
        placeholder="Name"
      />
      <Input
        id="phone number"
        type="phone number" 
        name="phone number"
        placeholder="Phone"
      />
      <Input
        id="email"
        type="email" 
        name="email"
        placeholder="Email"
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
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      </div>  

      <Button type="submit" disabled={state.submitting}>
        Submit
      </Button>
    </Form>
  );
}

export default ContactForm;