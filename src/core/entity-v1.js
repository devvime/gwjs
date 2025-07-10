export class Entity {
  game = null;
  position = { x: 0, y: 0 };
  width = 0;
  height = 0;
  color = "black";
  sprite = null;
  spriteImage = null;
  velocity = 5;
  visible = true;
  flip = false;

  constructor(settings) {
    this.game = settings.game;
    this.position.x = settings.x;
    this.position.y = settings.y;
    this.width = settings.width;
    this.height = settings.height;
    this.sprite = settings.sprite || null;
    this.color = settings.color || "black";

    if (settings.sprite) {
      const img = new Image();
      img.src = this.sprite;
      this.spriteImage = img;
    }
  }

  draw() {
    if (!this.visible) return;
    if (this.flip) {
      this.game.canvas.save();
      this.game.canvas.translate(this.position.x + this.width, this.position.y);
      this.game.canvas.scale(-1, 1);
    }
    if (this.sprite !== null) {
      this.game.canvas.drawImage(
        this.spriteImage,
        this.flip ? 0 : this.position.x,
        this.flip ? 0 : this.position.y,
        this.width,
        this.height
      );
    } else {
      this.game.canvas.fillStyle = this.color;
      this.game.canvas.fillRect(
        this.position.x,
        this.position.y,
        this.width,
        this.height
      );
    }
    this.game.canvas.restore();
  }

  collide(obj) {
    if (
      this.position.x < obj.position.x + obj.width &&
      this.position.x + this.width > obj.position.x &&
      this.position.y < obj.position.y + obj.height &&
      this.position.y + this.height > obj.position.y
    ) {
      return true;
    } else {
      return false;
    }
  }
}
