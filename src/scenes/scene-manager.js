import Game from "./game.scene";
import MainMenu from "./main-menu/main-menu.scene";

export const scenes = {};

export function setAllScenes(game) {
  scenes["mainMenu"] = new MainMenu(game);
  scenes["game"] = new Game(game);
}
