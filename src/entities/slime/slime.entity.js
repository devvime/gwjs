import { Entity } from "../../core/entity";
import { randomFloat } from "../../core/helpers/random.float";
import { animations } from "./slime.animations";

export class Slime {
  game = null;
  player = null;
  object = null;
  death = false;

  constructor(game, player) {
    this.game = game;
    this.player = player;
  }

  create() {
    this.object = new Entity({
      game: this.game,
      x: randomFloat(0, window.innerWidth),
      y: randomFloat(0, window.innerHeight),
      width: 32,
      height: 32,
      body: { width: 15, height: 15, offsetX: 8.5, offsetY: 10.5 },
      sprite: "public/assets/game/sprites/characters/slime.png",
      animations,
    });
    this.object.velocity = randomFloat(1, 1.5);
  }

  draw() {
    this.object.draw();
  }

  update() {
    this.object.update(this.game.deltaTime);
    this.setAnimations();
    this.setCollision();
    this.movement();
  }

  movement() {
    if (this.death) return;
    const dx = this.player.object.position.x - this.object.position.x;
    const dy = this.player.object.position.y - this.object.position.y;
    const distance = Math.hypot(dx, dy);

    if (distance > randomFloat(0.1, 0.5)) {
      this.object.position.x += (dx / distance) * this.object.velocity;
      this.object.position.y += (dy / distance) * this.object.velocity;
    }
  }

  setCollision() {
    if (this.object.collide(this.player.object)) {
      this.death = true;
    }
  }

  setAnimations() {
    this.object.setAnimation("idle");
  }
}
