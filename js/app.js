function calculadora(){
    
var operandoa;
var operandob;
var operacion;

var resultado = document.getElementById('display');
var reset = document.getElementById('on');
var suma = document.getElementById('mas');
var resta = document.getElementById('menos');
var multiplicacion = document.getElementById('por');
var division = document.getElementById('dividido');
var igual = document.getElementById('igual');
var uno = document.getElementById('1');
var dos = document.getElementById('2');
var tres = document.getElementById('3');
var cuatro = document.getElementById('4');
var cinco = document.getElementById('5');
var seis = document.getElementById('6');
var siete = document.getElementById('7');
var ocho = document.getElementById('8');
var nueve = document.getElementById('9');
var cero = document.getElementById('0');
var punto = document.getElementById('punto');
var signo = document.getElementById('sign');
var raiz = document.getElementById('raiz');

uno.onclick = function(e){
    if(resultado.textContent == 0){resultado.textContent="";}
    resultado.textContent = resultado.textContent  + "1";
    uno.style.transform="scale(0.9)";
    setTimeout(function() {uno.style.transform="scale(1)";}, 200);
    
}

dos.onclick = function(e){
    if(resultado.textContent == 0){resultado.textContent="";}
    resultado.textContent = resultado.textContent  + "2";
    dos.style.transform="scale(0.9)";
    setTimeout(function() {dos.style.transform="scale(1)";}, 200);
}
tres.onclick = function(e){
    if(resultado.textContent == 0){resultado.textContent="";}
    resultado.textContent = resultado.textContent  + "3";
    tres.style.transform="scale(0.9)";
    setTimeout(function() {tres.style.transform="scale(1)";}, 200);
}
cuatro.onclick = function(e){
    if(resultado.textContent == 0){resultado.textContent="";}
    resultado.textContent = resultado.textContent  + "4";
    cuatro.style.transform="scale(0.9)";
    setTimeout(function() {cuatro.style.transform="scale(1)";}, 200);
}
cinco.onclick = function(e){
    if(resultado.textContent == 0){resultado.textContent="";}
    resultado.textContent = resultado.textContent  + "5";
    cinco.style.transform="scale(0.9)";
    setTimeout(function() {cinco.style.transform="scale(1)";}, 200);
}
seis.onclick = function(e){
    if(resultado.textContent == 0){resultado.textContent="";}
    resultado.textContent = resultado.textContent  + "6";
    seis.style.transform="scale(0.9)";
    setTimeout(function() {seis.style.transform="scale(1)";}, 200);
}
siete.onclick = function(e){
    if(resultado.textContent == 0){resultado.textContent="";}
    resultado.textContent = resultado.textContent  + "7";
    siete.style.transform="scale(0.9)";
    setTimeout(function() {siete.style.transform="scale(1)";}, 200);
}
ocho.onclick = function(e){
    if(resultado.textContent == 0){resultado.textContent="";}
    resultado.textContent = resultado.textContent  + "8";
    ocho.style.transform="scale(0.9)";
    setTimeout(function() {ocho.style.transform="scale(1)";}, 200);
}
nueve.onclick = function(e){
    if(resultado.textContent == 0){resultado.textContent="";}
    resultado.textContent = resultado.textContent  + "9";
    nueve.style.transform="scale(0.9)";
    setTimeout(function() {nueve.style.transform="scale(1)";}, 200);
}
cero.onclick = function(e){
    if(resultado.textContent == 0){resultado.textContent="";}
    resultado.textContent = resultado.textContent  + "0";
    cero.style.transform="scale(0.9)";
    setTimeout(function() {cero.style.transform="scale(1)";}, 200);
}
punto.onclick = function(e){
    if(resultado.textContent == 0){resultado.textContent="";}
    resultado.textContent = resultado.textContent  + ".";
    punto.style.transform="scale(0.9)";
    setTimeout(function() {punto.style.transform="scale(1)";}, 200);
}
raiz.onclick = function(e){
    raiz.style.transform="scale(0.9)";
    setTimeout(function() {raiz.style.transform="scale(1)";}, 200);
    
}
reset.onclick = function(e){
    resetear();
    reset.style.transform="scale(0.9)";
    setTimeout(function() {reset.style.transform="scale(1)";}, 200);
}

suma.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "+";
    limpiar();
    suma.style.transform="scale(0.9)";
    setTimeout(function() {suma.style.transform="scale(1)";}, 200);
}
resta.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "-";
    limpiar();
    resta.style.transform="scale(0.9)";
    setTimeout(function() {resta.style.transform="scale(1)";}, 200);
}
multiplicacion.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "*";
    limpiar();
    multiplicacion.style.transform="scale(0.9)";
    setTimeout(function() {multiplicacion.style.transform="scale(1)";}, 200);
}
division.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "/";
    limpiar();
    division.style.transform="scale(0.9)";
    setTimeout(function() {division.style.transform="scale(1)";}, 200);
}
igual.onclick = function(e){
    operandob = resultado.textContent;
    resolver();
    igual.style.transform="scale(0.9)";
    setTimeout(function() {igual.style.transform="scale(1)";}, 200);
}

signo.onclick = function(e){
    var cambio_signo=-(resultado.textContent);
    resultado.textContent=cambio_signo;
    signo.style.transform="scale(0.9)";
    setTimeout(function() {signo.style.transform="scale(1)";}, 200);
}

function limpiar(){
    resultado.textContent = "0";
  }
  function resetear(){
    resultado.textContent = "0";
    operandoa = 0;
    operandob = 0;
    operacion = "";
  }
  
  function resolver(){
    var res = 0;
    switch(operacion){
      case "+":
        res = parseFloat(operandoa) + parseFloat(operandob);
        break;
      case "-":
          res = parseFloat(operandoa) - parseFloat(operandob);
          break;
      case "*":
        res = parseFloat(operandoa) * parseFloat(operandob);
        break;
      case "/":
        res = parseFloat(operandoa) / parseFloat(operandob);
        break;
    }
    resetear();
    resultado.textContent = res;
}
    
}
calculadora();