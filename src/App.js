import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes, useLocation } from "react-router-dom";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { getProjectsData } from "./actions/projectsAction";
import GlobalStyled from "./components/GlobalStyle";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Project from "./pages/Project";
import ProjectDetail from "./pages/ProjectDetail";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(getProjectsData());
  }, [dispatch]);

  return (
    <div>
      <GlobalStyled />
      <Navbar />
      <ContentContainer>
        <AnimatePresence
          exitBeforeEnter
          onExitComplete={() => {
            window.scrollTo(0, 0);
          }}
        >
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
        </AnimatePresence>
      </ContentContainer>
      <Footer />
    </div>
  );
}

const ContentContainer = styled(motion.div)`
  margin-top: 10vh;
`;
export default App;
