var vp = document.getElementById("granjaNueva");
var papel = vp.getContext("2d");
var lobox = 150;
var loboy = 150;
var movimiento = 70;

var fondo = {
    url: "tile.png",
    cargaOk: false
}
var vaca = {
    url: "vaca.png",
    cargaOk: false
}
var pollo = {
    url: "pollo.png",
    cargaOk: false
}
var cerdo = {
    url: "cerdo.png",
    cargaOk: false
}
var lobo = {
    url: "lobo.png",
    cargaOk: false
}

var cantidad = aleatorio(1, 10);

//creando teclas
var teclas = { UP: 38, DOWN: 40, LEFT: 37, RIGHT: 39 };

//instanciando imagen
fondo.imagen = new Image();
vaca.imagen = new Image();
pollo.imagen = new Image();
cerdo.imagen = new Image();
lobo.imagen = new Image();

//asignando imagen
fondo.imagen.src = fondo.url;
vaca.imagen.src = vaca.url;
pollo.imagen.src = pollo.url;
cerdo.imagen.src = cerdo.url;
lobo.imagen.src = lobo.url;

//eventos
fondo.imagen.addEventListener("load", cargarFondo);
document.addEventListener("keydown", moverLobo);


function moverLobo(evento) {
    switch (evento.keyCode) {
        case teclas.UP:
            if (loboy > 40)
                loboy = loboy - movimiento;
            dibujar();
            break;
        case teclas.DOWN:
            if (loboy < 400)
                loboy = loboy + movimiento;
            dibujar();
            break;
        case teclas.LEFT:
            if (lobox > 40)
                lobox = lobox - movimiento;
            dibujar();
            break;
        case teclas.RIGHT:
            if (lobox < 400)
                lobox = lobox + movimiento;
            dibujar();
            break;
    }
}

function cargarFondo() {
    fondo.cargaOk = true;
    vaca.imagen.addEventListener("load", cargarVaca);
    pollo.imagen.addEventListener("load", cargarPollo);
    cerdo.imagen.addEventListener("load", cargarCerdo);
    lobo.imagen.addEventListener("load", cargarLobo);
}

function cargarVaca() {
    vaca.cargaOk = true;
    dibujar();
}
function cargarPollo() {
    pollo.cargaOk = true;
    dibujar();
}
function cargarCerdo() {
    cerdo.cargaOk = true;
    dibujar();
}
function cargarLobo() {
    lobo.cargaOk = true;
    dibujar();
}

function dibujar() {
    if (fondo.cargaOk) {
        papel.drawImage(fondo.imagen, 0, 0);
        //dibujamos hasta que tengamos todos los animales cargados
        if (vaca.cargaOk && pollo.cargaOk && cerdo.cargaOk && lobo.cargaOk) {
            for (var i = 0; i < cantidad; i++) {
                obtenerXY()
                papel.drawImage(vaca.imagen, x, y)
            }
            for (var i = 0; i < cantidad; i++) {
                obtenerXY()
                papel.drawImage(pollo.imagen, x, y)
            }
            for (var i = 0; i < cantidad; i++) {
                obtenerXY()
                papel.drawImage(cerdo.imagen, x, y)
            }
            papel.drawImage(lobo.imagen, lobox, loboy)
        }
    }
}


function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function obtenerXY() {
    x = aleatorio(0, 7);
    y = aleatorio(0, 10);
    x = x * 60;
    y = y * 40;
}