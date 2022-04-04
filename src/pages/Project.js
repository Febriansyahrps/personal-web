import { useSelector } from "react-redux";
import styled from "styled-components";
import { motion } from "framer-motion";
import { pageAnimation, topAnimation } from "../components/animation";
import { useScrollShowOnly } from "../components/useScroll";
import ProjectItem from "../components/projectpages/ProjectItem";
import ProjectLandingPage from "../components/projectpages/ProjectLandingPage";

const Project = () => {
  const [element, controls] = useScrollShowOnly();
  const { projects } = useSelector((state) => state.projectData);

  return (
    <ProjectContainer
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <ProjectLandingPage />
      <ProjectItemContainer
        variants={topAnimation}
        initial="hidden"
        animate={controls}
        ref={element}
      >
        {projects
          .map((state) => <ProjectItem key={state.id} id={state.id} />)
          .reverse()}
      </ProjectItemContainer>
    </ProjectContainer>
  );
};

const ProjectContainer = styled(motion.div)`
  margin-bottom: 100px;
`;
const ProjectItemContainer = styled(motion.div)`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(2, 400px);
  gap: 50px;
  margin-top: 50px;
  @media screen and (max-width: 1200px) {
    gap: 30px;
  }
  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 300px);
  }
  @media screen and (max-width: 680px) {
    grid-template-columns: repeat(2, 240px);
  }
  @media screen and (max-width: 550px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export default Project;
