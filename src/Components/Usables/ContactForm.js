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
  const onSubmit = (e) => {
    props.submit();
    handleSubmit(e);
  }
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
      <Form onSubmit={(e) => onSubmit(e)}>
        <Header className="blue">Want a beautiful website? Fill in this form :)</Header>
      <div className="inputs">
      <div className="infoInputs">
      <Input
        id="name"
        type="name" 
        name="name"
        placeholder="name"
      />
      <Input
        id="phone number"
        type="phone number" 
        name="phone number"
        placeholder="phone number"
      />
      <Input
        id="email"
        type="email" 
        name="email"
        placeholder="email"
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