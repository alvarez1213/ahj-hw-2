const holeGame = document.querySelector(".hole-game");
let holeWithGoblin = holeGame.querySelector(".hole_has-goblin");

function getRndNum(previous) {    
  const rnd = Math.floor(Math.random() * 16) + 1;
  if (previous == rnd) {      
    return getRndNum(previous);
  } else {    
    return rnd;
  }    
}

setInterval(() => {
  const randomNum = getRndNum(holeWithGoblin.dataset.id);
  holeWithGoblin.classList.remove("hole_has-goblin");
  holeWithGoblin = holeGame.querySelector(`[data-id="${randomNum}"]`);
  holeWithGoblin.classList.add("hole_has-goblin");
}, 1000);
