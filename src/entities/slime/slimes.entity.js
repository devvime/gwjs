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

  spawnSlime() {
    const maxAttempts = 10;
    let attempts = 0;
    let position;
    let minDistance = 1.5; // distância mínima entre slimes

    do {
      // Gera uma posição aleatória próxima ao player
      position = {
        x: this.player.object.position.x + randomFloat(-5, 5),
        y: this.player.object.position.y + randomFloat(-5, 5),
      };

      // Verifica se a nova posição colide com algum slime existente
      const overlapping = this.slimes.some((slime) => {
        const dx = slime.object.position.x - position.x;
        const dy = slime.object.position.y - position.y;
        const dist = Math.hypot(dx, dy);
        return dist < minDistance;
      });

      if (!overlapping) break;
      attempts++;
    } while (attempts < maxAttempts);

    // Se encontrou uma posição válida, cria o slime
    if (attempts < maxAttempts) {
      const slime = new Slime(this.game, this.player);
      slime.object.position.x = position.x;
      slime.object.position.y = position.y;
      this.slimes.push(slime);
      slime.create();
    }
  }
}
