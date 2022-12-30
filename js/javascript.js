let nombre = prompt("BIENBENIDO A CRIPP. Ingrese su nombre :");
prompt("Hola "+ nombre + " , proseguimos con tu compra?");


function sumar(prod1,prod2,prod3){
    return prod1 + prod2 + prod3
}

let primerProd = Number(prompt("Ingresa el primer precio "))
let segundoProd = Number(prompt("ingresa el segundo precio "))
let tercerProd = Number(prompt("ingresa el tercer precio "))

let PFApagar = sumar(primerProd,segundoProd,tercerProd)

var descuento = PFApagar*0.85

let pagoEfectivo = prompt("abona en efectivo? ")

if (pagoEfectivo = "si,Si,SI,s,S") {
    alert("ha obtenido un descuento del 15% su monto a abonar es: " +(descuento), )
} 
else {
    alert("su monto a abonar es: " + (PFApagar), )
}