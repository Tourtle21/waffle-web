import React from 'react';
import ContactForm from '../Usables/ContactForm';
import { useHistory } from "react-router-dom";
import {Helmet} from "react-helmet";

const Contact = () => {
    let history = useHistory();

    const onSubmit = (data) => {
        history.push('/');
    }

    return (
        <main>
            <Helmet> <title>Contact Us</title> <meta name="description" content="Contact our custom web development team here at WaffleTech to create a website, and we will discuss the cost, services, and design that will work best for you." />
            <meta name="keywords" content="Custom website design, Custom web design, Web design company, Web designer, Custom web design pricing, Custom web design cost, Custom web design services, Custom website builder, Custom web design prices, Custom web design and development, Custom website Website design, Web designers, Website designer, Best website builder, Create a website, Custom website development" />
            </Helmet>
            <div className="container" id="contact">
            <ContactForm submit={onSubmit} inputs={["Name", "Phone", "Email"]} idNames= {["name", "phone", "email"]}></ContactForm>
            </div>
        </main>

    )
};

export default Contact;