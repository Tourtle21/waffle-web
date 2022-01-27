import styled from "styled-components";
const Form = styled.form`
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content:space-around;
    height:500px;
    width:90vw;
    color:black;
    position: relative;
    border-radius: 20px;
    right: -15vw;
    top: -100px;
  background-color: #f3f3f3;
  font-family: 'Roboto', sans-serif;
  @media (max-width: 750px) {
    height:600px;
    border-radius: 0px;
    right: 0vw;
    width:100vw;
    padding:30px;
    box-sizing:border-box;
  }
  & > div{ & textarea{
    font-family: 'Roboto', sans-serif;
    padding:15px;
    height:70%;
    width: 35%;
  }
  & > h1 {
      margin: 0;
  }
}
`;

export default Form;