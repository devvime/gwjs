export function generateFrames({ width, height, row, frameCount }) {
  const frames = [];
  for (let i = 0; i < frameCount; i++) {
    frames.push({
      x: i * width,
      y: row * height,
      w: width,
      h: height,
    });
  }
  return frames;
}
