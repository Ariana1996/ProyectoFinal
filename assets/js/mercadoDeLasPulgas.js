import {
   productos,
   cargarProductosJson
} from "./cargarProductos.js";

await cargarProductosJson();

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
   btn.setAttribute('data-state', 'active');

   btn.addEventListener('click', () => {
      ModificarCarrito(btn.id);
   });

   divBody.appendChild(h5Body);
   divBody.appendChild(pBody);
   divBody.appendChild(btn);

   divCard.appendChild(imgCard);
   divCard.appendChild(divBody);

   containerCards[0].append(divCard);
});

//esto para validarlo con un atributo y ver si agrega o quita el elemento. 

function ModificarCarrito(id) {
   let boton = document.getElementById(id);
   if (boton.getAttribute('data-state') == 'active') {
      AgregarAlCarrito(boton)
      boton.innerText = 'Eliminar del carrito';
      boton.setAttribute('data-state', 'inactive');
   } else {
      EliminarDelCarrito(boton)
      boton.innerText = 'Agregar al carrito';
      boton.setAttribute('data-state', 'active');
   }
}

function AgregarAlCarrito(elementButton) {

   let carritoExistente = `${localStorage.getItem('carrito')}`;
   //concatenar con el anterior y armar el objeto como corresponde con los [];
   if (carritoExistente != 'null') {
      carritoExistente = carritoExistente.substring(0, carritoExistente.length - 1) + ',';
   } else {
      carritoExistente = "[";
   }

   let productoAgregado = productos.find(element => element.id == elementButton.id.replace("btnCarrito", ''));
   localStorage.setItem('carrito', carritoExistente + JSON.stringify(productoAgregado) + ']')

   Toastify({
      text: `Producto agregado: ${productoAgregado.nombre}`,
      duration: 1500,
      style: {
         background: "rgb(162, 108, 216)"
      },

      gravity: "bottom",
   }).showToast();
}

//con atributo validar si voy a un método o el otro. 
function EliminarDelCarrito(elementButton) {
   let productosStorage = JSON.parse(localStorage.getItem('carrito'));

   console.log(productosStorage)
   let productoEliminado = productos.find(element => element.id == elementButton.id.replace("btnCarrito", ''));

   let productosRestantes =productosStorage.filter((item) => item.id != productoEliminado.id)

   console.log(productosRestantes)
   if (productosRestantes.length > 0){
      localStorage.setItem('carrito', JSON.stringify(productosRestantes))
   }
   else{
      localStorage.removeItem('carrito');
   }

   Toastify({
      text: `Producto eliminado: ${productoEliminado.nombre}`,
      duration: 1500,
      style: {
         background: "rgb(162, 108, 216)"
      },

      gravity: "bottom",
   }).showToast();
}
//hacer el login con la carita del usuario
//una vez finalizado mostrar el side drawer con el listado de carrito con localStorage.getItem