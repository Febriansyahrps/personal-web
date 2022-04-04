import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { bottomAnimation } from "./animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const { pathname } = useLocation();
  const [buttonVisible, setButtonVisible] = useState(false);

  return (
    <NavbarContainer>
      <Logo variants={bottomAnimation} initial="hidden" animate="show">
        <h3>
          <Link to={"/"}>
            RPS <span>.dev</span>
          </Link>
        </h3>
      </Logo>
      <NavButton
        onClick={() => setButtonVisible(!buttonVisible)}
        variants={bottomAnimation}
        initial="hidden"
        animate="show"
      >
        {buttonVisible ? (
          <FontAwesomeIcon icon={faTimes} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </NavButton>
      <Page navActive={buttonVisible}>
        <ul>
          <Link
            to={"/"}
            style={{
              color: `${pathname === "/" ? "#022F95" : "#121212"}`,
            }}
          >
            <motion.li
              variants={bottomAnimation}
              initial="hidden"
              animate="show"
            >
              Home
            </motion.li>
          </Link>
          <Link
            to={"/project"}
            style={{
              color: `${pathname === "/project" ? "#022F95" : "#121212"}`,
            }}
          >
            <motion.li
              variants={bottomAnimation}
              initial="hidden"
              animate="show"
            >
              Project
            </motion.li>
          </Link>
          <Link
            to={"/contact"}
            style={{
              color: `${pathname === "/contact" ? "#022F95" : "#121212"}`,
            }}
          >
            <motion.li
              variants={bottomAnimation}
              initial="hidden"
              animate="show"
            >
              Contact
            </motion.li>
          </Link>
        </ul>
        <ClosePage
          navActive={buttonVisible}
          onClick={() => setButtonVisible(!buttonVisible)}
        />
      </Page>
    </NavbarContainer>
  );
};

const NavbarContainer = styled(motion.div)`
  z-index: 10;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  top: 0;
  width: 100%;
  min-height: 10vh;
  padding: 0 5%;
  background: #fafafa;
  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding: 0 72px;
  }
`;
const Logo = styled(motion.div)`
  z-index: 10;
  h3 {
    display: flex;
    align-items: flex-end;
    font-size: 24px;
    span {
      display: flex;
      align-items: flex-end;
      margin-bottom: 2px;
      font-weight: normal;
      font-size: 18px;
      color: #121212;
    }
    a {
      display: flex;
      text-decoration: none;
      color: #022f95;
    }
  }
`;
const NavButton = styled(motion.button)`
  width: 40px;
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  display: none;
  @media screen and (max-width: 550px) {
    display: block;
    z-index: 10;
  }
`;
const Page = styled(motion.div)`
  ul {
    display: flex;
    list-style: none;
  }
  a {
    text-decoration: none;
    color: #121212;
  }
  li {
    cursor: pointer;
    padding: 20px 25px;
    &:hover {
      color: #022f95;
      transition: all ease-in 0.25s;
    }
  }
  @media screen and (max-width: 550px) {
    z-index: 5;
    background: white;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 300px;
    transform: translateY(-100%);
    transition: all 0.5s ease;
    opacity: 0;
    ${(props) => !props.navActive} {
      transform: translateY(0%);
      opacity: 1;
      background: rgba(256, 256, 256, 0.95);
    }
    ul {
      margin-top: 10vh;
      display: block;
    }
    li {
      padding: 25px;
      text-align: center;
    }
  }
`;
const ClosePage = styled(motion.div)`
  @media screen and (max-width: 550px) {
    display: block;
    min-height: 100vh;
    background: transparent;
    ${(props) => props.navActive} {
      display: none;
    }
  }
`;

export default Navbar;
