import { Entity } from "../../core/entity";
import { animations } from "./slime.animations";

export class Slimes {
  game = null;
  player = null;
  slimes = [];

  constructor(game, player) {
    this.game = game;
    this.player = player;
  }

  create() {
    this.slimes.push(
      new Entity({
        game: this.game,
        x: 30,
        y: 30,
        width: 32,
        height: 32,
        body: { width: 15, height: 15, offsetX: 8.5, offsetY: 10.5 },
        sprite: "public/assets/game/sprites/characters/slime.png",
        animations,
      })
    );
  }

  draw() {
    this.slimes.forEach((slime) => {
      slime.draw();
    });
  }

  update() {
    this.slimes.forEach((slime) => {
      slime.update(this.game.deltaTime);
    });
    this.setAnimations();
    this.setCollision();
  }

  setCollision() {
    this.slimes.forEach((slime) => {
      if (slime.collide(this.player.object)) {
        this.slimes = this.slimes.filter((a) => a !== slime);
      }
    });
  }

  setAnimations() {
    this.slimes.forEach((slime) => {
      slime.setAnimation("idle");
    });
  }
}
