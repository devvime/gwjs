export default class Text {
  text = "";

  draw_text(size, font, x, y, color) {
    canvas.font = size + "px" + " " + font;
    canvas.fillStyle = color;
    canvas.fillText(this.text, x, y);
  }
}
