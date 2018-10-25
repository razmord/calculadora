var npantalla=0;
var resultado=0;
var oppulsada=0;
var pantalla=document.getElementsByClassName("pantalla")[0];
pantalla.innerHTML=npantalla;
var numeros=document.querySelectorAll("div.numeros > button");
var operac=document.querySelectorAll("div.operaciones > button");

function botonnumero(){
   var input = this.innerHTML;
    if(input=="C"){
        npantalla=0;
        resultado=0;
        oppulsada=0;
    }else if(npantalla=="0"){
        if(input=="."){
            npantalla=npantalla+input;
        }else
            npantalla=input;
   }else if(input=="."){
        if(npantalla.includes(".")==false)
        npantalla=npantalla+input;
   }else{
       npantalla=npantalla+input;
   }
   pantalla.innerHTML=npantalla;
   if(oppulsada=="=") oppulsada=0;
   if(oppulsada=="x") oppulsada="xOk";
   if(oppulsada=="÷"&&npantalla!=0) oppulsada="dOk";
}
function botonopera(){
    var input = this.innerHTML;
    switch(oppulsada){
        case 0: resultado=parseFloat(npantalla); break;
        case "+": resultado=parseFloat(npantalla)+parseFloat(resultado); break;
        case "-": resultado=parseFloat(resultado)-parseFloat(npantalla); break;
        case "xOk": resultado= parseFloat(resultado)*parseFloat(npantalla); break;
        case "dOk": resultado= parseFloat(resultado)/parseFloat(npantalla); break;
        case "=": break;      
    }
    oppulsada=input;
    npantalla=0;
    if(input=="="){
        pantalla.innerHTML=resultado;
    }
 }

for (var i = 0; i < numeros.length; i++) {
    numeros[i].addEventListener('click', botonnumero, false);
}

for (var i = 0; i < operac.length; i++) {
    operac[i].addEventListener('click', botonopera, false);
}