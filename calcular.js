//inline = interface redesenhada, dificulta a manutenção do sistema web 
//Evitado = joga para classe 

var numero1 = 0;
var numero2 = 0;
var operacao = "+";
var operacaoChange = false;

function toggleResult(show) {
  var classList = spanResultado.parentElement.classList;
  if (show) {
    classList.remove("hidden");
  } else {
    classList.add("hidden");
  }
}

function setNumero1(input) {
  numero1 = +input.value;
  console.log("Número 1: ", numero1);
  toggleResult(false);
}

function setNumero2(input) {
  numero2 = +input.value;
  console.log("Número 2: ", numero2);
  toggleResult(false);
}

function setOperacao(select) {
  operacao = select.value;
  console.log("Operação: ", numero2);
  toggleResult(false);
  operacaoChange = true;
}

function calcular() {
  console.log(numero1, operacao, numero2);
  var resultado;
  switch (operacao) {
    case "+":
      resultado = numero1 + numero2;
      break;
    case "-":
      resultado = numero1 - numero2;
      break;
    case "*":
      resultado = numero1 * numero2;
      break;
    case "/":
      resultado = numero1 / numero2;
      break;
  }
  console.log("Resultado: ", resultado);

  // document.getElementById('id-da-tag');
  var spanResultado = document.getElementsByTagName("span")[0];
  console.log("spanResultado: ", spanResultado);

  if (spanResultado.firstChild) {
    spanResultado.removeChild(spanResultado.firstChild);
  }

  var textResultado = document.createTextNode(resultado);
  console.log("textResultado: ", textResultado);
  spanResultado.appendChild(textResultado);

  toggleResult(true);
  //   spanResultado.innerHTML = resultado;
}

function validaNumero(input) {
  var numero = +input.value;
  var spanParent = input.parentElement.getElementsByTagName("span")[0];

  if (isNaN(numero)) {
    var spanElement = document.createElement("span");
    // spanElement.style.color = 'red';
    // spanElement.style.fontWeight = 'bold';
    spanElement.classList.add("invalid");

    var textNode = document.createTextNode("Valor inválido!");
    spanElement.appendChild(textNode);
    var spanParent = input.parentElement.getElementsByTagName("span")[0];
    if (!spanParent) {
      input.parentElement.appendChild(spanElement);
    }
  } else if (spanParent) {
    spanParent.remove();
  }
}

function enableCalc() {
  var value1 = document.getElementById("inputNumero1").value;
  var value2 = document.getElementById("inputNumero2").value;
  var hasValue = value1 && value2;
  document.getElementById('calcular').disabled = !hasValue;
}