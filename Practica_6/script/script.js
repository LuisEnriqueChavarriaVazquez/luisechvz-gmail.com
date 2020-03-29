var sizeDefinido;
var result1 = [];
var result2 = [];

//Para validar
var expreg = new RegExp("^[0-9]+$");
var expreg2 = new RegExp("^[a-z,A-Z]+$")

//Creacion de las matrices.
function definirTamano() {
    sizeDefinido = parseInt(prompt("Introduzca el tamaño de la matriz 1 & 2: "));
    result1 = [];
    result2 = [];
    if (expreg.test(sizeDefinido)) {
        console.log("El tamaño fue aceptado " + sizeDefinido);
        matrizCreador(sizeDefinido);
        return sizeDefinido;
    } else {
        alert("Introduza un valor númerico POSITIVO (Vuelva a intertarlo)")
    }
}


function matrizCreador(tamaño) {
    for (var i = 0; i < tamaño; i++) {
        result1.push(new Array(tamaño).fill(0));
        result2.push(new Array(tamaño).fill(0));
    }
    console.log(result1);
    console.log(result2);
    alert("Las matrices de tamaño " + tamaño + "x" + tamaño + " fueron creadas con exito.");
}


// Insertar los valores de las matrices.
function definirValores() {
    var aux = true;
    for (var i = 0; i < sizeDefinido; i++) {
        for (var contador = 0; contador < sizeDefinido; contador++) {
            valorJ = parseInt(prompt("Introduzca el valor en MATRIZ 1 de [" + i + "][" + contador + "]"));
            if (expreg2.test(valorJ)) {
                alert("Ingresa valores validos (NUMEROS) //// POR DEFAULT SERA 0 EN ESTA CASILLA.");
                aux = false;
            } else {
                result1[i][contador] = valorJ;
            }

        }
    }

    if (aux == false) {
        alert("Los valores en la MATRIZ anterior no eran validos ///// TODA LA MATRIZ DOS QUEDA EN CEROS");
    } else {
        for (var i = 0; i < sizeDefinido; i++) {
            for (var contador = 0; contador < sizeDefinido; contador++) {
                valorJ = parseInt(prompt("Introduzca el valor en MATRIZ 2 de [" + i + "][" + contador + "]"));
                if (expreg2.test(valorJ)) {
                    alert("Ingresa valores validos (NUMEROS) //// POR DEFAULT SERA 0 EN ESTA CASILLA");
                } else {
                    result2[i][contador] = valorJ;
                }
            }
        }
    }

    console.log(result1);
    console.log(result2);
    return result1, result2;
}


//Para multiplicar las matrices.
function multiplicarMatrices() {
    var result1NumRows = result1.length;
    var result1NumCols = result1[0].length;
    var multiplicarMatriz = new Array(result1NumRows);

    for (var rContador = 0; rContador < result1NumRows; ++rContador) {
        multiplicarMatriz[rContador] = new Array(result1NumCols); // initialize the current row
        for (var cContador = 0; cContador < result1NumCols; ++cContador) {
            multiplicarMatriz[rContador][cContador] = 0;             // initialize the current cell
            for (var i = 0; i < result1NumCols; ++i) {
                multiplicarMatriz[rContador][cContador] += result1[rContador][i] * result2[i][cContador];
            }
        }
    }
    console.log(multiplicarMatriz);
    displayAlert(multiplicarMatriz);
}

//Para sumar Matrices
function sumarMatrices() {
    var result1NumRows = result1.length;
    var result1NumCols = result1[0].length;
    var sumarMatriz = new Array(result1NumRows);
    for (var rContador = 0; rContador < result1NumRows; ++rContador) {
        sumarMatriz[rContador] = new Array(result1NumCols); // initialize the current row
        for (var cContador = 0; cContador < result1NumCols; ++cContador) {
            sumarMatriz[rContador][cContador] = 0;             // initialize the current cell
            sumarMatriz[rContador][cContador] = result1[rContador][cContador] + result2[rContador][cContador];
        }
    }
    console.log(sumarMatriz);
    displayAlert(sumarMatriz);
}

//Para encontrar las diagonales de las matrices
function getDiagonalMatrices() {
    var segundoValorDiagonal = [];
    var primerValorDiagonal = [];

    var result1NumCols = result1[0].length;
    for (var rContador = 0; rContador < result1NumCols; rContador++) {
        for (var cContador = 0; cContador < result1NumCols; cContador++) {
            if (rContador == cContador) {
                primerValorDiagonal[rContador] = result1[rContador][cContador];
                segundoValorDiagonal[rContador] = result2[rContador][cContador];
            }
        }
    }

    alert("MATRIZ 1 /// Los valores de la diagonal son: " + primerValorDiagonal + "\r" + "MATRIZ 2 /// Los valores de la diagonal son: " + segundoValorDiagonal);
}

//Poner en un alert
function displayAlert(m) {
    var aux = 'La matriz es = \r';
    for (var r = 0; r < m.length; ++r) {
        text = (m[r].join(' ') + '\r');
        aux += text;
    }
    alert(aux);
}