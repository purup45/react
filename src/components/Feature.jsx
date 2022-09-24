import React from 'react'

import styled from 'styled-components';
import AnimatedShapes from './AnimatedShapes';
import Phone from './img/phone.png'

const Container=styled.div`
display:flex;

`;
const Left=styled.div`
width:50%;
overflow:auto;
`;
const Img=styled.img`
width:80%;
height:70%;
margin:10px;

`;
const Right=styled.div`
width:50%;
height:100%;
display:flex;
flex-direction:column;
justify-content:center;


`;
const Title=styled.h1`
margin-top:100px;
font-size:70px;
`;
const SubTitle=styled.span`
font-size:24px;
font-style:italic;
margin-top:30px;
color:#333;
`;
const Desc=styled.p`
font-size:20px;
color:#777;
margin-top:30px;`

const Button=styled.button`
color:white;

width:150px;
font-size:20px;
border-radius:10px;
border:none;
padding:15px 20px;
background-color:darkblue;
margin-top:20px;
cursor:pointer;
`;


const Feature = () => {
  return (
    
    <Container>
        <Left><Img src={Phone}/></Left>
        <Right>
            <Title>
                <b>good</b> design
                <br/>
                <b>good</b> business
            </Title>
            <SubTitle>We know that good design means good business.</SubTitle>
            <Desc>
          We help our clients succeed by creating brand identities, digital
          experiences, and print materials that communicate clearly, achieve
          marketing goals, and look fantastic.
            </Desc>
            <Button>Learn More</Button>
        </Right>
        <AnimatedShapes/>
    </Container>
    
  )
}

export default Feature