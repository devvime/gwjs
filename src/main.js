import Game from "./core/game";

const game = new Game({
  scale: 3,
});

game.setScene("game");

game.debug = true;

game.start();
