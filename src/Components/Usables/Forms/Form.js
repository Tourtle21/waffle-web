import React, {useState} from 'react';
import Input from "./Input";
import Button from "../../Styles/Button";
import StyledForm from "../../Styles/Form";
import Header from '../../Styles/Header';

const Form = (props) => {
    const [submitted, setSubmitted] = useState({});

    return (
        <StyledForm>
            <Header className="blue">Let's Get Started</Header>
            <div className="inputs">
                <div className='infoInputs'>
                    {
                    props.inputs.map( (input, i) => (
                        <Input submitted={submitted} setSubmitted={setSubmitted} input={input} id={props.idNames[i]}/>
                    ))
                    }
                </div>
            <textarea rows="10" cols="30" onChange={(e) => setSubmitted({...submitted, description:e.target.value})} placeholder="description"></textarea>
            </div>
            <Button onClick={() => props.submit(submitted)} type="submit" value="Submit">Submit</Button>
        </StyledForm>
    )
};

export default Form;