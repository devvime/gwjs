export default class Scene {
  game = null;
  container = null;

  constructor(game) {
    this.game = game;
    this.container = document.querySelector("#container");
  }

  activeContainer() {
    this.container.classList.add("active");
  }

  disableContainer() {
    this.container.classList.remove("active");
  }

  clearContainer() {
    this.container.innerHTML = "";
  }

  setContainerData(data) {
    this.container.innerHTML = data;
  }

  clickContainer(element, callback) {
    document.querySelector(element).addEventListener("click", callback);
  }
}
