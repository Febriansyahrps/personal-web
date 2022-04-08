import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { scrollAnimation, leftAnimation, zoomOutAnimation } from "../animation";
import { useScroll } from "../useScroll";
import {
  faGithubSquare,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactImage from "../../assets/Contact-SALY-3D-Illustration-by-Alzea-Arafat.png";
import { colorKey } from "../GlobalStyle";

const { white, main, secondary, secondaryHover } = colorKey;

const ContactMe = () => {
  const { sources } = useSelector((state) => state.projectData);
  const { github, linkedin } = sources;

  const [element, controls] = useScroll();
  return (
    <ContactMeContainer
      variants={scrollAnimation}
      initial="hidden"
      animate={controls}
      ref={element}
    >
      <Content>
        <motion.img
          variants={zoomOutAnimation}
          src={ContactImage}
          alt="mailbox"
        />
        <BlockWrapper>
          <motion.h2 variants={leftAnimation}>
            Ready to Get Started <br /> With <span> Me </span> ? Let’s Talk
          </motion.h2>
          <ButtonContainer>
            <ContactMeButton variants={leftAnimation}>
              <Link to={"/contact"}>
                <h4>Contact Me</h4>
              </Link>
            </ContactMeButton>
            <SocialLinkedContainer variants={leftAnimation}>
              <p>Keep In Touch</p>
              <a href={linkedin} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a href={github} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithubSquare} />
              </a>
            </SocialLinkedContainer>
          </ButtonContainer>
        </BlockWrapper>
      </Content>
    </ContactMeContainer>
  );
};

const ContactMeContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  overflow: hidden;
  min-height: 80vh;
  margin: 100px 0;
  @media screen and (min-height: 900px) {
    min-height: 600px;
  }
`;
const Content = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 25px solid ${secondary};
  background: ${main};
  width: 85%;
  min-height: 500px;
  padding: 10px;
  border-radius: 5px;
  img {
    width: 350px;
    height: 350px;
  }
  h2 {
    color: ${white};
  }
  span {
    color: ${secondary};
  }
  br {
    display: none;
  }
  @media screen and (max-width: 1200px) {
    border: 20px solid ${secondary};
    padding: 5px;
    width: 90%;
  }
  @media screen and (max-width: 900px) {
    border: 15px solid ${secondary};
    img {
      width: 300px;
      height: 300px;
    }
  }
  @media screen and (max-width: 680px) {
    flex-direction: column;
  }
  @media screen and (max-width: 550px) {
    width: 90%;
    h2 {
      text-align: center;
    }
    br {
      display: block;
    }
    img {
      width: 250px;
      height: 250px;
    }
  }
  @media screen and (max-width: 320px) {
    img {
      width: 200px;
      height: 200px;
    }
  }
`;
const BlockWrapper = styled(motion.div)`
  margin-left: 25px;
  width: 50%;
  @media screen and (max-width: 680px) {
    margin: 0;
    width: 85%;
    flex-direction: column;
  }
  @media screen and (max-width: 550px) {
    width: 100%;
  }
`;
const ButtonContainer = styled(motion.div)`
  @media screen and (max-width: 680px) {
    display: flex;
  }
  @media screen and (max-width: 550px) {
    flex-direction: column;
  }
`;
const ContactMeButton = styled(motion.div)`
  margin: 25px 0;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: ${main};
    background: ${secondary};
    width: 200px;
    height: 75px;
    border-radius: 75px;
    transition: all ease 0.25s;
    h4 {
      transition: all ease 0.25s;
    }
    &:hover {
      background: ${secondaryHover};
      h4 {
        font-size: 20px;
      }
    }
  }
  @media screen and (max-width: 900px) {
    display: block;
    a {
      width: 175px;
      height: 60px;
      &:hover {
        h4 {
          font-size: 20px;
        }
      }
    }
  }
  @media screen and (max-width: 680px) {
    display: block;
    margin-right: 50px;
    a {
      width: 150px;
      height: 50px;
      &:hover {
        h4 {
          font-size: 18px;
        }
      }
    }
  }
  @media screen and (max-width: 550px) {
    display: flex;
    justify-content: center;
    margin-right: 0;
    a {
      &:hover {
        h4 {
          font-size: 16px;
        }
      }
    }
  }
`;

const SocialLinkedContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  p {
    color: ${white};
  }
  a {
    text-decoration: none;
    color: ${white};
    margin: 0 0 0 10px;
    transition: all ease 0.25s;
    svg {
      font-size: 30px;
    }
    &:hover {
      color: ${secondaryHover};
    }
  }
  @media screen and (max-width: 550px) {
    justify-content: center;
  }
`;

export default ContactMe;
