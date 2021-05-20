import React from 'react';
import Form from '../Usables/Forms/Form';
import { useHistory } from "react-router-dom";
import axios from 'axios';

const Contact = (props) => {
    let history = useHistory();

    const onSubmit = (data) => {
        console.log(data);
        axios.post('/email', data)
        .then(() => {
            history.push('/');
        }).catch((err) => {
            console.log(err);
        })
    }

    return (
        <main>
            <div className="container" id="contact">
                <Form submit={onSubmit} inputs={["Name", "Phone", "Email"]} idNames= {["name", "phone", "email"]}></Form>
            </div>
        </main>

    )
};

export default Contact;