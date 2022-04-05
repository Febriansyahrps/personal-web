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
  margin: 0 0 100px 0;
`;
const ProjectItemContainer = styled(motion.div)`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(2, 500px);
  margin: 50px 0 0 0;
  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, 460px);
  }
  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 350px);
  }
  @media screen and (max-width: 680px) {
    grid-template-columns: repeat(2, 290px);
  }
  @media screen and (max-width: 550px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export default Project;
