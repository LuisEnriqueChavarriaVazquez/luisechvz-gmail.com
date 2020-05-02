var mensaje = document.getElementById('mensaje');
console.log(mensaje);

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
//listaCookies = misCookies.split("//");
mensaje.innerHTML = 
"Nombre = " + leerCookie("Nombre") + "<br>" + 
"Apellido Paterno = " + leerCookie("Apellido Paterno") + "<br>" + 
"Apellido Materno = " + leerCookie("Apellido Materno") + "<br>" + 
"Fecha Nacimiento = " + leerCookie("Fecha Nacimiento") + "<br>" + 
"Signo Zodiacal = " + leerCookie("Signo Zodiacal") + "<br>" + 
"Genero = " + leerCookie("Genero") + "<br>" + 
"Email = " + leerCookie("Email") + "<br>" + 
"Calle = " + leerCookie("Calle") + "<br>" + 
"Codigo Postal = " + leerCookie("Codigo Postal") + "<br>" + 
"Numero De Casa = " + leerCookie("Numero De Casa") + "<br>" + 
"Delegacion = " + leerCookie("Delegacion") + "<br>" + 
"Lenguajes = " + leerCookie("Lenguajes") + "<br>" + 
"Pasatiempos = " + leerCookie("Pasatiempos") + "<br>" + 
"Promedio = " + leerCookie("Promedio") + "<br>" + 
"Semestre Actual = " + leerCookie("Semestre Actual") + "<br>" + 
"Debe Materias = " + leerCookie("Debe Materias") + "<br>" + 
"Comentarios = " + leerCookie("Comentarios") + "<br>" + 
"Nombre del Usuario = " + leerCookie("Nombre del Usuario") + "<br>" + 
"Password del usuario = " + leerCookie("Password del usuario");
