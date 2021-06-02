import styled from "styled-components";
const SlideShow = styled.div`
margin: 50px auto; 
  position: relative; 
  width: 240px; 
  height: 240px; 
  padding: 10px; 
  box-shadow: 0 0 20px rgba(0,0,0,0.4); 
  & > div {
    position: absolute; 
    top: 10px; 
    left: 10px; 
    right: 10px; 
    bottom: 10px;
    font-family: 'Roboto', sans-serif;
  }
`;

export default SlideShow;