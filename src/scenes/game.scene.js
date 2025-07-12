import { Entity } from "../core/entity";
import Scene from "../core/scene";
import { Player } from "../entities/player/player.entity";
import { Slimes } from "../entities/slime/slimes.entity";

export default class Game extends Scene {
  player = new Player(this.game);
  slimes = new Slimes(this.game, this.player);

  create() {
    this.player.create();
    this.slimes.create();
  }

  draw() {
    this.player.draw();
    this.slimes.draw();
  }

  update() {
    this.player.update();
    this.slimes.update();
  }
}
