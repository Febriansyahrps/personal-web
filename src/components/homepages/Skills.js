import { useSelector } from "react-redux";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useScroll } from "../useScroll";
import {
  fadeAnimation,
  leftAnimation,
  rightAnimation,
  scrollAnimation,
  zoomOutAnimation,
} from "../animation";
import Swal from "sweetalert2";
import SkillList from "./SkillList";
import { ReactComponent as Wave } from "../../assets/double-wave.svg";
import languageIcon from "../../assets/language.svg";
import profileImage from "../../assets/profile-image-square.png";
import { colorKey } from "../GlobalStyle";

const { white, main, secondary, secondaryHover } = colorKey;

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
      confirmButtonColor: "#102060",
      showDenyButton: true,
      denyButtonText: "Indonesia",
      denyButtonColor: "#102060",
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
      <motion.div>
        <Wave
          style={{
            display: "block",
            margin: "0",
            width: "100%",
            padding: "0px",
            transform: "rotate(180deg)",
          }}
        />
        <DescriptionContent>
          <BlockWrapper>
            <motion.h1 variants={rightAnimation}>
              Who <span>I am ?</span>
            </motion.h1>
            <motion.img
              variants={zoomOutAnimation}
              src={profileImage}
              alt="profile image"
            />
            <SmallScreenButton>
              <DownloadButton variants={fadeAnimation}>
                <button onClick={cvButtonHandler}>
                  <h4>Download CV</h4>
                </button>
              </DownloadButton>
            </SmallScreenButton>
          </BlockWrapper>
          <BlockWrapper>
            <SummaryText>
              <motion.p variants={leftAnimation}>
                I am front-end web developer based in Banjarnegara, Indonesia.
                Started learning and practice coding since I was 16 years old
                when studying at SMK Telkom Purwokerto (Vocational school) and
                continuously learning about front-end web technologies
              </motion.p>
              <motion.p variants={leftAnimation}>
                I have strong knowledge in basic front-end web development of
                HTML, CSS, and JavaScript. Experienced using ReactJS as a
                front-end framework and Git version control for build the
                websites. Excellent problem solving and creativity skills, that
                able to work well both independently and as part of a team.
              </motion.p>
            </SummaryText>
            <HighScreenButton>
              <DownloadButton variants={fadeAnimation}>
                <button onClick={cvButtonHandler}>
                  <h4>Download CV</h4>
                </button>
              </DownloadButton>
            </HighScreenButton>
          </BlockWrapper>
        </DescriptionContent>
        <Wave
          style={{
            display: "block",
            margin: "-2px 0 0 0",
            width: "100%",
            padding: "0px",
          }}
        />
      </motion.div>
      <SkillSection>
        <motion.h2 variants={zoomOutAnimation}>Skills</motion.h2>
        <SkillListContainer variants={fadeAnimation}>
          <SkillList />
        </SkillListContainer>
      </SkillSection>
    </SkillContainer>
  );
};
const SkillContainer = styled(motion.div)`
  min-height: 90vh;
  display: block;
  padding: 50px 0;
  overflow-x: hidden;
  @media screen and (min-height: 801px) {
    min-height: 800px;
  }
`;
const DescriptionContent = styled(motion.div)`
  margin: -2px 0 0 0;
  display: flex;
  justify-content: center;
  color: ${white};
  background-color: ${main};
  padding: 25px 10%;
  span {
    color: ${secondary};
  }
  img {
    margin: 25px 0 0 0;
    width: 250px;
    border-radius: 100%;
    background: ${white};
    border: 10px solid ${secondary};
  }
  @media screen and (max-width: 900px) {
    padding: 25px 7%;
    img {
      width: 200px;
    }
  }
  @media screen and (max-width: 550px) {
    display: flex;
    flex-direction: column;
    padding: 30px 10%;
    img {
      display: none;
    }
  }
  @media screen and (max-width: 320px) {
    padding: 30px 7%;
  }
`;
const BlockWrapper = styled(motion.div)`
  width: 50%;
  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media screen and (max-width: 550px) {
    width: 100%;
    display: block;
  }
`;
const SummaryText = styled(motion.div)`
  padding: 0 0 30px 5px;
  p {
    font-family: "Nunito Sans", sans-serif;
    font-size: 18px;
    padding: 0 0 15px 0;
  }
  @media screen and (max-width: 900px) {
    padding: 0 0 0 5px;
  }
  @media screen and (max-width: 680px) {
    p {
      font-size: 16px;
    }
  }
  @media screen and (max-width: 550px) {
    padding: 15px 0;
    p {
      padding: 10px 0;
    }
  }
  @media screen and (max-width: 320px) {
    p {
      font-size: 14px;
    }
  }
`;
const HighScreenButton = styled(motion.div)`
  @media screen and (max-width: 900px) {
    display: none;
  }
  @media screen and (max-width: 550px) {
    display: block;
  }
`;
const SmallScreenButton = styled(motion.div)`
  margin: 25px 0 0 0;
  @media screen and (min-width: 901px) {
    display: none;
  }
  @media screen and (max-width: 550px) {
    display: none;
  }
`;
const DownloadButton = styled(motion.div)`
  display: flex;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-family: "Montserrat", sans-serif;
    border: none;
    text-decoration: none;
    color: ${main};
    background: ${secondary};
    width: 200px;
    height: 75px;
    border-radius: 75px;
    transition: all ease 0.25s;
    h4 {
      transition: all ease 0.25s;
    }
    &:hover {
      background: ${secondaryHover};
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
    justify-content: center;
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
  margin: 30px 10% 0 10%;
  h2 {
    color: ${main};
  }
`;
const SkillListContainer = styled(motion.div)`
  margin: 25px 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default Skills;
