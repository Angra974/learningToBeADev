const keys = Array.from(document.querySelectorAll(".key"));

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
}

function playSound(e) {
  let audio = document.querySelector(`audio[data-key="${e.keyCode}"`);
  if (!audio) return;
  let key = document.querySelector(`div.key[data-key="${e.keyCode}"]`);
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}

keys.forEach((el) => {
  el.addEventListener("transitionend", removeTransition);
});
window.addEventListener("keydown", playSound);
