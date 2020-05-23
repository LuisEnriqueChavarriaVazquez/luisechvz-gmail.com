class Stack {
  constructor() {
    this.datosDePila = [];
    this.topeDeLaPila = 0;
  }

  //Para la insercion
  push(element) {
    this.datosDePila[this.topeDeLaPila] = element;
    this.topeDeLaPila = this.topeDeLaPila + 1;
  }

  //Para la longitud
  length() {
    return this.topeDeLaPila;
  }

  //Para saber el topeDeLaPilae de la pila
  peek() {
    return this.datosDePila[this.topeDeLaPila - 1];
  }

  //Nos ayuda a saber si vacia
  isEmpty() {
    return this.topeDeLaPila === 0;
  }

  //saca la ultima celda
  pop() {
    if (this.isEmpty() === false) {
      this.topeDeLaPila = this.topeDeLaPila - 1;
      return this.datosDePila.pop();
    }
  }

  //para visualizacion y pruebas
  print() {
    var topeDeLaPila = this.topeDeLaPila - 1;
    while (topeDeLaPila >= 0) {
      console.log(this.datosDePila[topeDeLaPila]);
      topeDeLaPila--;
    }
  }
}

//Pruebas de stack
const stack = new Stack();

//VALORES DEL Form
var btn1, btn2, btn3;
btn1 = document.getElementById('btn1');
btn2 = document.getElementById('btn2');
btn3 = document.getElementById('btn3');

//Ingresamos los valores al stack
var valorAdd; /*Valor recibido por nuestro input*/
btn1.onclick = function () {
  valorAdd = document.getElementById('value').value;
  if (valorAdd == '') {
    alert("Ingrese un valor porfavor");
  } else {
    stack.push(valorAdd);
    stack.print();
    meterCelda(valorAdd); /*Insercion de elementos*/
    insertsCode();
    insertOfCode[3].classList.add("hidder");
    operationsPush(valorAdd);
    return valorAdd;
  }
}

//Meter valor en la celda
var boxStack = document.getElementById('boxStack');
var pointersDesign = document.getElementsByClassName('pointerGris');
var celdasReset = document.getElementsByClassName("celda");
var textos = document.getElementsByClassName("textoCelda");
function meterCelda(valorAdd) {

  var newDiv = document.createElement("div");
  newDiv.classList.add("celda");

  var newText = document.createElement("p");
  newText.classList.add("textoCelda");
  newText.innerHTML = valorAdd;
  newDiv.appendChild(newText);
  boxStack.appendChild(newDiv);
  newDiv.classList.add("animacionCelda");

  pointersDesign[0].classList.remove('hidder');
  pointersDesign[1].classList.remove('hidder');

}


//Borrar valor
var detectaBorrado = 0;
btn2.onclick = function () {
  if (stack.length() == 0) {
    alert("No hay valores en tu pila");
  } else {
    stack.pop();
    stack.print();
    salidaCelda();
    insertsCode();
    insertOfCode[1].classList.add("hidder");
    insertOfCode[2].classList.add("hidder");
    insertOfCode[3].classList.remove("hidder");
    operationsPop();
  }
}

var final = document.getElementById('pointerUp');
var init = document.getElementById('pointerDown');

function salidaCelda(){
  celdasReset[celdasReset.length - 1].classList.add('salidaCelda');
  var timerMio = setTimeout(borrarCelda, 1000);
  
}

function borrarCelda() {
  //console.log(celdasReset);
  boxStack.removeChild(celdasReset[celdasReset.length - 1]);
  if (stack.length() == 0) {
    final.classList.add('hidder');
    init.classList.add('hidder');
  } else {
    final.classList.remove('hidder');
    init.classList.remove('hidder');
  }
  return celdasReset;
}

//reset all STACK
btn3.onclick = function () {
    location.reload(true);
}

/*Codigo sections*/

var insertOfCode = document.getElementsByClassName("inserts");

function insertsCode(){
  if( stack.length() > 0){
    insertOfCode[2].classList.remove("hidder");
    insertOfCode[1].classList.remove("hidder");
  }else if( stack.length() == 0){
    insertOfCode[2].classList.add("hidder");
    insertOfCode[1].classList.add("hidder");
    insertOfCode[3].classList.add("hidder");
  }
}

var operationsBox = document.getElementsByClassName("operations");
var operationSingle;
function operationsPush(valorAdd){
  operationSingle = document.createElement("p");
  operationSingle.classList.add("oranger");
  operationsBox[0].appendChild(operationSingle);
  operationSingle.innerHTML = "push(nodo," + valorAdd + ")";
}

function operationsPop(){
  operationSingle = document.createElement("p");
  operationSingle.classList.add("oranger");
  operationsBox[0].appendChild(operationSingle);
  operationSingle.innerHTML = "pop(nodo)";
}

