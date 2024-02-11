import { React, useEffect, useState } from "react";
import { useAnimation, motion } from "framer-motion";

const FloatingShape = ({
  svgUrl,
  bobTime,
  bobInterval,
  top,
  left,
  rotation,
  opacity,
  scale,
  animationDelay,
  dir,
}) => {
  const [isUp, setIsUp] = useState(true);
  const controls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      setIsUp((prevIsUp) => !prevIsUp);
    }, Number(bobInterval));

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      controls.start({
        y: isUp ? -1 * Number(bobTime) : Number(bobTime),

        transition: {
          duration: 1,
          ease: "easeInOut", // You can experiment with different easing functions
        },
      });
    }, Number(animationDelay));
  }, [isUp, controls, Number(animationDelay)]);

  return (
    <motion.img
      src={svgUrl}
      style={{
        top: `${top}%`,
        left: `${left}%`,
      }}
      className="absolute z-[99]"
      initial={{
        y: 0,
        opacity: 0.0,
        scale: Number(scale),
        rotate: Number(rotation),
      }}
      animate={controls}
      whileInView={{ opacity: Number(opacity) }}
    ></motion.img>
  );
};

export default FloatingShape;
