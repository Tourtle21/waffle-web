import React from 'react';
import Form from '../Usables/Forms/Form';
import ContactForm from '../Usables/ContactForm';
import { useHistory } from "react-router-dom";
import axios from 'axios';

const Success = (props) => {
    let history = useHistory();

    const onSubmit = (data) => {
        history.push('/');
    }

    return (
        <main>
            <div className="container" id="contact">
            Thanks! We will get back to your ASAP!
            </div>
        </main>

    )
};

export default Success;