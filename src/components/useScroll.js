import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

export const useScroll = () => {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: 0.5 });
  if (view) {
    controls.start("show");
  } else {
    controls.start("hidden");
  }
  return [element, controls];
};

export const useScrollShowOnly = () => {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: 0.25 });
  if (view) {
    controls.start("show");
  }
  return [element, controls];
};
