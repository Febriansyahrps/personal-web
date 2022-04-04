import { motion } from "framer-motion";
import { pageAnimation } from "../components/animation";
import ContactMe from "../components/homepages/ContactMe";
import LandingPage from "../components/homepages/LandingPage";
import LatestProject from "../components/homepages/LatestProject";
import Skills from "../components/homepages/Skills";

const Home = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <LandingPage />
      <Skills />
      <LatestProject />
      <ContactMe />
    </motion.div>
  );
};

export default Home;
