import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { useScroll } from "../useScroll";
import { fadeAnimation, leftAnimation, scrollAnimation } from "../animation";
import arrowIcon from "../../assets/north-arrow.svg";
import ProfileImage from "./ProfileImage";

const LandingPage = () => {
  const { sources } = useSelector((state) => state.projectData);
  const { github, linkedin } = sources;

  const [element, controls] = useScroll();
  return (
    <LandingPageContainer
      variants={scrollAnimation}
      initial="hidden"
      animate={controls}
      ref={element}
    >
      <ImageSection>
        <ProfileImage />
      </ImageSection>
      <DescriptionSection>
        <motion.h3 variants={leftAnimation}>
          Hi there , I’m <span>Febriansyah Rizqi</span>
        </motion.h3>
        <motion.h1 variants={leftAnimation}>Front-end Web Developer</motion.h1>
        <motion.h3 variants={leftAnimation}>based in Indonesia</motion.h3>
        <SummaryText variants={leftAnimation}>
          <SmallLine></SmallLine>
          <p>
            Creative and passionate <span> website developer </span>that
            specialist in front-end development.
          </p>
        </SummaryText>
        <ButtonContainer variants={fadeAnimation}>
          <ContactMeButton>
            <Link to={"/contact"}>
              <h4>Let’s Talk</h4> <img src={arrowIcon} alt="arrow" />
            </Link>
          </ContactMeButton>
          <SocialLinked>
            <a href={linkedin} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href={github} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </SocialLinked>
        </ButtonContainer>
      </DescriptionSection>
    </LandingPageContainer>
  );
};

const LandingPageContainer = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  margin: 0 5%;
  overflow: hidden;
  @media screen and (max-width: 550px) {
    display: block;
    margin: 0 7%;
  }
  @media screen and (max-width: 300px) {
    margin: 0 5%;
  }
  @media screen and (min-height: 1001px) {
    @media screen and (max-width: 1000px) {
      margin: 0 10%;
      display: block;
      h1 {
        font-size: 75px;
      }
    }
  }
`;
const ImageSection = styled(motion.div)`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 550px) {
    width: 100%;
    min-height: 350px;
  }
  @media screen and (min-height: 1001px) {
    @media screen and (max-width: 1000px) {
      padding-top: 25px;
      width: 100%;
    }
  }
  @media screen and (min-height: 1101px) {
    @media screen and (max-width: 1000px) {
      padding-top: 50px;
    }
  }
`;
const DescriptionSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 75px 0;
  width: 50%;
  h1 {
    padding: 10px 0;
  }
  h3 {
    margin-left: 5px;
  }
  span {
    color: #022f95;
  }
  @media screen and (max-width: 1200px) {
    margin: 50px 0;
  }
  @media screen and (max-width: 900px) {
    margin: 25px 0;
  }
  @media screen and (max-width: 680px) {
    margin: 0;
    h3 {
      margin-left: 2px;
    }
  }
  @media screen and (max-width: 550px) {
    width: 100%;
    margin: 20px 0 50px 0;
  }
  @media screen and (min-height: 1001px) {
    @media screen and (max-width: 1000px) {
      width: 100%;
    }
  }
`;
const SummaryText = styled(motion.div)`
  margin-left: 5px;
  display: flex;
  width: 75%;
  margin-top: 30px;
  @media screen and (max-width: 900px) {
    width: 100%;
  }
  @media screen and (max-width: 680px) {
    margin-top: 15px;
    margin-left: 2px;
  }
`;
const SmallLine = styled(motion.div)`
  margin-top: 10px;
  border-top: 3px solid #121212;
  width: 20px;
  margin-right: 10px;
`;
const ButtonContainer = styled(motion.div)`
  margin-left: 5px;
  margin-top: 50px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 680px) {
    margin-left: 2px;
    margin-top: 30px;
  }
  @media screen and (min-height: 1001px) {
    @media screen and (max-width: 1000px) {
      margin-top: 30px;
    }
  }
`;
const ContactMeButton = styled(motion.div)`
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: #fafafa;
    background: #022f95;
    width: 175px;
    height: 75px;
    border-radius: 75px;
    transition: all ease 0.25s;
    h4 {
      transition: all ease 0.25s;
      margin-right: 10px;
    }
    &:hover {
      background: #0035b5;
      h4 {
        font-size: 20px;
      }
    }
  }
  @media screen and (max-width: 900px) {
    a {
      width: 150px;
      height: 60px;
    }
  }
  @media screen and (max-width: 680px) {
    a {
      width: 125px;
      height: 50px;
      img {
        width: 10px;
      }
      h4 {
        margin-right: 5px;
      }
      &:hover {
        h4 {
          font-size: 18px;
        }
      }
    }
  }
  @media screen and (max-width: 550px) {
    a {
      &:hover {
        h4 {
          font-size: 16px;
        }
      }
    }
  }
`;
const SocialLinked = styled(motion.div)`
  display: flex;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
    text-decoration: none;
    color: white;
    background: #022f95;
    width: 75px;
    height: 75px;
    border-radius: 75px;
    transition: all ease 0.25s;
    svg {
      transition: all ease 0.25s;
      font-size: 30px;
    }
    &:hover {
      background: #0035b5;
      svg {
        font-size: 35px;
      }
    }
  }
  @media screen and (max-width: 900px) {
    a {
      width: 60px;
      height: 60px;
    }
  }
  @media screen and (max-width: 680px) {
    a {
      margin-left: 5px;
      width: 50px;
      height: 50px;
      svg {
        font-size: 20px;
      }
      &:hover {
        svg {
          font-size: 25px;
        }
      }
    }
  }
  @media screen and (max-width: 550px) {
    a {
      margin-left: 15px;
    }
  }
  @media screen and (max-width: 300px) {
    a {
      margin-left: 10px;
    }
  }
`;

export default LandingPage;
