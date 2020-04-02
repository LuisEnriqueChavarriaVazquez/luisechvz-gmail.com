function alertFormulario() {
    /*datos personales*/
    var nombre = document.getElementById('nombre').value;
    var apPaterno = document.getElementById('apPaterno').value;
    var apMaterno = document.getElementById('apMaterno').value;
    var dia = document.getElementById('dia').value;
    var mes = document.getElementById('mes').value;
    var year = document.getElementById('year').value;
    var dateFull = document.getElementById('date').value;
    var signo = document.getElementById('signo').value;

    var sexo = document.getElementsByName('genero');
    for (i = 0; i < sexo.length; i++) {
        if (sexo[i].checked)
            sexo = sexo[i].value;
    }
    var email = document.getElementById('email').value;

    /*direccion*/
    var calle = document.getElementById('calle').value;
    var codigoPostal = document.getElementById('codigoPostal').value;
    var delagacion = document.getElementById('delagacion').value;
    var numeroCasa = document.getElementById('numeroCasa').value;


    /*general*/
    var checkbox = document.querySelectorAll('input[type="checkbox]:checked');
    var result = checkbox.value;

    /*academica*/
    /*cuenta*/

    alert("/////Datos personales. \r"
        + "Nombre = " + nombre + "\r"
        + "Apellido paterno = " + apPaterno + "\r"
        + "Apellido materno = " + apMaterno + "\r"
        + "Fecha nacimiento = " + dia + "/" + mes + "/" + year + "\r"
        + "Fecha nacimiento calendar = " + dateFull + "\r"
        + "Signo zodiacal = " + signo + "\r"
        + "Sexo (genero) = " + sexo + "\r"
        + "Email = " + email + "\r\r"

        + "/////Datos personales. \r"
        + "Calle = " + calle + "\r"
        + "Numero de casa = " + numeroCasa + "\r"
        + "Codigo postal = " + codigoPostal + "\r"
        + "Delegacion = " + delagacion + "\r\r"

        + "/////Datos generales. \r"
        + "Lenguajes = " + result + "\r");
}

