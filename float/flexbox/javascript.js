// let nombre ;
// nombre = "juan";
// frase = "hola " + nombre + " como estas?";

// console.log(frase);

// let dineroEnLaCuenta = 100;
// let nuevoDeposito = 1200;
// let comisionBancaria = 0.05;

// dinero = dineroEnLaCuenta+nuevoDeposito+comisionBancaria;

// console.log(dinero);

// nombreDelCliente = prompt ('decime tu nombre');

// console.log(nombreDelCliente);

// document.write("holaaa ya entendi")


// alert ('bienvenido')
// let nombre = prompt ('ingrese su nombre');
// console.log("holaaa " + nombre);
// let edad = prompt ('cual es tu edad?');
// console.log('mi edad es ' + edad);

// let nombre = 'Erik';
// let edad = 18 ;
// let cumpleaños = '16 de septiembre';
// let ciudad = 'La Plata';
// let ocupacion = 'estudiantes';
// let pasatiempos = 'jugar al futbol';

// console.log (
//     'mi nombre es ' + nombre + ', tengo ' + edad + 'años, ' + 'mi cumple es el ' + cumpleaños + ', vivo en ' + ciudad
// )

// let edad = prompt('cual es tu edad?');
// prompt ('serian ' + edad * 365 + ' dias');

// let num1 = prompt('ingresar un valor');
// let num2 = prompt ('ingresar otro valor');
// let resultado = num1 + num2;
// console.log(resultado);
//  "no me salio para q se sumen los dos numeros"

// let edad = 16 ;
// let edadMaxima = 70;
// let snack = 'oreos';
// let comer = 5;
// let falta = edadMaxima - edad;
// let resto = 365 * falta * comer;
// alert ('necesitarás ' + resto + ' de  ' + snack + ' para que te alcancen hasta los ' + edadMaxima )
// let oreo = 250 ;
// alert('vas a gastar ' + oreo * resto + ' de pesos'  ) ;

let dias = prompt('dias q vas a estar de viaje');
let presupuestoMax = prompt('tu presupuesto maximo');
let comida = prompt ('cuantas comidas vas a tener en todo tu viaje') ;
let gasto = presupuestoMax / (dias * comida) ;
alert ('podes gastar ' + gasto + ' en cada comida para que te alcance la plata durante los ' + dias + ' dias de viajes')
