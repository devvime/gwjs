import Text from "./text";

export default class Button {
  game = null;
  data = null;

  constructor(game, data) {
    this.game = game;
    this.data = data;
  }

  draw() {
    this.game.canvas.fillStyle = this.data.color || "black";
    this.game.canvas.fillRect(
      this.data.x,
      this.data.y,
      this.data.width,
      this.data.height
    );
    const text = new Text(this.game, {
      text: this.data.text,
      font: this.data.font || "Arial",
      color: this.data.textColor || "white",
      size: this.data.textSize,
      x: this.data.x + this.data.width / 6.5,
      y: this.data.y + this.data.height / 1.8,
    });
    text.draw();
  }
}
