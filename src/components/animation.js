export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};
export const scrollAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.2,
      ease: "easeOut",
    },
  },
};
export const zoomInAnimation = {
  hidden: {
    scale: 1.5,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};
export const zoomOutAnimation = {
  hidden: {
    scale: 0.5,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};
export const fadeAnimation = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};
export const fadeScrollAnimation = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.2,
      ease: "easeOut",
    },
  },
};
export const leftAnimation = {
  hidden: {
    opacity: 0,
    x: 100,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};
export const rightAnimation = {
  hidden: {
    opacity: 0,
    x: -100,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};
export const topAnimation = {
  hidden: {
    opacity: 0,
    y: 100,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};
export const bottomAnimation = {
  hidden: {
    opacity: 0,
    y: -100,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};
