import styled from "styled-components";
import { motion } from "framer-motion";
import { bottomAnimation, topAnimation, zoomOutAnimation } from "../animation";
import { ReactComponent as Wave } from "../../assets/double-wave.svg";
import computerMan from "../../assets/Project-SALY-3D-Illustration-by-Alzea-Arafat.png";
import { colorKey } from "../GlobalStyle";

const { white, main, secondary } = colorKey;

const ProjectLandingPage = () => {
  return (
    <motion.div>
      <ContentContainer>
        <ImageContainer variants={zoomOutAnimation}>
          <img src={computerMan} alt="man on computer" />
        </ImageContainer>
        <DescriptionContainer>
          <motion.h1 variants={bottomAnimation}>
            My <br /> <span> Projects </span>
          </motion.h1>
          <Line variants={zoomOutAnimation} />
          <motion.p variants={topAnimation}>
            Check out my best and creative projects I've worked on
          </motion.p>
        </DescriptionContainer>
      </ContentContainer>
      <Wave
        style={{
          margin: "-2px 0 0 0",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        }}
      />
    </motion.div>
  );
};

const ContentContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  background: ${main};
  @media screen and (max-width: 550px) {
    flex-direction: column;
    padding: 0 7%;
  }
  @media screen and (min-height: 901px) {
    min-height: 500px;
  }
`;
const ImageContainer = styled(motion.div)`
  display: flex;
  justify-content: flex-end;
  width: 50%;
  img {
    width: 400px;
    height: 100%;
  }
  @media screen and (max-width: 900px) {
    img {
      width: 300px;
    }
  }
  @media screen and (max-width: 680px) {
    img {
      width: 250px;
    }
  }
  @media screen and (max-width: 550px) {
    width: 100%;
    justify-content: center;
  }
`;
const DescriptionContainer = styled(motion.div)`
  width: 50%;
  h1 {
    color: ${white};
  }
  span {
    color: ${secondary};
  }
  p {
    color: ${white};
    width: 75%;
  }
  @media screen and (max-width: 900px) {
    p {
      width: 90%;
    }
  }
  @media screen and (max-width: 550px) {
    margin: 25px 0;
    width: 100%;
    br {
      display: none;
    }
    p {
      width: 100%;
    }
  }
`;
const Line = styled(motion.div)`
  width: 70%;
  margin: 20px 0;
  border: 3px solid ${white};
  @media screen and (max-width: 900px) {
    width: 80%;
  }
  @media screen and (max-width: 550px) {
    width: 100%;
  }
`;

export default ProjectLandingPage;
