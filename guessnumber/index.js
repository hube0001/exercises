let inputFelt = document.getElementById("input");
let knap = document.getElementById("button");
let feedback = document.getElementById("feedback");
const win = document.getElementById("win");

hemmeligtTal = Math.floor(Math.random() * 100);

knap.addEventListener("click", function () {
  let brugerGaet = inputFelt.value;
  brugerGaet = Number(brugerGaet);

  if (brugerGaet > hemmeligtTal) {
    feedback.innerText = "A LITTLE TOO HIGH, FRIEND";
    win.style.display = "none";
  } else if (brugerGaet < hemmeligtTal) {
    feedback.innerText = "A LITTLE TOO LOW, FRIEND";
    win.style.display = "none";
  } else {
    feedback.innerText = "CORRECT";
    win.style.display = "block";
  }
});
