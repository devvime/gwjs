import { Entity } from "../../core/entity";
import { keys } from "../../core/keys";
import { animations } from "./animations";

export class Player {
  game = null;
  object = null;

  constructor(game) {
    this.game = game;
  }

  create() {
    this.object = new Entity({
      game: this.game,
      x: 50,
      y: 50,
      width: 48,
      height: 48,
      sprite: "public/assets/game/sprites/characters/player.png",
      animations,
    });
    this.object.velocity = 1.5;
  }

  draw() {
    this.object.draw();
  }

  update() {
    this.object.update(this.game.deltaTime);
    this.movement();
    this.run();
    this.animation();
  }

  movement() {
    if (keys["w"]) {
      this.object.position.y -= this.object.velocity;
    } else if (keys["s"]) {
      this.object.position.y += this.object.velocity;
    } else if (keys["a"] && !keys["d"]) {
      this.object.position.x -= this.object.velocity;
    } else if (keys["d"] && !keys["a"]) {
      this.object.position.x += this.object.velocity;
    }
  }

  run() {
    if (keys["shift"]) {
      this.object.velocity = 3;
    } else {
      this.object.velocity = 1.5;
    }
  }

  animation() {
    if (keys["w"]) {
      this.object.setAnimation("walkUp");
    } else if (keys["s"]) {
      this.object.setAnimation("walkDown");
    } else if (keys["d"] && !keys["a"]) {
      this.object.flip = false;
      this.object.setAnimation("walkLeft");
    } else if (keys["a"] && !keys["d"]) {
      this.object.flip = true;
      this.object.setAnimation("walkLeft");
    } else {
      this.object.setAnimation("idle");
    }
  }
}
