class Stack {
  constructor() {
    this.data = [];
    this.top = 0;
  }
  push(element) {
    this.data[this.top] = element;
    this.top = this.top + 1;
  }
  length() {
    return this.top;
  }
  peek() {
    return this.data[this.top - 1];
  }
  isEmpty() {
    return this.top === 0;
  }
  pop() {
    if (this.isEmpty() === false) {
      this.top = this.top - 1;
      return this.data.pop(); // removes the last element
    }
  }
  print() {
    var top = this.top - 1; // because top points to index where new    element to be inserted
    while (top >= 0) { // print upto 0th index
      console.log(this.data[top]);
      top--;
    }
  }
}

//Pruebas de stack
const stack = new Stack();
/*console.log(stack.length());
console.log(stack.push('john'));
console.log(stack.push('The rock'));
console.log(stack.length());
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek());*/


//VALORES DEL Form
var btn1, btn2, btn3;
btn1 = document.getElementById('btn1');
btn2 = document.getElementById('btn2');
btn3 = document.getElementById('btn3');

//Ingresamos los valores al stack
var valorAdd;
btn1.onclick = function () {
  valorAdd = document.getElementById('value').value;
  if (valorAdd == '') {
    alert("Ingrese un valor porfavor");
  } else {
    stack.push(valorAdd);
    stack.print();
    alert("El valor ingresado es " + valorAdd);

    meterCelda(valorAdd);
    return valorAdd;
  }
}

//Meter valor en la celda
var boxStack = document.getElementById('boxStack');
function meterCelda(valorAdd) {
  if (stack.length() == 1) {
    var newDiv = document.createElement("div");
    newDiv.classList.add("celda");

    var newText = document.createElement("p");
    newText.classList.add("textoCelda", "first");
    newText.innerHTML = valorAdd;

    newDiv.appendChild(newText);
    boxStack.appendChild(newDiv);
  } else {
    var newDiv = document.createElement("div");
    newDiv.classList.add("celda");

    var newText = document.createElement("p");
    newText.classList.add("textoCelda");
    newText.innerHTML = valorAdd;

    newDiv.appendChild(newText);
    boxStack.appendChild(newDiv);
  }

  var textoCeldaFix = document.getElementsByClassName('textoCelda');
  textoCeldaFix[textoCeldaFix.length - 1].classList.add("first");


  //Arregla el fallo del posicionamiento del texto
  for (var k = 3; k <= stack.length(); k++) {
    var contador = 1;
    if (stack.length() >= 3) {
      textoCeldaFix[stack.length() - 2].classList.remove("first");
    }
  }
}

//Borrar valor
btn2.onclick = function () {
  if (stack.length() == 0) {
    alert("No hay valores en tu pila");
  } else {
    stack.pop();
    stack.print();
    alert("El valor ha sido borrado");
  }
}

//reset all STACK
var celdasReset = document.getElementsByClassName("celda");
btn3.onclick = function () {
  var size = stack.length();
  if(size == 0){
    alert("Aun no hay nada en la pila")
  }else{
    for (var i = 0; i < size; i++) {
      stack.pop();
      celdasReset[i].classList.add("hidder");
      console.log(stack.length())
    }
    location.reload(true);
  }
}


