class Billete {
    constructor(pvalor, pcantidad) {
        this.valor = pvalor;
        this.cantidad = pcantidad;
    }
}

var caja = [];

//creamos los billetes con su cantidad
caja.push(new Billete(100, 5));
caja.push(new Billete(50, 10));
caja.push(new Billete(20, 5));
caja.push(new Billete(10, 10));
caja.push(new Billete(5,5));


var dinero = 0;
var entregado = [];
var div = 0;
var papeles = 0;
var b = document.getElementById("extraer");
var resultado = document.getElementById("resultado");
b.addEventListener("click", entregarDinero);


function entregarDinero() {
    var t = document.getElementById("dinero");
    dinero = parseInt(t.value);

    for (var bi of caja) {
        if (dinero > 0) {
            div = Math.floor(dinero / bi.valor);
            if (div > bi.cantidad) {
                papeles = bi.cantidad;
            } else {
                papeles = div;
            }
            entregado.push(new Billete(bi.valor, papeles));
            dinero = dinero - (bi.valor * papeles);
        }
    }
    if (dinero > 0) {
        resultado.innerHTML = "no tengo mas dinero";
    } else {
        for (var e of entregado) {
            if(e.cantidad>0){
                resultado.innerHTML += e.cantidad + " Billetes de $" + e.valor + "<br>";
            }
        }
    }
}