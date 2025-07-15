import { randomFloat } from "../../core/helpers/random.float";
import { Slime } from "./slime.entity";

export class Slimes {
  game = null;
  player = null;
  slimes = [];

  constructor(game, player) {
    this.game = game;
    this.player = player;
  }

  create() {
    this.slimes.push(new Slime(this.game, this.player));
    this.slimes[this.slimes.length - 1].create();

    const spawnSlime = () => {
      const slime = new Slime(this.game, this.player);
      this.slimes.push(slime);
      slime.create();
      const nextSpawn = randomFloat(1000, 3000);
      setTimeout(spawnSlime, nextSpawn);
    };

    spawnSlime();
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
      if (slime.object.collide(this.player.object)) {
        this.slimes = this.slimes.filter((a) => a !== slime);
      }
    });
  }

  setAnimations() {
    this.slimes.forEach((slime) => {
      slime.object.setAnimation("idle");
    });
  }
}
