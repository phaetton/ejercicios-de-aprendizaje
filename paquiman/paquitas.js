var imagenes = [];
imagenes["cauchin"] = "vaca.png";
imagenes["pokacho"] = "pollo.png";
imagenes["tocinauro"] = "cerdo.png";

/* pokacho.mostrar();
cauchin.mostrar();
tocinauro.mostrar();
 */


var coleccion = [];
coleccion.push(new Pakiman("cauchin", 100, 30));
coleccion.push(new Pakiman("pokacho", 80, 50));
coleccion.push(new Pakiman("tocinauro", 120, 40));

//in = indice
/* for(var pakin in coleccion){
    console.log(coleccion[pakin]);
} */

//of = objeto
for (var pakin of coleccion) {
    pakin.mostrar();
}