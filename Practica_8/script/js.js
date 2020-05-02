let btnSend = document.getElementById('submit');
var soloNumbers = new RegExp("^[0-9]+$");
var soloNumbersFloat = new RegExp("^[0-9,'.']+$");
var soloCharacters = new RegExp("^[a-z,A-Z,' ',á,é,í,ó,ú,Á,É,Í,Ó,Ú,'.']+$");

var micookie = document.cookie;
function leerCookie(nombre) {
    var lista = document.cookie.split(";");
    for (i in lista) {
        var busca = lista[i].search(nombre);
        if (busca > -1) { micookie = lista[i] }
    }
    var igual = micookie.indexOf("=");
    var valor = micookie.substring(igual + 1);
    return valor;
}

function setTimeForCookies (minutes) {
	var now = new Date();
	var time = now.getTime();
 
	time += minutes * 60 * 1000;
	now.setTime(time);
	return now;
}

document.getElementById('nombre').value = leerCookie("GNombre");
document.getElementById('apPaterno').value = leerCookie("Apellido Paterno");
document.getElementById('apMaterno').value = leerCookie("Apellido Materno");
document.getElementById('nac').value = leerCookie("Fecha Nacimiento");
document.getElementById('signo').value = leerCookie("Signo Zodiacal");
document.getElementsByName('genero').value = leerCookie("Genero"); //Ciclado
document.getElementById('email').value = leerCookie("Email");
document.getElementById('calle').value = leerCookie("Calle");
document.getElementById('codigoPostal').value = leerCookie("Codigo Postal");
document.getElementById('numeroCasa').value = leerCookie("Numero De Casa");
document.getElementById('delagacion').value = leerCookie("Delegacion");
document.getElementsByName('checkboxes').value = leerCookie("Lenguajes"); // Ciclado
document.getElementById('pasatiempos').value = leerCookie("Pasatiempos"); //Ciclado
document.getElementById('promedio').value = leerCookie("Promedio");
document.getElementById('semestre').value = leerCookie("Semestre Actual");
document.getElementsByName('materiasDebe').value = leerCookie("Debe Materias"); //Ciclado
document.getElementById('comentario').value = leerCookie("Comentarios");
document.getElementById("nombreUser").value = leerCookie("Nombre del Usuario");
document.getElementById("password").value = leerCookie("Password del usuario");
//Fecha con fragmentos
document.getElementById('dia').value = leerCookie("dia"); /*validado*/
document.getElementById('mes').value = leerCookie("mes"); /*validado*/
document.getElementById('year').value = leerCookie("year"); /*validado*/

var sexo = document.getElementsByName('genero');
console.log(leerCookie("Genero"))
if (leerCookie("Genero") == "Masculino") {
    sexo[0].checked = true;
} else if (leerCookie("Genero") == "Femenino") {
    sexo[1].checked = true;
} else {
    sexo[0].checked = false;
    sexo[1].checked = false;
}


var oweMaterias = document.getElementsByName('materiasDebe'); /*validado*/
console.log(leerCookie("Debe Materias"))
if (leerCookie("Debe Materias") == "Si") {
    oweMaterias[0].checked = true;
} else if (leerCookie("Debe Materias") == "No") {
    oweMaterias[1].checked = true;
} else {
    oweMaterias[0].checked = false;
    oweMaterias[1].checked = false;
}

if (leerCookie("opcion1") == "si") {
    document.getElementById('opcion1').selected = true;
} else if (leerCookie("opcion1") == "no") {
    document.getElementById('opcion1').selected = false;
}

if (leerCookie("opcion2") == "si") {
    document.getElementById('opcion2').selected = true;
} else if (leerCookie("opcion2") == "no") {
    document.getElementById('opcion2').selected = false;
}

if (leerCookie("opcion3") == "si") {
    document.getElementById('opcion3').selected = true;
} else if (leerCookie("opcion3") == "no") {
    document.getElementById('opcion3').selected = false;
}

if (leerCookie("opcion4") == "si") {
    document.getElementById('opcion4').selected = true;
} else if (leerCookie("opcion4") == "no") {
    document.getElementById('opcion4').selected = false;
}

if (document.cookie.includes("Lenguaje C") == true) {document.getElementsByName('check')[0].checked = true;}
if (document.cookie.includes("C++") == true) {document.getElementsByName('check')[1].checked = true;}
if (document.cookie.includes("JAVA") == true) {document.getElementsByName('check')[2].checked = true;}
if (document.cookie.includes("JS") == true) {document.getElementsByName('check')[3].checked = true;}
if (document.cookie.includes("PYTHON") == true) {document.getElementsByName('check')[4].checked = true;}
if (document.cookie.includes("RUBY") == true) {document.getElementsByName('check')[5].checked = true;}
if (document.cookie.includes("OTRO") == true) {document.getElementsByName('check')[6].checked = true;}


btnSend.addEventListener('click', () => {
    /*datos personales*/
    var nombre = document.getElementById('nombre').value;
    var apPaterno = document.getElementById('apPaterno').value;
    var apMaterno = document.getElementById('apMaterno').value;
    var dia = document.getElementById('dia').value; /*validado*/
    var mes = document.getElementById('mes').value; /*validado*/
    var year = document.getElementById('year').value; /*validado*/
    var fechaNac = document.getElementById('nac').value;
    var signo = document.getElementById('signo').value; /*validado*/

    var sexo = document.getElementsByName('genero'); /*validado*/
    for (i = 0; i < sexo.length; i++) {
        if (sexo[i].checked)
            sexo = sexo[i].value;
    }
    var email = document.getElementById('email').value;

    /*direccion*/
    var calle = document.getElementById('calle').value;
    var codigoPostal = document.getElementById('codigoPostal').value;
    var delagacion = document.getElementById('delagacion').value; /*validado*/
    var numeroCasa = document.getElementById('numeroCasa').value;


    /*general*/
    var selected = [];
    var checkboxes = document.getElementsByName('check'); /*validado*/
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            selected.push(checkboxes[i].value);
        }
    }


    var pasatiempos = document.getElementById('pasatiempos');
    var options = pasatiempos && pasatiempos.options;
    var opt;
    var pasatiemposResult = [];

    for (var i = 0, iLen = options.length; i < iLen; i++) {
        opt = options[i];

        if (opt.selected) {
            pasatiemposResult.push(opt.value || opt.text);
        }
    }




    /*academica*/
    var promedio = document.getElementById("promedio").value;
    var semestre = document.getElementById("semestre").value; /*validado*/
    var oweMaterias = document.getElementsByName('materiasDebe'); /*validado*/
    for (i = 0; i < oweMaterias.length; i++) {
        if (oweMaterias[i].checked)
            oweMaterias = oweMaterias[i].value;
    }
    var comentario = document.getElementById("comentario").value; /*validado*/

    /*cuenta*/
    var user = document.getElementById("nombreUser").value; /*validado*/
    var password = document.getElementById("password").value; /*validado*/


    /*VALIDACION*/
    if (soloCharacters.test(nombre, apPaterno, apMaterno, calle) && soloNumbers.test(numeroCasa, codigoPostal) && soloNumbersFloat.test(promedio)) {
        alert("Impresion final de datos CORRECTOS.")
        //imprimir();
    } else {
        if (soloCharacters.test(nombre)) { console.log("ok") } else { alert("El nombre esta mal o vacio. (No use numeros ni simbolos especiales)") }
        if (soloCharacters.test(apPaterno)) { console.log("ok") } else { alert("El apellido paterno esta mal o vacio. (No use numeros ni simbolos especiales)") }
        if (soloCharacters.test(apMaterno)) { console.log("ok") } else { alert("El apellido materno esta mal o vacio. (No use numeros ni simbolos especiales)") }
        if (soloCharacters.test(calle)) { console.log("ok") } else { alert("La calle esta mal o vacio. (No use numeros ni simbolos especiales)") }
        if (soloNumbersFloat.test(promedio)) { console.log("ok") } else { alert("El promedio esta mal o vacio. (No use letras, espacios o simbolos especiales (Excepto el punto '.'))") }
        if (soloNumbers.test(numeroCasa)) { console.log("ok") } else { alert("El numero de casa esta mal o vacio. (No use letras, espacios o simbolos especiales)") }
        if (soloNumbers.test(codigoPostal)) { console.log("ok") } else { alert("El C.P. de casa esta mal o vacio. (No use letras, espacios o simbolos especiales)") }
        alert("Impresion de datos. // Se recomienda corregir valores indicados.");
        //imprimir();
    }

    function imprimir() {
        document.write("/////Datos personales. \r"
            + "Nombre = " + nombre + "\r"
            + "Apellido paterno = " + apPaterno + "\r"
            + "Apellido materno = " + apMaterno + "\r"
            + "Fecha nacimiento = " + dia + "/" + mes + "/" + year + "\r"
            + "Signo zodiacal = " + signo + "\r"
            + "Sexo (genero) = " + sexo + "\r"
            + "Email = " + email + "\r"

            + "/////Datos personales. \r"
            + "Calle = " + calle + "\r"
            + "Numero de casa = " + numeroCasa + "\r"
            + "Codigo postal = " + codigoPostal + "\r"
            + "Delegacion = " + delagacion + "\r"

            + "/////Datos generales. \r"
            + "Lenguajes = " + selected + "\r"
            + "Pasatiempos = " + pasatiemposResult + "\r"

            + "/////Informacion academica. \r"
            + "Promedio = " + promedio + "\r"
            + "Semestre = " + semestre + "\r"
            + "Debe Materias = " + oweMaterias + "\r"
            + "Comentarios = " + comentario + "\r"

            + "/////Informacion de la cuenta. \r"
            + "Nombre del usuario = " + user + "\r"
            + "Password = " + password + "\r");
    }

    nombresGalletas = ["GNombre", "Apellido Paterno", "Apellido Materno", "Fecha Nacimiento", "Signo Zodiacal",
        "Genero", "Email", "Calle", "Numero De Casa", "Codigo Postal", "Delegacion", "Lenguajes", "Pasatiempos", "Promedio",
        "Semestre Actual", "Debe Materias", "Comentarios", "Nombre del Usuario", "Password del usuario", "dia", "mes", "year", "Opcion1", "Opcion2", "Opcion3", "Opcion4"];

    valoresFormularioValidados = [nombre, apPaterno, apMaterno, fechaNac, signo, sexo, email, calle, numeroCasa, codigoPostal, delagacion, selected,
        pasatiemposResult, promedio, semestre, oweMaterias, comentario, user, password, dia, mes,year];
    var contadorAdicional = 0;
    for (var corrido = 0; corrido <= valoresFormularioValidados.length; corrido++) {
        if (document.getElementById('opcion1').selected == true ||
            document.getElementById('opcion2').selected == true ||
            document.getElementById('opcion3').selected == true ||
            document.getElementById('opcion4').selected == true) {

            document.cookie = nombresGalletas[corrido] + " = " + valoresFormularioValidados[corrido]; expires=" + setTimeForCookies(300) + ";
            contadorAdicional++;

            if (valoresFormularioValidados.length - 1 == contadorAdicional) {
                if (document.getElementById('opcion1').selected == true) {
                    document.cookie = "opcion1=" + "si";
                } else {
                    document.cookie = "opcion1=" + "no";
                }
                if (document.getElementById('opcion2').selected == true) {
                    document.cookie = "opcion2=" + "si";
                } else {
                    document.cookie = "opcion2=" + "no";
                }
                if (document.getElementById('opcion3').selected == true) {
                    document.cookie = "opcion3=" + "si";
                } else {
                    document.cookie = "opcion3=" + "no";
                }
                if (document.getElementById('opcion4').selected == true) {
                    document.cookie = "opcion4=" + "si";
                } else {
                    document.cookie = "opcion4=" + "no";
                }
            }

        }
    }

    console.log(document.cookie);

    function openWindow() {
        var newWindow = window.open("./message.html", "_blank", "width=1000,height=500");
        var newWindow = window.open("./message.html");
    }

    openWindow();

});

