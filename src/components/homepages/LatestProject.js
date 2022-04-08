import { useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import LatestProjectItem from "./LatestProjectItem";
import eastArrow from "../../assets/east-arrow.svg";
import miniwave from "../../assets/mini-wave.svg";
import { useScroll } from "../useScroll";
import {
  rightAnimation,
  fadeAnimation,
  leftAnimation,
  zoomOutAnimation,
  scrollAnimation,
} from "../animation";
import { useSelector } from "react-redux";
import { colorKey } from "../GlobalStyle";

const { white, main, mainHover } = colorKey;

const LatestProject = () => {
  const refButton = useRef(null);
  const [element, controls] = useScroll();
  const { projects } = useSelector((state) => state.projectData);

  const scrollHorizontal = (scroll) => {
    refButton.current.scrollLeft += scroll;
  };

  return (
    <LatestProjectContainer
      variants={scrollAnimation}
      initial="hidden"
      animate={controls}
      ref={element}
    >
      <DescriptionSection>
        <motion.h1 variants={rightAnimation}>
          My Latest <br /> <span>Projects</span>
        </motion.h1>
        <Line variants={zoomOutAnimation} />
        <BlockWrapper variants={fadeAnimation}>
          <p>
            Check out my latest projects I have worked on, you can visit the
            project or explore more of my other projects
          </p>
          <ExploreButton variants={leftAnimation}>
            <Link to={"/project"}>
              <h4> Explore More Project</h4>
              <img src={eastArrow} alt="arrow" />
            </Link>
          </ExploreButton>
        </BlockWrapper>
        <Miniwave />
      </DescriptionSection>
      <ProjectSection variants={fadeAnimation}>
        <button onClick={() => scrollHorizontal(-250)}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <ProjectList ref={refButton}>
          {projects
            .slice(-3)
            .map((state) => <LatestProjectItem key={state.id} id={state.id} />)
            .reverse()}
        </ProjectList>
        <button onClick={() => scrollHorizontal(+250)}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </ProjectSection>
    </LatestProjectContainer>
  );
};

const LatestProjectContainer = styled(motion.div)`
  margin: 50px 10%;
  min-height: 90vh;
  @media screen and (max-width: 1200px) {
    margin: 50px 7%;
  }
  @media screen and (max-width: 300px) {
    overflow-x: hidden;
  }
  @media screen and (min-width: 1441px) {
    margin: 75px 0;
  }
  @media screen and (min-height: 901px) {
    min-height: 500px;
  }
`;
const DescriptionSection = styled(motion.div)`
  display: flex;
  align-items: center;
  span {
    color: ${main};
  }
  @media screen and (max-width: 550px) {
    display: block;
    br {
      display: none;
    }
  }
  @media screen and (min-width: 1441px) {
    margin: 0 0 0 10%;
  }
`;
const Line = styled(motion.div)`
  margin: 0 20px;
  height: 150px;
  border-left: 5px solid ${main};
  opacity: 50%;
  @media screen and (max-width: 900px) {
    margin: 0 15px;
  }
  @media screen and (max-width: 550px) {
    margin: 5px 0;
    width: 50%;
    height: 0;
    border-top: 5px solid ${main};
    border-left: none;
  }
`;
const BlockWrapper = styled(motion.div)`
  width: 45%;
  z-index: 5;
  p {
    margin: 0 0 10px 0;
  }
  @media screen and (max-width: 900px) {
    width: 50%;
  }
  @media screen and (max-width: 680px) {
    width: 65%;
  }
  @media screen and (max-width: 550px) {
    width: 100%;
    p {
      margin: 10px 0 0 0;
    }
  }
`;
const ExploreButton = styled(motion.div)`
  width: fit-content;
  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    height: 50px;
    color: ${main};
    h4 {
      transition: all ease 0.25s;
    }
    img {
      margin: 0 0 0 10px;
    }
    &:hover {
      h4 {
        font-size: 20px;
      }
    }
  }
  @media screen and (max-width: 680px) {
    a {
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
const Miniwave = styled(motion.div)`
  background-image: url(${miniwave});
  transition: all ease 0.25s;
  position: absolute;
  right: 0;
  margin: 0 2.5% 0 0;
  width: 200px;
  height: 200px;
  @media screen and (max-width: 1100px) {
    width: 175px;
    height: 175px;
  }
  @media screen and (max-width: 1000px) {
    width: 150px;
    height: 150px;
  }
  @media screen and (max-width: 1000px) {
    margin: 0 1% 0 0;
  }
  @media screen and (max-width: 750px) {
    margin: 0;
    width: 125px;
    background-position: center;
    background-repeat: no-repeat;
  }
  @media screen and (max-width: 680px) {
    display: none;
  }
  @media screen and (min-width: 1441px) {
    position: relative;
  }
`;
const ProjectSection = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 50px 0 0 0;
  button {
    width: 50px;
    height: 50px;
    background: ${main};
    color: ${white};
    border-radius: 100%;
    border: none;
    cursor: pointer;
    transition: all ease 0.25s;
    svg {
      transition: all ease 0.25s;
      font-size: 20px;
    }
    &:hover {
      background: ${mainHover};
      svg {
        font-size: 25px;
      }
    }
  }
  @media screen and (min-width: 1201px) {
    button {
      display: none;
    }
  }
  @media screen and (max-width: 550px) {
    margin: 0;
    button {
      display: none;
    }
  }
  @media screen and (min-width: 1441px) {
    margin: 0;
  }
`;
const ProjectList = styled(motion.div)`
  display: flex;
  overflow: auto;
  scroll-behavior: smooth;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 1200px) {
    width: 90%;
    margin: 0 10px;
  }
  @media screen and (max-width: 550px) {
    align-items: center;
    flex-direction: column;
    width: 100%;
    margin: 0;
  }
  @media screen and (min-width: 1441px) {
    margin: 50px 0 0 0;
  }
`;

export default LatestProject;
