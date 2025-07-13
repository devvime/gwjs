import { Entity } from "../../core/entity";
import { keys } from "../../core/keys";
import { animations } from "./player.animations";

export class Player {
  game = null;
  object = null;
  collisions = [];
  isAttacking = false;
  attackReady = true;

  constructor(game) {
    this.game = game;
  }

  create() {
    this.object = new Entity({
      game: this.game,
      x: 100,
      y: 100,
      width: 48,
      height: 48,
      body: { width: 15, height: 22, offsetX: 17, offsetY: 21 },
      sprite: "public/assets/game/sprites/characters/player.png",
      animations,
    });
    this.object.velocity = 1.5;
    window.addEventListener("click", () => this.attack());
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
    if (this.isAttacking) return;
    if (keys["w"]) {
      this.object.setAnimation("walkUp");
    } else if (keys["s"]) {
      this.object.setAnimation("walkDown");
    } else if (keys["d"] && !keys["a"]) {
      this.object.flip = false;
      this.object.setAnimation("walkRight");
    } else if (keys["a"] && !keys["d"]) {
      this.object.flip = true;
      this.object.setAnimation("walkRight");
    } else {
      this.object.setAnimation("idle");
    }
  }

  attack() {
    if (!this.isAttacking && this.attackReady) {
      this.attackReady = false;
      this.isAttacking = true;
      this.object.setAnimation("attackRight");
      setTimeout(() => (this.isAttacking = false), 300);
      setTimeout(() => (this.attackReady = true), 500);
    }
  }
}
