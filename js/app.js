let counter = 0;
const d0 = document.getElementById('d0');
const d1 = document.getElementById('d1');
const d2 = document.getElementById('d2');
const d3 = document.getElementById('d3');

function increase() {
  counter++;
  d0.innerText = counter % 10;
  d1.innerText = parseInt(counter / 10) % 10;
  d2.innerText = parseInt(counter / 100) % 10;
  d3.innerText = parseInt(counter / 1000) % 10;
}

function reset() {
  counter = 0;
  d0.innerText = 0;
  d1.innerText = 0;
  d2.innerText = 0;
  d3.innerText = 0;
}
