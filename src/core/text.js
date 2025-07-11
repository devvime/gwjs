export default class Text {
  game = null;
  data = {
    text: "GWJS",
    font: "Arial",
    color: "black",
    size: 10,
    x: 10,
    y: 10,
  };

  constructor(game, data) {
    this.game = game;
    this.data = data;
  }

  draw() {
    this.game.canvas.font = this.data.size + "px" + " " + this.data.font;
    this.game.canvas.fillStyle = this.data.color;
    this.game.canvas.fillText(this.data.text, this.data.x, this.data.y);
  }
}
