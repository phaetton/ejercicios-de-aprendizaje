var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujoPorClick() {
    var lineas = parseInt(texto.value);
    var l = 0;
    var yi, xf;
    var colorcito = "#FAA";
    var espacio = ancho / lineas;

    //vertice inicial
    for (l = 0; l < lineas; l++) {
        yi = espacio * l;
        xf = espacio * (l + 1);
        dibujarLinea(colorcito, 0, yi, xf, 300);

    //paralelo vertice inicial
        xi = espacio * l;
        yf = espacio * (l + 1);
        dibujarLinea(colorcito, xi, 0, 300, yf);

    //vertice superior
        xi = 300 - espacio * l;
        yf = espacio * l;
        dibujarLinea(colorcito, 0, xi, yf, 0);

    //vertice inferior
        xi = 300 - espacio * l;
        yf = espacio * l;
        dibujarLinea(colorcito, xi, 300, 300, yf);
    }

    dibujarLinea(colorcito, 1, 1, 1, 299);
    dibujarLinea(colorcito, 1, 299, 299, 299);
}