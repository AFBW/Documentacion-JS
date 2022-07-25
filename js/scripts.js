alert("Hola Mundo");


let total = 0;

const agregarCarrito = (precio => {
    return total += precio;
})

const calcularImpuestos = (total => {
    return 1.15 * total;
})

total = agregarCarrito(200);
total = agregarCarrito(33);
total = agregarCarrito(400);

console.log('El total a pagar es de ' + total);

let totalPagar = calcularImpuestos(total);

console.log(`El total a pagar es de ${totalPagar}`);
