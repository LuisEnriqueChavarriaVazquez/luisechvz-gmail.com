let btnSend = document.getElementById('submit');
var soloNumbers = new RegExp("^[0-9]+$");
var soloNumbersFloat = new RegExp("^[0-9,'.']+$");
var soloCharacters = new RegExp("^[a-z,A-Z,' ',á,é,í,ó,ú,Á,É,Í,Ó,Ú]+$");

btnSend.addEventListener('click', () => {
    /*datos personales*/
    var nombre = document.getElementById('nombre').value;
    var apPaterno = document.getElementById('apPaterno').value;
    var apMaterno = document.getElementById('apMaterno').value;
    var dia = document.getElementById('dia').value; /*validado*/
    var mes = document.getElementById('mes').value; /*validado*/
    var year = document.getElementById('year').value; /*validado*/
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
    var checkboxes = document.getElementsByName('check'); /*validado*/
    var selected = [];
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            selected.push(checkboxes[i].value);
        }
    }

    var pasatiempos = document.getElementById('pasatiempos');
    var pasatiemposResult = [];
    var options = pasatiempos && pasatiempos.options;
    var opt;

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
        alert("/////Datos personales. \r"
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
        console.log("Dato");
    } else {
        if (soloCharacters.test(nombre)) { console.log("ok") } else { alert("El nombre esta mal o vacio. (No use numeros ni simbolos especiales)") }
        if (soloCharacters.test(apPaterno)) { console.log("ok") } else { alert("El apellido paterno esta mal o vacio. (No use numeros ni simbolos especiales)") }
        if (soloCharacters.test(apMaterno)) { console.log("ok") } else { alert("El apellido materno esta mal o vacio. (No use numeros ni simbolos especiales)") }
        if (soloCharacters.test(calle)) { console.log("ok") } else { alert("La calle esta mal o vacio. (No use numeros ni simbolos especiales)") }
        if (soloNumbersFloat.test(promedio)) { console.log("ok") } else { alert("El promedio esta mal o vacio. (No use letras, espacios o simbolos especiales (Excepto el punto '.'))") }
        if (soloNumbers.test(numeroCasa)) { console.log("ok") } else { alert("El numero de casa esta mal o vacio. (No use letras, espacios o simbolos especiales)") }
        if (soloNumbers.test(codigoPostal)) { console.log("ok") } else { alert("El C.P. de casa esta mal o vacio. (No use letras, espacios o simbolos especiales)") }

    }


});

