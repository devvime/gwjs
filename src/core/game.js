import { scenes, setAllScenes } from "../scenes/scene-manager";
import { setKeys } from "./keys";

export default class Game {
  deltaTime = null;
  canvas = null;
  settings = {};
  paused = false;
  currentScene = {
    create() {},
    draw() {},
    update() {},
  };
  debug = false;

  constructor(settings) {
    this.settings = settings;
    this.createCanvas();
    this.canvas = document.querySelector("canvas").getContext("2d");
    this.canvas.scale(settings.scale || 1, settings.scale || 1);
    setAllScenes(this);
    setKeys();
  }

  createCanvas() {
    const canvas = document.createElement("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.body.append(canvas);
  }

  setScene(scene) {
    this.currentScene = scenes[scene];
    this.currentScene.create();
  }

  pause() {
    this.paused = true;
  }

  resume() {
    this.paused = false;
  }

  run() {
    this.canvas.clearRect(0, 0, window.innerWidth, window.innerHeight);
    this.currentScene.draw();
    this.currentScene.update();
  }
}
