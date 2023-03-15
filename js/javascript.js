let nombre = prompt("BIENBENIDO A CRIPP. Ingrese su nombre :");
prompt("Hola " + nombre + " , te invitamos a conocer nuestros productos");


class articulo {

    constructor(tipo, marca, talle, precio, id) {
        this.tipo = tipo;
        this.marca = marca;
        this.talle = talle;
        this.precio = parseInt(precio);
        this.id = id;
    }

    asignarId(array) {
        this.id = array.length;
    }

    valorar(precio) {
        this.precio = precio;
    }


}

const articulos = [
    new articulo('remera', 'adidas', 's', 3500, 1),
    new articulo('pantalon', 'nike', 'xl', 5300, 2),
    new articulo('buzo', 'ripcurl', 'm', 4850, 3),
    new articulo('remera', 'under armor', 'xl', 3900, 4),
    new articulo('pantalon', 'dolphin', 's', 6600, 5),
    new articulo('buzo', 'adidas', 'l', 4200, 6),
    
]

console.log(articulos);



let criterio = prompt('Elegí como deseas ordenar los articulos:\n1 - Tipo (A a Z) \n2 - Tipo (Z a A)\n3 - Meyor a menor precio ');

function ordenar(criterio, array) {
    let arrayOrdenado = array.slice(0);


    switch (criterio) {
        case '1':
            let nombreAscendente = arrayOrdenado.sort((a,b)=>a.tipo.localeCompare(b.tipo));
            return nombreAscendente;
        case '2':
            let nombreDescendente = arrayOrdenado.sort((a, b) => b.tipo.localeCompare(a.tipo));
            return nombreDescendente;
        case '3':
            return arrayOrdenado.sort((a, b) => b.precio - a.precio);
        default:
            alert('No es un criterio válido');
            break;
    }
}


function crearStringResultado(array){
    let info = '';

    array.forEach(elemento=>{
        info += 'Típo: ' + elemento.tipo + '\nMarca: ' + elemento.marca + '\nTalle: ' + elemento.talle + '\nPrecio: ' + elemento.precio + ' pesos.\n\n'
    })

    return info;
}


alert(crearStringResultado(ordenar(criterio,articulos)));


let marcaElegida = prompt('Escribí la marca y te mostraremos sus articulos');

const filtrado = articulos.filter((articulo)=>articulo.marca.toLowerCase().includes(marcaElegida.toLowerCase()))



if (filtrado.length==0){
    alert('Lo sentimos. No encontramos coincidencias en nuestro catálogo');
}else{
    const imprimible = filtrado.map((articulo)=>articulo.tipo);
    alert('Los articulos que coinciden con esta búsqueda, son:\n- ' + imprimible.join('\n- '));
}



prompt("Bien " + nombre + " , proseguimos con tu compra?");


function sumar(prod1, prod2, prod3) {
    return prod1 + prod2 + prod3
}

let primerProd = Number(prompt("Ingresa el valor del primer item "))
let segundoProd = Number(prompt("ingresa el valor del segundo item "))
let tercerProd = Number(prompt("ingresa el valor del tercer item "))

let PFApagar = sumar(primerProd, segundoProd, tercerProd)

var descuento = PFApagar * 0.80

let pagoEfectivo = prompt("abona en efectivo? ")

if (pagoEfectivo === "si" || pagoEfectivo === "Si" || pagoEfectivo === "SI" || pagoEfectivo === "sI") {
    alert("ha obtenido un descuento del 20% su monto a abonar es: " + (descuento),)
}
else {
    alert("su monto a abonar es: " + (PFApagar),)
}