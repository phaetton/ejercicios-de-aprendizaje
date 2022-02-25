
class Pakiman {

    constructor(pnombre, pvida, pataque) {
        this.imagen = new Image();
        this.nombre = pnombre;
        this.vida = pvida;
        this.ataque = pataque;
        this.tipo = "tierra";

        this.imagen.src = imagenes[this.nombre];
    }

    hablar() {
        alert(this.nombre)
    }

    mostrar() {
        document.write("<p>");
        document.body.appendChild(this.imagen);
        document.write("<strong>" + this.nombre + "</strong><br>")
        document.write("vida" + this.vida + "<br>");
        document.write("ataque" + this.ataque + "<br> <hr>");
        document.write("</p>");


    }
}
