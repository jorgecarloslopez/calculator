function sumar() {
  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);
  let resultado = num1 + num2;
  document.getElementById("resultado").value = resultado;
}

function restar() {
  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);
  let resultado = num1 - num2;
  document.getElementById("resultado").value = resultado;
}

function multiplicar() {
  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);
  let resultado = num1 * num2;
  document.getElementById("resultado").value = resultado;
}

function dividir() {
  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);
  let resultado = num1 / num2;
  document.getElementById("resultado").value = resultado;
}

function calcular() {
  sumar();
  restar();
  multiplicar();
  dividir();
}
