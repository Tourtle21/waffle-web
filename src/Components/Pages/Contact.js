import React from 'react';
import Form from '../Usables/Forms/Form';
import ContactForm from '../Usables/ContactForm';
import { useHistory } from "react-router-dom";
import axios from 'axios';

const Contact = (props) => {
    let history = useHistory();

    const onSubmit = (data) => {
        history.push('/');
    }

    return (
        <main>
            <div className="container" id="contact">
            <ContactForm submit={onSubmit} inputs={["Name", "Phone", "Email"]} idNames= {["name", "phone", "email"]}></ContactForm>
            </div>
        </main>

    )
};

export default Contact;