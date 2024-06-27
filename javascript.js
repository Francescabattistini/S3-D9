const contenitoreTombola = document.getElementById("contenitore");
const bottonePlay = document.getElementById("play");
let numeriGiaUsciti = [];

const creaCelle = function () {
  for (let i = 1; i <= 90; i++) {
    const cella = document.createElement("div");
    const numeri = document.createElement("h3");
    cella.id = i;
    numeri.innerText = i;
    cella.appendChild(numeri);
    contenitoreTombola.appendChild(cella);
  }
};

creaCelle();

bottonePlay.addEventListener("click", (e) => {
  e.preventDefault();
  if (numeriGiaUsciti.length === 90) {
    return;
  }
  const numeroRandom1 = numeroRandom();
  const divDaModificare = getDivByNumber(numeroRandom1);
  coloraDiv(divDaModificare);
});

function numeroRandom() {
  const CasualeNum = Math.floor(Math.random() * 90 + 1);
  if (numeriGiaUsciti.includes(CasualeNum)) {
    return numeroRandom();
  }
  numeriGiaUsciti.push(CasualeNum);

  console.log(numeriGiaUsciti);
  return CasualeNum;
}

function getDivByNumber(number) {
  const div = document.getElementById(number);
  return div;
}

function coloraDiv(div) {
  //TODO: da scrivere classe CSS "blue"
  div.classList.add("blue");
}
