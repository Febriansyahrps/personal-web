import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  bottomAnimation,
  fadeAnimation,
  leftAnimation,
  pageAnimation,
  zoomOutAnimation,
} from "../components/animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import arrow from "../assets/blue-north-arrow.svg";
import { colorKey } from "../components/GlobalStyle";

const { main } = colorKey;

const projectsUrl = "https://febriansyahrizqi.github.io/projects.json";

const ProjectDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  const [project, setProject] = useState("");

  useEffect(() => {
    let abortController = new AbortController();
    axios
      .get(projectsUrl)
      .then((response) => setProject(response.data[pathId]))
      .catch(console.error);
    return () => {
      abortController.abort();
    };
  }, [pathId]);

  return (
    <ProjectDetailContainer
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      {pathId && (
        <>
          <DetailHeader>
            <BackButton variants={fadeAnimation} onClick={() => navigate(-1)}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </BackButton>
            <Title variants={bottomAnimation}>
              <h2>{project.name}</h2>
              <p>{project.date}</p>
            </Title>
          </DetailHeader>
          <motion.hr variants={zoomOutAnimation} />
          <DetailProject>
            <ProjectImage variants={zoomOutAnimation}>
              <img src={project.image} alt="project" />
            </ProjectImage>
            <ProjectDescription>
              <motion.h3 variants={leftAnimation}>{project.name}</motion.h3>
              <motion.p variants={leftAnimation}>
                {project.description}
              </motion.p>
              <ButtonLinkContainer variants={fadeAnimation}>
                <a href={project.project_link} target="_blank" rel="noreferrer">
                  <h4>Launch Project</h4> <img src={arrow} alt="arrow" />
                </a>
                <a href={project.github_link} target="_blank" rel="noreferrer">
                  <h4>Source Code</h4> <img src={arrow} alt="arrow" />
                </a>
              </ButtonLinkContainer>
              <motion.hr variants={zoomOutAnimation} />
            </ProjectDescription>
          </DetailProject>
        </>
      )}
    </ProjectDetailContainer>
  );
};

const ProjectDetailContainer = styled(motion.div)`
  margin: 0 10% 100px 10%;
  min-height: 80vh;
  overflow-x: hidden;
  hr {
    margin: 10px 0 50px 0;
    border: 2px solid ${main};
    width: 100%;
  }
  @media screen and (min-width: 1441px) {
    margin: 0 0 100px 0;
    hr {
      margin: 10px 10% 50px 10%;
      width: 1150px;
    }
  }
  @media screen and (max-width: 950px) {
    hr {
      margin: 10px 0 25px 0;
    }
  }
  @media screen and (max-width: 320px) {
    margin: 10px 5% 25px 5%;
  }
`;
const DetailHeader = styled(motion.div)`
  display: flex;
  align-items: center;
  text-align: right;
  @media screen and (max-width: 550px) {
    h2 {
      margin: 0 0 0 10px;
      font-size: 20px;
    }
    p {
      font-size: 10px;
    }
  }
`;
const BackButton = styled(motion.button)`
  position: absolute;
  left: 5%;
  background: transparent;
  border: none;
  cursor: pointer;
  svg {
    font-size: 24px;
  }
  @media screen and (min-width: 1441px) {
    position: relative;
    left: 5%;
  }
  @media screen and (max-width: 320px) {
    svg {
      font-size: 20px;
    }
  }
  @media screen and (max-width: 320px) {
    left: 2%;
  }
`;
const Title = styled(motion.div)`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  h2 {
    font-weight: normal;
  }
  @media screen and (min-width: 1441px) {
    margin: 0 10%;
  }
`;
const DetailProject = styled(motion.div)`
  display: flex;
  width: 100%;
  @media screen and (max-width: 950px) {
    flex-direction: column;
  }
`;
const ProjectImage = styled(motion.div)`
  display: flex;
  justify-content: center;
  width: 50%;
  margin: 0 25px 0 0;
  img {
    width: 100%;
    height: 100%;
    border: 3px solid ${main};
    border-radius: 10px;
  }
  @media screen and (min-width: 1441px) {
    margin: 0 25px 0 10%;
  }
  @media screen and (max-width: 950px) {
    width: 100%;
    height: auto;
    margin: 0;
  }
`;
const ProjectDescription = styled(motion.div)`
  width: 50%;
  p {
    font-family: "Nunito Sans", sans-serif;
    font-size: 18px;
    margin: 10px 0 0 0;
  }
  hr {
    margin: 0;
    width: 100%;
  }
  @media screen and (min-width: 1441px) {
    margin: 0 10% 0 0;
  }
  @media screen and (max-width: 950px) {
    margin: 25px 0 0 0;
    width: 100%;
  }
  @media screen and (max-width: 680px) {
    p {
      font-size: 16px;
    }
  }
  @media screen and (max-width: 320px) {
    p {
      font-size: 14px;
    }
  }
`;
const ButtonLinkContainer = styled(motion.div)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 50px 0 10px 0;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    text-decoration: none;
    color: ${main};
    height: 40px;
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
      img {
        width: 10px;
        margin: 0 0 0 5px;
      }
      &:hover {
        h4 {
          font-size: 18px;
        }
      }
    }
  }
  @media screen and (max-width: 550px) {
    margin: 25px 0 10px 0;
    a {
      width: 160px;
      img {
        margin: 0 0 0 5px;
      }
      &:hover {
        h4 {
          font-size: 14px;
        }
      }
    }
  }
  @media screen and (max-width: 320px) {
    a {
      width: fit-content;
    }
  }
`;

export default ProjectDetail;
