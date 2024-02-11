import anime from "animejs";

import React from "react";

const WaterDropGrid = ({ gridid }) => {
  return (
    <div className="grid place-content-center bg-transparent ">
      <div className="relative">
        <DotGrid grid_id={gridid}></DotGrid>
      </div>
    </div>
  );
};

const GRID_WIDTH = 15;
const GRID_HEIGHT = 15;

const DotGrid = ({ grid_id }) => {
  const handleDotClick = (e) => {
    const clickedDot = ".dot-point";
    anime({
      targets: clickedDot,
      scale: [
        { value: 1.35, easing: "easeOutSine", duration: 250 },
        { value: 1, easing: "easeInOutQuad", duration: 500 },
      ],
      translateY: [
        { value: -15, easing: "easeOutSine", duration: 250 },
        { value: 0, easing: "easeInOutQuad", duration: 500 },
      ],
      opacity: [
        { value: 1, easing: "easeOutSine", duration: 250 },
        { value: 0.5, easing: "easeInOutQuad", duration: 500 },
      ],
      delay: anime.stagger(100, {
        grid: [GRID_WIDTH, GRID_HEIGHT],
        from: e.target.dataset.index,
      }),
    });
  };
  const dots = [];
  let index = grid_id * GRID_WIDTH * GRID_WIDTH;

  for (let i = 0; i < GRID_WIDTH; i++) {
    for (let j = 0; j < GRID_HEIGHT; j++) {
      dots.push(
        <div
          onClick={handleDotClick}
          className="group cursor-crosshair rounded-full p-1 transition-colors hover:bg-slate-600"
          data-index={index}
          key={`${grid_id}-${i}-${j}`}
        >
          <div
            className="dot-point h-1.5 w-1.5 rounded-full bg-gradient-to-b from-slate-700 to-slate-400 opacity-80 group-hover:from-indigo-600 group-hover:to-white"
            data-index={index}
          ></div>
        </div>
      );
      index++;
    }
  }

  return (
    <div
      style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)` }}
      className="grid w-fit"
    >
      {dots}
    </div>
  );
};

export default WaterDropGrid;
