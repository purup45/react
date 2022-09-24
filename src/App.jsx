import styled,{ css } from "styled-components"
import Contact from "./components/Contact";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Price from "./components/Price";
import Service from "./components/Service";

const Container =styled.div`
  height:100vh;
  overflow:hidden;
  position:relative;
  `
const Shape=css`
  top:0;
  left:0;
  width:100%;
  height:100%;
  position:absolute;
  z-index:-1;
`
const IntroShape = styled.div`
  ${Shape}
  clip-path: polygon(67% 0, 100% 0%, 100% 100%, 55% 100%);
  background-color: crimson;
`;

const FeatureShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 55% 0, 33% 100%, 0 100%);
  background-color: pink;
  
`;
const ServiceShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 33% 0, 75% 100%, 25% 100%, 0% 50%);
  background-color: lightblue;
  
`;
const PriceShape = styled.div`
  ${Shape}
  clip-path: polygon(75% 0, 100% 50%, 100% 100%, 0% 100%);
  background-color:crimson;
  
`;

const App = () => {
  return (
  <>
    <Container>
     <Navbar/>
     <Intro/>
     <IntroShape/>
    </Container>
    <Container>
     <Feature/>
     <FeatureShape/>
    </Container>
    <Container>
     <Service/>
     <ServiceShape/>
    </Container>
    <Container>
     <Price/>
     <PriceShape/>
    </Container>
    <Container>
     <Contact/>
     <Footer/>
    </Container>
  </>
  )
};

export default App;