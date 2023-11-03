

//funcion que simule lanzar una moneda
function lanzarmoneda(){
    let moneda = Math.floor((Math.random()*2)+1);
    console.log(`El lanzamiento fue  ${moneda}`);
    return moneda;
}

//invocar funcion por declaracion
console.log(`El lanzamieinto fue ${lanzarmoneda()}`);


let lanzamiento  = lanzarmoneda();


//declaracion con parametros
function ganar(saldo, apuesta){

    saldo = saldo + (apuesta*2);
    return saldo;
    console.log(`ganasteee, tu saldo es ${saldo}`);
}

function perder(saldo, apuesta){
    saldo = saldo - (apuesta);
    return saldo;
    console.log(`ganasteee, tu saldo es ${saldo}`);
}

//invocar la funcion y enviar argumentos segun corresponda

let saldo = parseInt(prompt('ingresa tu saldo'));
let apuesta = parseInt(prompt('ingresa cuanto quieres apostar'));

ganar(saldo, apuesta);
perder(saldo, apuesta);

//flecja
let perder = (saldo, apuesta) => {
    saldo = saldo - apuesta;
    return saldo
}

//funcion que retorne la respuesta de lanzar la moneda
//pedir: nombre del jugador, 
//funcion que calcule el saldo 
