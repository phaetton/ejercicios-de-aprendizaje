var jf=require("johnny-five");
var circuito = new jf.Board();

circuito.on("ready",prender);

function prender(){
    //puerto 13
    var bombillo= new jf.Led(13);
    var rojo= new jf.Led(9);
    bombillo.blink(500);
    rojo.blink(700);
}