import Scene from "../../core/scene";
import element from "./template/container.html?raw";

export default class MainMenu extends Scene {
  element = "";

  create() {
    this.element = element;
    this.activeContainer();
    this.setContainerData(this.element);
    this.clickContainer("#btnStartGame", () => {
      this.clearContainer();
      this.game.setScene("game");
    });
  }

  draw() {}

  update() {}
}
