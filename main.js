// Las "llaves" de encriptación que utilizaremos son las siguientes:

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

// Requisitos:

// Debe funcionar solo con letras minúsculas
// No deben ser utilizados letras con acentos ni caracteres especiales
// Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.
// Por ejemplo:
// "gato" => "gaitober"
// gaitober" => "gato"

const botonEncriptar = document.getElementById("botonEncriptar");

const botonDesencriptar = document.getElementById("botonDesencriptar");
const inputTexto = document.getElementById("inputTexto");
const spanEscribe = document.getElementById("spanEscribe");
const textAreaEscribe = document.getElementById("textAreaEscribe");
const spanBoton = document.getElementById("spanBoton");
const imgMune = document.getElementById("imgMune");
const ningunMensaje = document.getElementById("ningunMensaje");
const ningunTexto = document.getElementById("ningunTexto");

let arreglo = [];
let arreglo2 = [];
let arreglo3 = [];
let arreglo4 = [];
let x = 0;
let c = 0;
let estado = true;

function desencriptar() {
  arreglo3.push(inputTexto.value);

  arreglo4.push([]);
  let contador = 0;

  for (let i = c; i < arreglo3.length; i++) {
    let palabraDesencriptada = arreglo3[i];
    let desencriptado = "";

    for (let i = 0; i < palabraDesencriptada.length; i++) {
      let letra = palabraDesencriptada.charAt(i);
      if (letra === "e" && palabraDesencriptada.substr(i, 5) === "enter") {
        desencriptado += "e";
        arreglo4[c].push(desencriptado);
        i = i + 4;
      } else if (
        letra === "i" &&
        palabraDesencriptada.substr(i, 4) === "imes"
      ) {
        desencriptado += "i";
        arreglo4[c].push(desencriptado);
        i = i + 3;
      } else if (letra === "a" && palabraDesencriptada.substr(i, 2) === "ai") {
        desencriptado += "a";
        arreglo4[c].push(desencriptado);
        i = i + 1;
      } else if (
        letra === "o" &&
        palabraDesencriptada.substr(i, 4) === "ober"
      ) {
        desencriptado += "o";
        arreglo4[c].push(desencriptado);
        i = i + 3;
      } else if (
        letra === "u" &&
        palabraDesencriptada.substr(i, 4) === "ufat"
      ) {
        desencriptado += "u";
        arreglo4[c].push(desencriptado);
        i = i + 3;
      } else {
        desencriptado += letra;
        arreglo4[c].push(desencriptado);
      }
      contador++;
    }
  }
  contador = contador - 1;
  let cadena = arreglo4[c][contador];
  contador = 0;

  imgMune.remove();
  ningunMensaje.remove();
  ningunTexto.remove();
  spanEscribe.className =
    "px-11 text-xl h-96 resize-none bg-slate-50 block dark:bg-gray-800 focus:outline-0";
  spanEscribe.textContent = cadena;

  if (estado == true) {
    const botonCopiar = document.createElement("button");
    botonCopiar.textContent = "Copiar";
    botonCopiar.id = "botonCopiar";
    botonCopiar.className =
      "border border-blue-900 mx-8 rounded-3xl h-16 flex justify-center items-center cursor-pointer w-64";
    spanBoton.appendChild(botonCopiar);
    estado = false;
  }

  document.getElementById("botonCopiar").onclick = function () {
    navigator.clipboard.writeText(cadena);
  };

  c++;
}

function encriptar() {
  arreglo.push(inputTexto.value);
  console.log(arreglo);
  arreglo2.push([]);
  for (let i = x; i < arreglo.length; i++) {
    let palabra = arreglo[i];
    for (let contador = 0; contador < palabra.length; contador++) {
      // console.log(contador)
      let letra = palabra.charAt(contador);
      if (letra == "e") {
        letra = "enter";
      }
      if (letra == "i") {
        letra = "imes";
      }
      if (letra == "a") {
        letra = "ai";
      }
      if (letra == "o") {
        letra = "ober";
      }
      if (letra == "u") {
        letra = "ufat";
      }
      // console.log(letra);
      arreglo2[x].push(letra);
    }
  }
  let cadena = arreglo2[x].join("");

  imgMune.remove();
  ningunMensaje.remove();
  ningunTexto.remove();
  spanEscribe.className =
    "px-11 text-xl h-96 resize-none bg-slate-50 block dark:bg-gray-800 focus:outline-0";
  spanEscribe.textContent = cadena;

  if (estado == true) {
    const botonCopiar = document.createElement("button");
    botonCopiar.textContent = "Copiar";
    botonCopiar.id = "botonCopiar";
    botonCopiar.className =
      "border border-blue-900 mx-8 rounded-3xl h-16 flex justify-center items-center cursor-pointer w-64 dark:bg-slate-50 dark:text-gray-800 ";

    spanBoton.appendChild(botonCopiar);
    estado = false;
  }

  document.getElementById("botonCopiar").onclick = function () {
    navigator.clipboard.writeText(cadena);
  };

  x++;
}

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

// imgMune.remove();
// ningunMensaje.remove();
// ningunTexto.remove();
