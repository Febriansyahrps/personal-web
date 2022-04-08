import { useSelector } from "react-redux";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubSquare,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { colorKey } from "./GlobalStyle";

const { black, blackHover } = colorKey;

const Footer = () => {
  const { sources } = useSelector((state) => state.projectData);
  const { github, linkedin } = sources;

  return (
    <FooterContainer>
      <SocialLinkedContainer>
        <a href={linkedin} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a href={github} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithubSquare} />
        </a>
      </SocialLinkedContainer>
      <h4>
        © 2022 Febriansyah RPS <span> - </span> <br /> All rights reserved
      </h4>
    </FooterContainer>
  );
};

const FooterContainer = styled(motion.footer)`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 20vh;
  padding: 0 0 50px 0;
  h4 {
    margin: 10px 0 0 0;
    color: ${black};
    font-weight: normal;
  }
  br {
    display: none;
  }
  @media screen and (max-width: 356px) {
    text-align: center;
    span {
      display: none;
    }
    br {
      display: block;
    }
  }
`;
const SocialLinkedContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  margin: 20px 0 0 0;
  a {
    text-decoration: none;
    color: ${black};
    margin: 0 15px;
    transition: all ease 0.25s;
    svg {
      font-size: 50px;
    }
    &:hover {
      color: ${blackHover};
    }
  }
  @media screen and (max-width: 550px) {
    a {
      margin: 0 10px;
      svg {
        font-size: 45px;
      }
    }
  }
`;
export default Footer;
