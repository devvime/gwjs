import Game from "./core/game";

const game = new Game({
  scale: 3,
});

game.setScene("mainMenu");

let lastTime = performance.now();

function main(timestamp) {
  const deltaTime = timestamp - lastTime;
  lastTime = timestamp;
  game.deltaTime = deltaTime;
  game.run();
  requestAnimationFrame(main);
}

main(performance.now());
