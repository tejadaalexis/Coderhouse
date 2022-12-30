let nombre = prompt("BIENBENIDO A CRIPP. Ingrese su nombre :");
prompt("Hola "+ nombre + " , proseguimos con tu compra?");


function sumar(prod1,prod2,prod3){
    return prod1 + prod2 + prod3
}

let primerProd = Number(prompt("Ingresa el valor del primer item "))
let segundoProd = Number(prompt("ingresa el valor del segundo item "))
let tercerProd = Number(prompt("ingresa el valor del tercer item "))

let PFApagar = sumar(primerProd,segundoProd,tercerProd)

var descuento = PFApagar*0.80

let pagoEfectivo = prompt("abona en efectivo? ")

if (pagoEfectivo ==="si" || pagoEfectivo === "Si" || pagoEfectivo === "SI" || pagoEfectivo === "sI") {
    alert("ha obtenido un descuento del 20% su monto a abonar es: " +(descuento), )
} 
else {
    alert("su monto a abonar es: " + (PFApagar), )
}