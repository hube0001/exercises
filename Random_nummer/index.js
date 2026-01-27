function randomNummer() {
  const random = Math.random() * 100;
  document.getElementById("resultat").innerHTML = random;
}

randomNummer();
