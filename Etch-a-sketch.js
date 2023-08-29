const DEFECTO_TAMAÑO = 16;
const COLOR = "#000"
let varioscolr = COLOR;
let tamañoDefe = DEFECTO_TAMAÑO;
let currentColorMode = "negro";

function actualizaTamaño(actual) {
  tamañoDefe = actual;
  añadirtamaño(actual);
  reloadGrid();
}
function micolor(pnm) {
varioscolr = pnm;
}
micolor()
console.log(varioscolr)
const cambioColor = document.getElementById("cambioColor")
const cuadricula = document.getElementById("cuadricula");
const Tamañovalue = document.getElementById("tamañoDelvalor");
const tamañorango = document.getElementById("tamañoRango");
const eliminar = document.getElementById("btn_eleminar");
const limpieza = document.getElementById("btn_limpieza");
const negrov = document.getElementById("btn_negro");
const Arcoiris = document.getElementById("arcoiris");


cambioColor.oninput = (e) => micolor(e.target.value)
Tamañovalue.oninput = (e) => actualizaTamaño(e.target.value);
tamañorango.onchange = (e) => changeSize(e.target.value);
negrov.onclick = negro;
eliminar.onclick = resetColores;
limpieza.onclick = reloadGrid;
Arcoiris.onclick = alcoiris;
window.onload = () => {
  agregarCuadritos(tamañoDefe);
  changeColorMode(currentColorMode);
};

function changeSize(value) {
  actualizaTamaño(value);
}

function reloadGrid() {
  clearGrid();
  changeColorMode(currentColorMode);
}

function clearGrid() {
  cuadricula.innerHTML = ""; 
  agregarCuadritos(tamañoDefe);
}
function añadirtamaño(value) {
  Tamañovalue.textContent = `${value} x ${value}`;
}

function agregarCuadritos(rows) {
  // Tamaño de cada celda
  cuadricula.style.gridTemplate = `repeat(${rows}, 1fr) / repeat(${rows}, 1fr)`;

  for (let i = 0; i < rows * rows; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cuadricula.appendChild(cell);
  }
}

function micolor(pnm) {
  varioscolr = pnm;
  // Cambia el color de las celdas cuando se seleccione un color
  const celdas = document.querySelectorAll(".cell");
  celdas.forEach((celda) => {
    celda.addEventListener("mouseover", () => {
      celda.style.backgroundColor = varioscolr;
    });
  });
}

function changeColor(e) {
  if (currentColorMode === "arcoiris") {
    const RandomRGB = () => Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${RandomRGB()}, ${RandomRGB()}, ${RandomRGB()})`;
  } else if (currentColorMode === "negro") {
    e.target.style.backgroundColor = "black";
  }
}

function changeColorMode(mode) {
  currentColorMode = mode;
  const celdas = document.querySelectorAll(".cell");
  celdas.forEach((celda) => {
    celda.removeEventListener("mouseover", changeColor);
    if (mode === "negro") {
      celda.addEventListener("mouseover", () => {
        celda.style.backgroundColor = "black";
      });
    } else if (mode === "arcoiris") {
      celda.addEventListener("mouseover", changeColor);
    }
  });
}
function negro() {
  changeColorMode("negro");
}

function alcoiris() {
  changeColorMode("arcoiris");
}


function resetColores() {
  currentColorMode = "arcoris";
  const celdas = cuadricula.querySelectorAll(".cell");
  celdas.forEach((celda) => {
    celda.addEventListener("mouseover", () => {
      celda.style.backgroundColor = "white";
    });
  });
}

