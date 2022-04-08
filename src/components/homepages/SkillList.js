import styled from "styled-components";
import { motion } from "framer-motion";
import {
  faCss3Alt,
  faHtml5,
  faJs,
  faSass,
  faReact,
  faGitAlt,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilRuler } from "@fortawesome/free-solid-svg-icons";

const SkillList = () => {
  return (
    <SkillContainer>
      <Skill>
        <FontAwesomeIcon icon={faHtml5} color="#DD4B25" />
        <p>HTML</p>
      </Skill>
      <Skill>
        <FontAwesomeIcon icon={faCss3Alt} color="#254BDD" />
        <p>CSS</p>
      </Skill>
      <Skill>
        <FontAwesomeIcon icon={faJs} color="#EFD81D" />
        <p>JavaScript</p>
      </Skill>
      <Skill>
        <FontAwesomeIcon icon={faSass} color="#CF649A" />
        <p>Sass</p>
      </Skill>
      <Skill>
        <FontAwesomeIcon icon={faReact} color="#61DBF7" />
        <p>ReactJS</p>
      </Skill>
      <Skill>
        <FontAwesomeIcon icon={faGitAlt} color="#E84D31" />
        <p>Git</p>
      </Skill>
      <Skill>
        <FontAwesomeIcon icon={faFigma} color="#A259FF" />
        <p>Figma</p>
      </Skill>
      <Skill>
        <FontAwesomeIcon icon={faPencilRuler} color="#444444" />
        <p>UI Design</p>
      </Skill>
    </SkillContainer>
  );
};

const SkillContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  column-gap: 50px;
  row-gap: 30px;
  @media screen and (max-width: 500px) {
    display: grid;
    grid-template-columns: repeat(2, 100px);
  }
  @media screen and (max-width: 320px) {
    column-gap: 30px;
    row-gap: 30px;
  }
`;
const Skill = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  svg {
    font-size: 50px;
  }
  p {
    margin: 5px 0 0 0;
  }
`;

export default SkillList;
