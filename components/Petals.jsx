import React, { useEffect, useRef } from 'react';

const Petal = ({ customClass, x, y, z, xSpeedVariation, ySpeed, rotation }) => {
  const petalRef = useRef(null);

  useEffect(() => {
    const el = petalRef.current;

    const petal = {
      customClass: customClass || '',
      x: x || 0,
      y: y || 0,
      z: z || 0,
      xSpeedVariation: xSpeedVariation || 0,
      ySpeed: ySpeed || 0,
      rotation: {
        axis: 'X',
        value: 0,
        speed: 0,
        x: 0,
        ...(rotation && typeof rotation === 'object' ? rotation : {}),
      },
      el,
    };

    el.className = `petal ${petal.customClass}`;
    el.style.position = 'absolute';
    el.style.backfaceVisibility = 'visible';

    return () => {
      // Cleanup logic if needed
    };
  }, [customClass, x, y, z, xSpeedVariation, ySpeed, rotation]);

  return <div ref={petalRef}></div>;
};

const BlossomScene = ({
  id,
  numPetals = 5,
  petalsTypes,
  gravity = 0.8,
  windMaxSpeed = 4,
}) => {
  const containerRef = useRef(null);
  const placeholderRef = useRef(null);
  const petals = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    const placeholder = placeholderRef.current;

    if (!container || !placeholder) {
      return; // Return if either container or placeholder is not available
    }

    const width = container.offsetWidth;
    const height = container.offsetHeight;
    let timer = 0;
    let windMagnitude = 0.2;
    let windDuration = 0;

    container.style.overflow = 'hidden';
    placeholder.style.transformStyle = 'preserve-3d';
    placeholder.style.width = `${width}px`;
    placeholder.style.height = `${height}px`;
    container.appendChild(placeholder);

    // Rest of your logic

  }, [id, numPetals, petalsTypes, gravity, windMaxSpeed]);

  return <div id={id} ref={containerRef}></div>;
};

const petalsTypes = [
  { customClass: 'petal-style1' },
  { customClass: 'petal-style2' },
  { customClass: 'petal-style3' },
  { customClass: 'petal-style4' },
];

export { BlossomScene, petalsTypes, Petal };
