import { useSelector } from "react-redux";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  fadeScrollAnimation,
  leftAnimation,
  pageAnimation,
  rightAnimation,
  zoomOutAnimation,
} from "../components/animation";
import { useScrollShowOnly } from "../components/useScroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import EmailForm from "../components/EmailForm";

const Contact = () => {
  const { sources } = useSelector((state) => state.projectData);
  const { github, linkedin, email, phone_number } = sources;

  const [element, controls] = useScrollShowOnly();

  return (
    <ContactContainer
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <TitleHeader>
        <motion.h1 variants={rightAnimation}>
          Contact <span>Me</span>
        </motion.h1>
        <Line variants={zoomOutAnimation} />
        <motion.p variants={leftAnimation}>
          <span>Have any questions ?</span> Please feel free to contact me in
          email or phone number down below
        </motion.p>
      </TitleHeader>
      <EmailForm />
      <DescriptionContainer
        variants={fadeScrollAnimation}
        initial="hidden"
        animate={controls}
        ref={element}
      >
        <DescriptionTitle>
          <motion.h2 variants={rightAnimation}>
            Phone and Email <span>Address</span>
          </motion.h2>
        </DescriptionTitle>
        <ContactSection>
          <ContactList variants={leftAnimation}>
            <h3>Email</h3>
            <h4>
              <span>{email}</span>
            </h4>
            <hr />
          </ContactList>
          <ContactList variants={leftAnimation}>
            <h3>Phone Number</h3>
            <h4>
              <span>{phone_number}</span>
            </h4>
            <hr />
          </ContactList>
          <SocialLinkedContainer variants={leftAnimation}>
            <p>Keep In Touch</p>
            <a href={linkedin} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href={github} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithubSquare} />
            </a>
          </SocialLinkedContainer>
        </ContactSection>
      </DescriptionContainer>
    </ContactContainer>
  );
};

const ContactContainer = styled(motion.div)`
  overflow-x: hidden;
  padding: 25px 0 100px 0;
  margin: 0 10%;
  @media screen and (max-width: 1200px) {
    margin: 0 7%;
  }
  @media screen and (max-width: 900px) {
    flex-direction: column;
    margin: 0 10%;
  }
  @media screen and (max-width: 550px) {
    margin: 0 7%;
  }
`;
const TitleHeader = styled(motion.div)`
  display: flex;
  align-items: center;
  p {
    width: 45%;
  }
  span {
    color: #022f95;
  }
  padding-bottom: 50px;
  @media screen and (max-width: 700px) {
    align-items: flex-start;
    flex-direction: column;
    p {
      width: 100%;
    }
  }
`;
const Line = styled(motion.div)`
  margin: 0 20px;
  height: 75px;
  border-left: 5px solid #022f95;
  opacity: 50%;
  @media screen and (max-width: 900px) {
    margin: 0 15px;
  }
  @media screen and (max-width: 700px) {
    margin: 5px 0;
    width: 50%;
    min-width: 200px;
    height: 0;
    border-top: 5px solid #022f95;
    border-left: none;
  }
`;
const DescriptionContainer = styled(motion.div)`
  display: flex;
  margin-top: 50px;
  @media screen and (max-width: 750px) {
    flex-direction: column;
  }
`;
const DescriptionTitle = styled(motion.div)`
  width: 50%;
  span {
    color: #022f95;
  }
  @media screen and (max-width: 750px) {
    width: 100%;
  }
`;
const ContactSection = styled(motion.div)`
  width: 50%;
  @media screen and (max-width: 750px) {
    width: 100%;
    margin-top: 25px;
  }
`;
const ContactList = styled(motion.div)`
  margin-bottom: 50px;
  h3 {
    color: #022f95;
  }
  h4 {
    font-weight: normal;
    margin: 20px 0 10px 0;
  }
  hr {
    border: 2px solid #022f95;
    width: 100%;
  }
`;
const SocialLinkedContainer = styled(motion.div)`
  margin-top: 50px;
  display: flex;
  align-items: center;
  p {
    font-weight: bold;
    color: #022f95;
  }
  a {
    text-decoration: none;
    color: #022f95;
    margin-left: 10px;
    transition: all ease 0.25s;
    svg {
      font-size: 40px;
    }
    &:hover {
      color: #0035b5;
    }
  }
`;

export default Contact;
