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
                {/* <Form submit={onSubmit} inputs={["Name", "Phone", "Email"]} idNames= {["name", "phone", "email"]}></Form> */}
                <ContactForm submit={onSubmit} />
            </div>
        </main>

    )
};

export default Contact;