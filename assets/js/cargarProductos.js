export const productos = [];


export async function cargarProductosJson(){    
   await fetch('../content/productos.json')
    .then((prodJson) => prodJson.json())
    .then((data) => {
        data.productos.forEach(element => {
            productos.push(element)
        });
    })
}

