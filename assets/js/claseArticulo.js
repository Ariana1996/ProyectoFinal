class Articulo {
    constructor(id, nombre, precio, urlImagen) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.urlImagen = urlImagen;
    }
}

const productos = [];

const articulo1 = new Articulo(1, 'Cama de pasto', 800, '../assets/img/articulos/camaPasto.jpg');
const articulo2 = new Articulo(2, 'Juguete con cascabel', 900, '../assets/img/articulos/juguete.jpg');
const articulo3 = new Articulo(3, 'Maceta con pasto', 1000, '../assets/img/articulos/macetaPasto.jpg');
const articulo4 = new Articulo(4, 'Rascador de torre', 1800, '../assets/img/articulos/rascador.webp');
const articulo5 = new Articulo(5, 'Rascador de cactus', 1500, '../assets/img/articulos/rascadorCactus.png');
const articulo6 = new Articulo(6, 'Cono Rascador', 1200, '../assets/img/articulos/rascadorCono.jpg');
const articulo7 = new Articulo(7, 'Rascador Vertical', 800, '../assets/img/articulos/rascadorVertical.jpg');
const articulo8 = new Articulo(8, 'Ratones de juguete', 600, '../assets/img/articulos/ratones.jpg');
const articulo9 = new Articulo(9, 'Cama americana', 2000, '../assets/img/articulos/cama.jpg');
const articulo10 = new Articulo(10, 'Cama de madera', 1800, '../assets/img/articulos/cama2.jpg');

productos.push(articulo1);
productos.push(articulo2);
productos.push(articulo3);
productos.push(articulo4);
productos.push(articulo5);
productos.push(articulo6);
productos.push(articulo7);
productos.push(articulo8);
productos.push(articulo9);
productos.push(articulo10);

//probar el export e import
//export default productos;