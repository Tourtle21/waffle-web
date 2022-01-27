import React from 'react';
import StyledInput from "../../Styles/Input";

const Input = (props) => (
        <StyledInput className="input" type="text" onChange={(e) => props.setSubmitted({...props.submitted, [props.id]:e.target.value})} placeholder={props.input} id={props.submitted[input]} name={props.submitted[input]}></StyledInput>
    )
};


export default Input;