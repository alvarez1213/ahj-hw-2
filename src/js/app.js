// создание структуры игрового поля
for (let i = 2; i <= 16; i++) {
  let div = document.createElement('div');
  const holeGame = document.querySelector(".hole-game");
  div.className = 'hole';
  div.setAttribute('data-id', i);
  holeGame.append(div);
}

const holes = [...document.querySelectorAll(".hole")];
const dead = document.querySelector(".dead");
const lost = document.querySelector(".lost");

function resetGame(message) {
  alert(message);
  dead.textContent = 0;
  lost.textContent = 0;
}

holes.forEach((hole) => {
  hole.addEventListener("click", () => {
    if (hole.classList.contains("hole_has-goblin")) {
      dead.textContent = parseInt(dead.textContent) + 1;
      if (parseInt(dead.textContent) === 10) {
        resetGame("Победа!");
      }
    } else {
      lost.textContent = parseInt(lost.textContent) + 1;
      if (parseInt(lost.textContent) === 5) {
        resetGame("Вы проиграли!");
      }
    }
  });
});
