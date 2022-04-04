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
import ContactImage from "../../assets/Nikuu-3d-Illustration-by-Paperpillar.png";

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
  margin: 25px 0 0 25px;
  box-shadow: -25px -25px #00efee;
  background: #022f95;
  width: 80%;
  min-height: 500px;
  padding: 10px;
  border-radius: 5px;
  img {
    width: 350px;
    height: 350px;
  }
  h2 {
    color: #fafafa;
  }
  span {
    color: #00efee;
  }
  br {
    display: none;
  }
  @media screen and (max-width: 1200px) {
    width: 85%;
  }
  @media screen and (max-width: 900px) {
    margin: 20px 0 0 20px;
    box-shadow: -20px -20px #00efee;
    img {
      width: 300px;
      height: 300px;
    }
  }
  @media screen and (max-width: 680px) {
    margin: 15px 0 0 15px;
    box-shadow: -15px -15px #00efee;
    img {
      width: 250px;
      height: 250px;
    }
  }
  @media screen and (max-width: 550px) {
    width: 80%;
    flex-direction: column;
    h2 {
      text-align: center;
    }
    br {
      display: block;
    }
  }
  @media screen and (max-width: 320px) {
    width: 90%;
    img {
      width: 200px;
      height: 200px;
    }
  }
`;
const BlockWrapper = styled(motion.div)`
  width: 50%;
  @media screen and (max-width: 550px) {
    width: 100%;
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
    color: #022f95;
    background: #00efee;
    width: 200px;
    height: 75px;
    border-radius: 75px;
    transition: all ease 0.25s;
    h4 {
      transition: all ease 0.25s;
    }
    &:hover {
      background: #40fdfd;
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
    color: #fafafa;
  }
  a {
    text-decoration: none;
    color: #fafafa;
    margin-left: 10px;
    transition: all ease 0.25s;
    svg {
      font-size: 30px;
    }
    &:hover {
      color: #00efee;
    }
  }
  @media screen and (max-width: 550px) {
    justify-content: center;
  }
`;

export default ContactMe;
