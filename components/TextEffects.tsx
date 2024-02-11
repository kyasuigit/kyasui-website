import { TypeAnimation } from "react-type-animation";

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        "Software Engineer",
        1500,
        "SDET",
        1500,
        "Game Programmer",
        1500,
      ]}
      wrapper="span"
      speed={50}
      className="text=[2rem] md:text-[3rem] text-blue-600 font-bold uppercase"
      repeat={Infinity}
    />
  );
};

export default TextEffect;
