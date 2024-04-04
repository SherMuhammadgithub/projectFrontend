import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

import img1 from '../assets/Images/tap-here.png';
import { Link } from 'react-router-dom';

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
   height: 60vh; 

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  /* background-color: ${(props) => props.theme.text}; */
`;

const Overlay = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30vw;
  height: 70vh;
  box-shadow: 0 0 0 5vw ${(props) => props.theme.text};
  border: 3px solid black;
overflow:hidden;
  z-index: 11;

  @media (max-width: 70em) {
  width: 40vw;
    top:38%;
    height: 80vh;
  }

  @media (max-width: 64em) {
  width: 50vw;
  box-shadow: 0 0 0 60vw ${(props) => props.theme.text};

    height: 80vh;
  }
  @media (max-width: 48em) {
  width: 60vw;

    height: 80vh;
  }
  @media (max-width: 30em) {
  width: 80vw;

    height: 60vh;
  }
`;

const Container = styled.div`
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 25vw;
  height: auto;
  /* background-color: yellow; */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 64em) {
  width: 30vw;


  }
  @media (max-width: 48em) {
  width: 40vw;

  }
  @media (max-width: 30em) {
  width: 60vw;

  }
`;

const Title = styled(motion.h1)`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: 'Kaushan Script';
  font-weight: 300;
  /* text-transform: capitalize; */
  color: ${(props) => props.theme.body};
  text-shadow: 1px 1px 1px ${(props) => props.theme.text};

  position: absolute;
  top: 2rem;
  left: 1rem;
  z-index: 15;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
    top:4rem;

  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  
  }
`;
const Text = styled.div`
  width: 20%;
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  position: absolute;
  padding: 2rem;
  top: 0;
  right: 0;
  z-index: 11;

  @media (max-width: 48em) {
    display: none;
  
  }
 
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5rem 0;

  h2 {
    cursor: pointer;
  }

  img {
    width: 100%;
    height: auto;
    z-index: 5;
  }
`;
const Photos = ({ img, name }) => {
  return (
    <Item>
      <img width="400" height="600" src={img} alt={name} />
      <h2>{name}</h2>
    </Item>
  );
};

const NewArrival = () => {
  return (
    <Section   className="new-arrival">
      <Overlay />

      <Title
        data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal"
      >
        Take a  Look
      </Title>

      <Container>
       <Photos img={img1} name="take a look and manage yourself" />
      </Container>
      

      <Text data-scroll data-scroll-speed="-4">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro temporibus neque, numquam delectus totam reprehenderit beatae facere.
        <br />
        <br />
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, laborum!
        <br />
        <br />
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas porro laborum voluptatem illum ad doloribus expedita dicta! Et, esse vero.
      </Text>
    </Section>
  );
};

export default NewArrival;
