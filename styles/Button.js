import styled from "styled-components";
const Button = styled.button`
display: flex;
align-items:center;
justify-content: center;
color: white;
font-family: 'Roboto', sans-serif;
width: 200px;
height:50px;
outline:none;
background: rgb(129, 203, 162);
border:none;
border-radius:5px;
cursor: pointer;
font-size: 1.2em;
margin-top: 30px;
box-shadow: inset 0 0 0 0 #54b3d6;
transition: color .25s ease-in-out, box-shadow .25s ease-in-out;
&:hover {
    box-shadow: inset 200px 0 0 0 #54b3d6;
  }
`;

export default Button;