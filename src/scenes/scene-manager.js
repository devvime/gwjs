import MainMenu from "./main-menu.scene";

export const scenes = {};

export function setAllScenes(game) {
  scenes["mainMenu"] = new MainMenu(game);
}
