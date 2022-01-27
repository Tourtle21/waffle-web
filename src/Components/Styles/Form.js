import styled from "styled-components";
const Form = styled.form`
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content:center;
    height:500px;
    width:100vw;
    color:black;
    padding:40px;
    position: relative;
  background-color: #f3f3f3;
  font-family: 'Roboto', sans-serif;
  @media (max-width: 600px) {
    height:600px;
  }
  & > div{ & textarea{
    font-family: 'Roboto', sans-serif;
    padding:15px;
    height:80%;
  }
}
`;

export default Form;