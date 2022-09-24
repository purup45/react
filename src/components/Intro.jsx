import React from 'react'
import styled from 'styled-components'
import AnimatedShapes from './AnimatedShapes';
import Man from './img/new.png'

const Container=styled.div`
height:calc(100vh-50px);
display:flex;
font-weight:bold;
padding:20px;
`;
const Left=styled.div`
width:60%;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`;
const Title=styled.h1`
font-weight:bold;
font-size:60px;
width:60%;
text-align:left;
`;

const Desc=styled.p`
width:60%;
font-size:20px;
font-weight:200;
;`

const Info=styled.div`
width:60%;
margin-top:50px;
display:flex;
justify-content:space-between;
align-items:center;
`;
const Button=styled.button`
border-radius:10px;
font-weight:bold;
color:white;
background-color:darkblue;
letter-spacing:2px;
border:none;
padding:15px;
cursor:pointer;
`;
const Contact=styled.div`
display:flex;
flex-direction:column;
`
const Phone = styled.span`
color:#f0667d;
font-weight:bold;
`;

const ContactText = styled.span`
color:gray;
margin-top:5px;
`;


const Right=styled.div`
width:40%;

`;
const Img=styled.img`

width:100%;
height:80%;
`;



const Intro = () => {
  return (
    <Container>
        <Left>
            <Title>Adventures in creative age</Title>
            <Desc>The age of innovation and invention has hit us.
                People need to be more focused in developing and 
                improving the technology currently at use
            </Desc>
            <Info>
                <Button>START A PROJECT</Button>
                <Contact>
                    <Phone>Call Us (975) 176 543 210</Phone>
                    <ContactText>For Any Questions and Queries</ContactText>
                </Contact>
            </Info>
           
        </Left>
        <Right>
            <Img src={Man} alt='' className='r-img'/></Right>
            <AnimatedShapes/>
    </Container>
  )
}

export default Intro