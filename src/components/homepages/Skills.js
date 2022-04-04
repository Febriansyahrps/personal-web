import { useSelector } from "react-redux";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useScroll } from "../useScroll";
import {
  fadeAnimation,
  leftAnimation,
  rightAnimation,
  scrollAnimation,
} from "../animation";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3Alt,
  faFigma,
  faGitAlt,
  faHtml5,
  faJs,
  faReact,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
import { faPencilRuler } from "@fortawesome/free-solid-svg-icons";
import languageIcon from "../../assets/language.svg";

const Skills = () => {
  const { sources } = useSelector((state) => state.projectData);
  const { cv_eng, cv_ind } = sources;

  const [element, controls] = useScroll();

  const cvButtonHandler = () => {
    Swal.fire({
      color: "#121212",
      background: "#fafafa",
      imageUrl: `${languageIcon}`,
      imageWidth: "25%",
      title: "Select Language",
      showConfirmButton: true,
      confirmButtonText: "English",
      confirmButtonColor: "#022f95",
      showDenyButton: true,
      denyButtonText: "Indonesia",
      denyButtonColor: "#022f95",
    }).then((result) => {
      if (result.isConfirmed) {
        window.open(`${cv_eng}`, "_blank");
      } else if (result.isDenied) {
        window.open(`${cv_ind}`, "_blank");
      }
    });
  };

  return (
    <SkillContainer
      variants={scrollAnimation}
      initial="hidden"
      animate={controls}
      ref={element}
    >
      <DescriptionSection>
        <DescriptionContent>
          <motion.h1 variants={rightAnimation}>
            Who <span>I am ?</span>
          </motion.h1>
          <SummaryText>
            <motion.p variants={rightAnimation}>
              I am front-end web developer based in Banjarnegara, Indonesia.
              Started learning and practice coding since I was 16 years old when
              studying at SMK Telkom Purwokerto (Vocational school) and
              continuously learning about front-end web technologies
            </motion.p>
            <motion.p variants={rightAnimation}>
              I have strong knowledge in basic front-end web development of
              HTML, CSS, and JavaScript. Experienced using ReactJS as a
              front-end framework and Git version control for build the
              websites. Excellent problem solving and creativity skills, that
              able to work well both independently and as part of a team.
            </motion.p>
          </SummaryText>
          <DownloadButton variants={fadeAnimation}>
            <button onClick={cvButtonHandler}>
              <h4>Download CV</h4>
            </button>
          </DownloadButton>
        </DescriptionContent>
      </DescriptionSection>
      <SkillSection>
        <motion.h2 variants={leftAnimation}>Skills</motion.h2>
        <SkillList variants={leftAnimation}>
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
        </SkillList>
      </SkillSection>
    </SkillContainer>
  );
};
const SkillContainer = styled(motion.div)`
  display: flex;
  min-height: 90vh;
  padding: 50px 0;
  overflow-x: hidden;
  @media screen and (max-width: 900px) {
    display: block;
  }
  @media screen and (min-height: 801px) {
    min-height: 800px;
  }
`;
const DescriptionSection = styled(motion.div)`
  display: flex;
  align-items: center;
  width: 65%;
  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;
const DescriptionContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fafafa;
  background-color: #022f95;
  box-shadow: -25px -25px #00efee;
  margin-left: 25px;
  border-radius: 5px;
  padding: 50px 10%;
  span {
    color: #00efee;
  }
  br {
    display: none;
  }
  @media screen and (max-width: 1200px) {
    padding: 50px 7%;
  }
  @media screen and (max-width: 900px) {
    box-shadow: -20px -20px #00efee;
    margin-left: 20px;
    padding: 30px 10%;
    h1 {
      text-align: center;
    }
  }
  @media screen and (max-width: 680px) {
    box-shadow: -15px -15px #00efee;
    margin-left: 15px;
  }
  @media screen and (max-width: 550px) {
    padding: 30px 7%;
  }
`;
const SummaryText = styled(motion.div)`
  padding: 30px 0;
  p {
    font-family: "Nunito Sans", sans-serif;
    font-size: 18px;
    padding: 10px 0;
  }
  @media screen and (max-width: 680px) {
    padding: 20px 0;
    p {
      font-size: 16px;
    }
  }
  @media screen and (max-width: 320px) {
    padding: 5px 0;
    p {
      font-size: 14px;
    }
  }
`;
const DownloadButton = styled(motion.div)`
  display: flex;
  justify-content: center;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-family: "Montserrat", sans-serif;
    border: none;
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
    button {
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
    button {
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
    align-items: center;
    button {
      &:hover {
        h4 {
          font-size: 16px;
        }
      }
    }
  }
`;
const SkillSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 35%;
  h2 {
    color: #022f95;
  }
  @media screen and (max-width: 900px) {
    width: 100%;
    margin-top: 50px;
    padding: 0 5%;
  }
  @media screen and (max-width: 680px) {
    margin-top: 30px;
  }
`;
const SkillList = styled(motion.div)`
  margin-top: 25px;
  display: grid;
  grid-template-columns: repeat(2, 100px);
  column-gap: 50px;
  row-gap: 40px;
  @media screen and (max-width: 900px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    column-gap: 30px;
  }
  @media screen and (max-width: 400px) {
    display: grid;
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
    margin-top: 5px;
  }
`;

export default Skills;
