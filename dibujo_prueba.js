var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
var linea_color = document.getElementById("texto_color");
var borde = document.getElementById("bordecito");
boton.addEventListener("click", dibujoPorclick);


var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");



function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(x_inicial, y_inicial);
  lienzo.lineTo(x_final, y_final);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorclick()
{
  var lineas = parseInt(texto.value);
  var color_usuario = linea_color.value;
  var l = 0;
  var yi, xf;
  var color_borde = borde.value;
  var espacio = ancho /lineas;
  var yi1, xf1;
  var xi1, y_i1;
  var xi2, yf2;

  for (l = 0; l < lineas; l++)
  {
    yi = espacio * l;
    xf = espacio * (l + 1);
    yi1 = espacio * l;
    xf1 = 490 -(l *espacio);
    xi1 = espacio * (l + 1);
    y_i1 = 500 -(l *espacio);
    xi2 = 490 -(l *espacio);
    yf2 = 500 -(l *espacio);
    dibujarLinea(color_usuario, xi2, 0, 500, yf2);
    dibujarLinea(color_usuario,xi1, 0, 0, y_i1);
    dibujarLinea(color_usuario, 500, yi1, xf1,500);
    dibujarLinea(color_usuario, 0, yi, xf, 500);
    dibujarLinea(color_borde, 1,1,1,499);
    dibujarLinea(color_borde, 1,499,499,499);
    dibujarLinea(color_borde, 499,499,499,1);
    dibujarLinea(color_borde, 499,1,1,1);
    console.log("lineas " + l);
  }
}
