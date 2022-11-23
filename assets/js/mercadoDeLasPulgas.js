//import productos from 'claseArticulo.js'

let containerCards = document.getElementsByClassName('cardsMercado');


productos.forEach(element => {
   let divCard = document.createElement('div');
   divCard.style.width = '18rem';
   divCard.setAttribute('class', 'card')

   let imgCard = document.createElement('img');
   imgCard.setAttribute('class', 'card-img-top');

   let divBody = document.createElement('div');
   divBody.setAttribute('class', 'card-body');

   let h5Body = document.createElement('h5');
   h5Body.setAttribute('class', 'card-title');

   let pBody = document.createElement('p')
   pBody.setAttribute('class', 'card-text');

   imgCard.setAttribute('src', element.urlImagen);
   h5Body.innerText = element.nombre;
   pBody.innerText = "$ " + element.precio;

   let btn = document.createElement('button');
   btn.innerText = "Agregar al carrito";
   btn.setAttribute('class', 'btn btnCarrito');
   btn.setAttribute('id', `btnCarrito${element.id}`);

   btn.addEventListener('click', () => {
      AgregarCarrito(btn.id);
   });

   divBody.appendChild(h5Body);
   divBody.appendChild(pBody);
   divBody.appendChild(btn);

   divCard.appendChild(imgCard);
   divCard.appendChild(divBody);

   containerCards[0].append(divCard);
});

//esto para validarlo con un atributo y ver si agrega o quita el elemento. 
// function ModificarCarrito() {

// }

function AgregarCarrito(id) {
   let boton = document.getElementById(id);
   // boton.innerText = 'Eliminar del carrito';
   //modificar una vez que esté el modificar carrito
   //boton.innerText = 'Eliminar un carrito';

   //let carritoExistente = `${localStorage.getItem('carrito')}`;
   //concatenar con el anterior y armar el objeto como corresponde con los [];
   //localStorage.setItem('carrito', (carritoExistente != null ? carritoExistente + ';' : '[') + JSON.stringify(productos.find(element => element.id == id.replace("btnCarrito", ''))))
   localStorage.setItem('carrito', JSON.stringify(productos.find(element => element.id == id.replace("btnCarrito", ''))))
   //modificar atributo del botón
  
   let carritoLocal = JSON.parse(localStorage.getItem('carrito'))
   
   Toastify(
      {      
      text: `El producto vale: ${carritoLocal.precio}`,
      duration: 500,
      style: {
         background: "rgb(162, 108, 216)"
       },
       
       gravity: "bottom",
   }).showToast();

}

//con atributo validar si voy a un método o el otro. 
function EliminarDelCarrito(id) {
   let boton = document.getElementById(id);
   boton.innerText = 'Agregar al carrito';
   //modificar atributo del botón
}



//una vez finalizado mostrar el side drawer con el listado de carrito con localStorage.getItem