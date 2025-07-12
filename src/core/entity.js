export class Entity {
  game = null;
  position = { x: 0, y: 0 };
  width = 0;
  height = 0;
  color = "black";
  sprite = null;
  spriteImage = null;
  body = { width: 10, height: 10, offsetX: 0, offsetY: 0 };
  visible = true;
  flip = false;
  animations = {}; // { name: { frames: [], frameRate: 100 } }
  currentAnimation = null;
  currentAnimationState = null;
  currentFrameIndex = 0;
  frameTimer = 0;

  constructor(settings) {
    this.game = settings.game;
    this.position.x = settings.x;
    this.position.y = settings.y;
    this.width = settings.width;
    this.height = settings.height;
    this.sprite = settings.sprite || null;
    this.color = settings.color || "black";
    if (settings.body) this.body = settings.body;
    if (this.sprite) {
      const img = new Image();
      img.src = this.sprite;
      this.spriteImage = img;
    }
    if (settings.animations) {
      this.animations = settings.animations;
      this.setAnimation(Object.keys(settings.animations)[0]);
    }
  }

  setAnimation(name) {
    if (name !== this.currentAnimationState) {
      this.currentAnimationState = name;
      if (this.animations[name]) {
        this.currentAnimation = this.animations[name];
        this.currentFrameIndex = 0;
        this.frameTimer = 0;
      }
    }
  }

  update(deltaTime) {
    if (!this.currentAnimation) return;
    this.frameTimer += deltaTime;
    const frameDuration = this.currentAnimation.frameRate;
    if (this.frameTimer >= frameDuration) {
      this.frameTimer = 0;
      this.currentFrameIndex =
        (this.currentFrameIndex + 1) % this.currentAnimation.frames.length;
    }
  }

  draw() {
    if (!this.visible) return;
    this.game.canvas.save();
    if (this.flip) {
      this.game.canvas.translate(this.position.x + this.width, this.position.y);
      this.game.canvas.scale(-1, 1);
    }
    if (this.spriteImage && this.currentAnimation) {
      const frame = this.currentAnimation.frames[this.currentFrameIndex];
      this.game.canvas.drawImage(
        this.spriteImage,
        frame.x,
        frame.y,
        frame.w,
        frame.h,
        this.flip ? 0 : this.position.x,
        this.flip ? 0 : this.position.y,
        this.width,
        this.height
      );
    } else if (this.spriteImage) {
      this.game.canvas.drawImage(
        this.spriteImage,
        this.flip ? 0 : this.position.x,
        this.flip ? 0 : this.position.y,
        this.width,
        this.height
      );
    }
    if (this.game.debug) {
      this.game.canvas.fillStyle = this.color;
      this.game.canvas.strokeStyle = "red";
      this.game.canvas.strokeRect(
        this.flip ? 0 + this.body.offsetX : this.position.x + this.body.offsetX,
        this.flip ? 0 + this.body.offsetY : this.position.y + this.body.offsetY,
        this.body.width,
        this.body.height
      );
    }
    this.game.canvas.restore();
  }

  collide(obj) {
    const a = {
      x: this.position.x + this.body.offsetX,
      y: this.position.y + this.body.offsetY,
      w: this.body.width,
      h: this.body.height,
    };
    const b = {
      x: obj.position.x + obj.body.offsetX,
      y: obj.position.y + obj.body.offsetY,
      w: obj.body.width,
      h: obj.body.height,
    };
    return (
      a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y
    );
  }
}
