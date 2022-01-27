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
        <Header>Let's Get Started</Header>
      <div className="inputs">
      <div className="infoInputs">
      <Input
        id="name"
        type="name" 
        name="name"
        placeholder="Name"
        required
      />
      <Input
        id="phone number"
        type="phone number" 
        name="phone number"
        placeholder="Phone"
        required
      />
      <Input
        id="email"
        type="email" 
        name="email"
        placeholder="Email"
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