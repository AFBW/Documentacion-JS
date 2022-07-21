// "use strict"; // Correr JS en modo estricto
// Objetos
const producto = {
    nombreProducto: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

Object.freeze(producto); // Conjela el objeto y no permite agregarle o eliminar o modificar nuevas propiedades
console.log(Object.isFrozen(producto)); // Como saber si un objeto esta congelado

Object.seal(producto); // Te permite modificar los existentes


producto.precio = 'NUEVO PRECIO';

delete producto.precio;

console.log(producto);