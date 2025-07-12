import { Entity } from "../core/entity";
import Scene from "../core/scene";
import { Player } from "../entities/player/player.entity";

export default class Game extends Scene {
  player = new Player(this.game);
  slimes = [];

  create() {
    this.player.create();
    this.slimes.push(
      new Entity({
        game: this.game,
        x: 10,
        y: 10,
        width: 32,
        height: 32,
        body: {
          width: 15,
          height: 15,
          offsetX: 17,
          offsetY: 21,
        },
      })
    );
  }

  draw() {
    this.player.draw();
    this.slimes.forEach((slime) => {
      slime.draw();
    });
  }

  update() {
    this.setCollisions();
    this.player.update();
  }

  setCollisions() {
    this.slimes.forEach((slime) => {
      if (slime.collide(this.player.object)) {
        this.slimes = this.slimes.filter((a) => a !== slime);
      }
    });
  }
}
