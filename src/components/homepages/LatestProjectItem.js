import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { zoomOutAnimation } from "../animation";

const LatestProjectItem = ({ id }) => {
  const { projects } = useSelector((state) => state.projectData);
  const project = projects[id];

  return (
    <ProjectItemContainer>
      <Content>
        <Link to={`/project/${id}`}>
          <ImageContainer variants={zoomOutAnimation}>
            <img src={project.image} alt="project" />
          </ImageContainer>
          <h3>{project.name}</h3>
          <motion.hr variants={zoomOutAnimation} />
        </Link>
      </Content>
    </ProjectItemContainer>
  );
};
const ProjectItemContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  margin: 0 10px;
  width: 350px;
  @media screen and (max-width: 680px) {
    width: 250px;
  }
`;
const Content = styled(motion.div)`
  hr {
    border: 2px solid #022f95;
    width: 50%;
    transition: all 0.5s linear;
  }
  h3 {
    font-weight: normal;
    transition: ease all 0.25s;
    margin-top: 10px;
  }
  a {
    text-decoration: none;
    color: #121212;
  }
  &:hover {
    hr {
      width: 100%;
    }
    img {
      padding: 5px;
    }
  }
  @media screen and (max-width: 550px) {
    margin-top: 25px;
    h3 {
      margin-top: 0;
    }
  }
`;
const ImageContainer = styled(motion.div)`
  min-height: 230px;
  overflow: hidden;
  img {
    transition: ease all 0.25s;
    width: 300px;
    background: #022f95;
    padding: 10px;
    border-radius: 5px;
  }
  @media screen and (max-width: 680px) {
    min-height: 190px;
    img {
      width: 240px;
    }
  }
`;

export default LatestProjectItem;
