import { generateFrames } from "../../core/generateFrames";

export const animations = {
  idle: {
    frameRate: 100,
    frames: generateFrames({
      width: 32,
      height: 32,
      row: 0,
      frameCount: 3,
    }),
  },
};
