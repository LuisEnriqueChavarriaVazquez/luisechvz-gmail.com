var banderilla = 0;
var grupoDeFotosQuePodemosUsar = [
  'img/img1.jpg', 
  'img/img2.jpg', 
  'img/img3.jpg', 
  'img/img4.jpg', 
  'img/img5.jpg']; /*Podemos seguir poniendo nuestras imagenes ahi*/

function galeria(routeGotByTheHtml) {
  var route = routeGotByTheHtml;
  /*Aqui estoy validando lo que debemos hacer cuando 
  recibamos valores acorde con los botones que presionemos*/
  if (route == 'back') {
    if (banderilla == 0) {
      document.getElementById('imagen').src = grupoDeFotosQuePodemosUsar[grupoDeFotosQuePodemosUsar.length - 1]; banderilla++;
    } else if (banderilla < grupoDeFotosQuePodemosUsar.length - 1) {
      document.getElementById('imagen').src = grupoDeFotosQuePodemosUsar[grupoDeFotosQuePodemosUsar.length - 1 - banderilla]; banderilla++;
    } else {
      document.getElementById('imagen').src = grupoDeFotosQuePodemosUsar[0]; banderilla = 0;
    }
  }

  if (route == 'go') {
    if (banderilla == 0) {
      document.getElementById('imagen').src = grupoDeFotosQuePodemosUsar[0]; banderilla++;
    } else if (banderilla < grupoDeFotosQuePodemosUsar.length - 1) {
      document.getElementById('imagen').src = grupoDeFotosQuePodemosUsar[banderilla]; banderilla++;
    } else {
      document.getElementById('imagen').src = grupoDeFotosQuePodemosUsar[grupoDeFotosQuePodemosUsar.length - 1]; banderilla = 0;
    }
  }

}
