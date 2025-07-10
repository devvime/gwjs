export const keys = {};

export function setKeys() {
  window.addEventListener("keydown", (e) => {
    const key = e.key.toLowerCase();
    keys[key] = true;
  });
  window.addEventListener("keyup", (e) => {
    const key = e.key.toLowerCase();
    keys[key] = false;
  });
}
