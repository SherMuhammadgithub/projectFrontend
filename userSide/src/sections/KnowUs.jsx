import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React from "react";
import styled from "styled-components";

import img3 from "../assets/Images/money.png";



const Section = styled(motion.section)`
  min-height: 100vh;
  height: auto;
  /* width: 80vw; */
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  position: relative;

  /* background-color: orange; */
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Kaushan Script";
  font-weight: 300;
  /* text-transform: capitalize; */
  color: ${(props) => props.theme.text};
  text-shadow: 1px 1px 1px ${(props) => props.theme.body};

  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 11;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Left = styled.div`
  width: 35%;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  min-height: 100vh;
  z-index: 10;

  position: relative;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 300;
    width: 80%;
    margin: 0 auto;
  }

  @media (max-width: 64em) {
    p {
      font-size: ${(props) => props.theme.fontmd};
    }
  }

  @media (max-width: 48em) {
    width: 60%;
    position:fixed;
    p {
      font-size: ${(props) => props.theme.fontsm};
    }
  }
  @media (max-width: 30em) {
    p {
      font-size: ${(props) => props.theme.fontxs};
    }
  }
`;
const Right = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
background-color: ${(props) => props.theme.grey};
min-height: 100vh;
text-align: center; /* Center inline or inline-block level elements */

@media (max-width: 48em) {
  visibility:hidden;
  
  p {
    font-size: ${(props) => props.theme.fontsm};
  }
}
`;

const Item = styled(motion.div)`
  display: inline-block;
  width: 20rem;
  /* background-color: black; */
  margin-right: 6rem;
  img {
    width: 100%;
    height: auto;
    cursor: pointer;
    mix-blend-mode: multiply;
  }

  h1 {
    font-weight: 500;
    text-align: center;
    cursor: pointer;
  }

  @media (max-width: 48em) {
    width: 15rem;
  }
`;

const Product = ({ img, title = "" }) => {
  return (
    // x: 100, y: -100
    <Item
      initial={{ filter: "grayscale(100%)" }}
      whileInView={{ filter: "grayscale(0%)" }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: "all" }}
    >
      <img width="400" height="600" src='https://cdn-icons-png.flaticon.com/128/3707/3707999.png' alt={title} />
      <h1>{title}</h1>
    </Item>
  );
};

const KnowUs = () => {
  gsap.registerPlugin(ScrollTrigger);

  return (
    <Section id="KnowUs">
      <Title data-scroll data-scroll-speed="-1">
        Xpense Tracker
      </Title>
      <Left>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, hic omnis doloremque nam quaerat eveniet animi vitae placeat ut qui deleniti rerum sunt excepturi consequuntur. 
          <br /> <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio iste incidunt tempora doloremque rem fuga dolorem eligendi repudiandae delectus asperiores a doloribus numquam placeat, praesentium inventore modi unde officia architecto magni itaque
        </p>
      </Left>
      <Right data-scroll >
        <Product title="Don't be Stressfull" />
      </Right>
    </Section>
  );
};

export default KnowUs;
