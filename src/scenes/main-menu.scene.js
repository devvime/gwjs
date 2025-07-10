import Scene from "../core/scene";
import { Player } from "../entities/player.entity";

export default class MainMenu extends Scene {
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
