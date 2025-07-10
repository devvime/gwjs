import { Entity } from "../core/entity";
import { keys } from "../core/keys";
import { generateFrames } from "../core/generateFrames";

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
      animations: {
        idle: {
          frameRate: 100,
          frames: generateFrames({
            width: 48,
            height: 48,
            row: 0,
            frameCount: 6,
          }),
        },
        walk: {
          frameRate: 100,
          frames: generateFrames({
            width: 48,
            height: 48,
            row: 1,
            frameCount: 6,
          }),
        },
      },
    });
    this.object.velocity = 1.5;

    this.object.setAnimation("idle");
  }

  draw() {
    this.object.draw();
  }

  update() {
    this.object.update(this.game.deltaTime);
    this.movement();
    this.run();
  }

  movement() {
    if (keys["w"]) {
      this.object.position.y -= this.object.velocity;
    }
    if (keys["s"]) {
      this.object.position.y += this.object.velocity;
    }
    if (keys["a"]) {
      this.object.position.x -= this.object.velocity;
    }
    if (keys["d"]) {
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
}
