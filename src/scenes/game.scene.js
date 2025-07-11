import Scene from "../core/scene";
import { Player } from "../entities/player/player.entity";

export default class Game extends Scene {
  player = new Player(this.game);

  create() {
    this.player.create();
  }

  draw() {
    this.player.draw();
  }

  update() {
    this.player.update();
  }
}
