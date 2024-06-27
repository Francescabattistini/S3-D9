const bottoneRandom = document.getElementById("play");

const creoCaselle = function () {
  const contenitore = document.getElementById("contenitore");
  for (let index = 1; index < 90; index++) {
    const caselle = document.createElements("div");
    caselle.classList.add("caselle");
    const numero = document.createElements("h3");
    numero.innerText = index;
    caselle.appendchild(number);
    contenitore.appendChild(caselle);
  }
};
ì;
