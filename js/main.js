function maquina(contenedor,texto,intervalo){
   // Calculamos la longitud del texto
   longitud = texto.length;
   // Obtenemos referencia del div donde se va a alojar el texto.
   cnt = document.getElementById(contenedor);
   var i=1;
   // Creamos el timer
   timer = setInterval(function(){
      // Vamos añadiendo letra por letra y la _ al final.
      cnt.innerHTML = cnt.innerHTML.substr(0,cnt.innerHTML.length-1) + texto.charAt(i) + " ";
      // Si hemos llegado al final del texto..
      if(i >= longitud){
         // Salimos del Timer y quitamos la barra baja (_)
         clearInterval(timer);
         cnt.innerHTML = cnt.innerHTML.substr(0,longitud);
         return true;
      } else {
         // En caso contrario.. seguimos
         i++;
      }},intervalo);
};

/*SCROLL*/

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

/*contador*/

function maquina(contenedor,texto,intervalo){
   // Calculamos la longitud del texto
   longitud = texto.length;
   // Obtenemos referencia del div donde se va a alojar el texto.
   cnt = document.getElementById(contenedor);
   var i=0;
   // Creamos el timer
   timer = setInterval(function(){
      // Vamos añadiendo letra por letra y la _ al final.
      cnt.innerHTML = cnt.innerHTML.substr(0,cnt.innerHTML.length-1) + texto.charAt(i) + " ";
      // Si hemos llegado al final del texto..
      if(i >= longitud){
         // Salimos del Timer y quitamos la barra baja (_)
         clearInterval(timer);
         cnt.innerHTML = cnt.innerHTML.substr(0,longitud);
         return true;
      } else {
         // En caso contrario.. seguimos
         i++;
      }},intervalo);
};

var texto = "HOLA, MI NOMBRE ES GÉNESIS. SOY CODER DE LABORATORIA :P";
// 100 es el intervalo de minisegundos en el que se escribirá cada letra.
maquina("maquinas",texto,40);

