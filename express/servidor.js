var express=require("express");
var aplicacion=express();

aplicacion.get("/",inicio);
aplicacion.get("/cursos",cursos);


function inicio(peticion, resultado){
    resultado.send("this is home");
}

function cursos(peticion, resultado){
    resultado.send("estos son los cursos");
}

aplicacion.listen(8989);