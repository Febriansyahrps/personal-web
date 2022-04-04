import { useSelector } from "react-redux";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubSquare,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const { sources } = useSelector((state) => state.projectData);
  const { github, linkedin } = sources;

  return (
    <div>
      <FooterContainer>
        <Line />
        <SocialLinkedContainer>
          <a href={linkedin} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href={github} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithubSquare} />
          </a>
        </SocialLinkedContainer>
        <PageButton>
          <Link to={"/"}>
            <p>Home</p>
          </Link>
          <Link to={"/project"}>
            <p>Project</p>
          </Link>
          <Link to={"/contact"}>
            <p>Contact</p>
          </Link>
        </PageButton>
        <p>
          © 2022 Febriansyah RPS dev <span> - </span> <br /> All rights reserved
        </p>
      </FooterContainer>
    </div>
  );
};

const FooterContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 20vh;
  background: #022f95;
  padding: 25px 0;
  p {
    margin-top: 10px;
    color: #fafafa;
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
const Line = styled(motion.div)`
  width: 80%;
  border-top: 5px solid #fafafa;
`;
const SocialLinkedContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  margin: 20px 0 10px 0;
  a {
    text-decoration: none;
    color: #fafafa;
    margin: 0 15px;
    transition: all ease 0.25s;
    svg {
      font-size: 40px;
    }
    &:hover {
      color: #00efee;
    }
  }
`;
const PageButton = styled(motion.div)`
  display: flex;
  a {
    text-decoration: none;
    color: #fafafa;
    padding: 5px 10px;
    &:hover {
      p {
        color: #00efee;
      }
    }
  }
  p {
    margin: 0;
    transition: all ease 0.25s;
  }
`;

export default Footer;
