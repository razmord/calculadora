var npantalla=0;
var resultado=0;
var oppulsada=0;
var pantalla=document.getElementsByClassName("pantalla")[0];
pantalla.innerHTML=npantalla;
var numeros=document.querySelectorAll("div.numeros > button");
var operac=document.querySelectorAll("div.operaciones > button");
var compleja=document.querySelectorAll("div.complejas > button");

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
   if(oppulsada=="="||oppulsada=="√") oppulsada=0;
   if(oppulsada=="x") oppulsada="xOk";
   if(oppulsada=="÷"&&npantalla!=0) oppulsada="dOk";
}
function botonopera(){
    var input = this.innerHTML;
    if(oppulsada=="√"){
        oppulsada=0;
        npantalla=resultado;
    }
    if(input=="√"){
        if(oppulsada=="=")
            npantalla=resultado;
        oppulsada=input;
    }
    if(input=="%"){
        switch(oppulsada){
            case "+": resultado=parseFloat(resultado)+(parseFloat(resultado)*(parseFloat(npantalla)/100)); break;
            case "-": resultado=parseFloat(resultado)-(parseFloat(resultado)*(parseFloat(npantalla)/100)); break;
            case "xOk": resultado= (parseFloat(resultado)*(parseFloat(npantalla)/100)); break;    
            default: break;
        }
        input="=";
    }else if(input=="x!"){
        switch(oppulsada){
            case 0: resultado=factorialize(parseFloat(npantalla)); break;
            case "+": resultado=factorialize(parseFloat(npantalla))+parseFloat(resultado); break;
            case "-": resultado=parseFloat(resultado)-factorialize(parseFloat(npantalla)); break;
            case "xOk": resultado= parseFloat(resultado)*factorialize(parseFloat(npantalla)); break;
            case "dOk": resultado= parseFloat(resultado)/factorialize(parseFloat(npantalla)); break;
            default: break;      
        }
    }else{
        switch(oppulsada){
            case 0: resultado=parseFloat(npantalla); break;
            case "+": resultado=parseFloat(npantalla)+parseFloat(resultado); break;
            case "-": resultado=parseFloat(resultado)-parseFloat(npantalla); break;
            case "xOk": resultado= parseFloat(resultado)*parseFloat(npantalla); break;
            case "dOk": resultado= parseFloat(resultado)/parseFloat(npantalla); break;
            case "√": resultado=Math.sqrt(npantalla); break;
            case "=": break;      
        }
    }
    oppulsada=input;
    npantalla=0;
    if(input=="="||input=="√"){
        pantalla.innerHTML=resultado;
    }
 }

for (var i = 0; i < numeros.length; i++) {
    numeros[i].addEventListener('click', botonnumero, false);
}

for (var i = 0; i < operac.length; i++) {
    operac[i].addEventListener('click', botonopera, false);
}

for (var i = 0; i < compleja.length; i++) {
    compleja[i].addEventListener('click', botonopera, false);
}

function factorialize(num) {
    if (num == 0 || num == 1)
      return 1;
    for (var i = num - 1; i >= 1; i--) {
      num = num * i; // or num *= i;
    }
    return num; //120
  }