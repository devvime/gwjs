import { generateFrames } from "../../core/generateFrames";

export const animations = {
  idle: {
    frameRate: 100,
    frames: generateFrames({
      width: 48,
      height: 48,
      row: 0,
      frameCount: 6,
    }),
  },
  walkUp: {
    frameRate: 100,
    frames: generateFrames({
      width: 48,
      height: 48,
      row: 5,
      frameCount: 6,
    }),
  },
  walkDown: {
    frameRate: 100,
    frames: generateFrames({
      width: 48,
      height: 48,
      row: 3,
      frameCount: 6,
    }),
  },
  walkRight: {
    frameRate: 100,
    frames: generateFrames({
      width: 48,
      height: 48,
      row: 4,
      frameCount: 6,
    }),
  },
  attackRight: {
    frameRate: 100,
    frames: generateFrames({
      width: 48,
      height: 48,
      row: 7,
      frameCount: 3,
    }),
  },
};
