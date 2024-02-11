import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, color } from "framer-motion";

interface Props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
  colorFrom: string;
  colorTo: string;
}

const Reveal = ({
  children,
  width = "fit-content",
  colorFrom,
  colorTo,
}: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("shown");
      slideControls.start("shown");
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{ position: "relative", width }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          shown: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{ hidden: { left: 0 }, shown: { left: "100%" } }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={`absolute top-2 bottom-2 left-0 right-0 z-20 bg-gradient-to-r ${colorFrom} ${colorTo}`}
      ></motion.div>
    </div>
  );
};

export default Reveal;
