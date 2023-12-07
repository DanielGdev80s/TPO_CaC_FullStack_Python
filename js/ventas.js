let subtotal = 0;
const carrito = [];

window.onload = function() {
    // Realizar una solicitud para obtener los productos desde la API
    fetch('https://danielgomezcac.pythonanywhere.com/productos')
        .then(response => response.json())
        .then(productos => {
            // Obtener la referencia al tbody
            const tbody = document.getElementById('productosTableBody');

            // Iterar sobre los productos y agregar filas a la tabla
            productos.forEach(producto => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${producto.nombre}</td>
                    <td>${producto.precio}</td>
                    <td><img width="60" src="${producto.imagen}" alt="${producto.nombre}"></td>
                    <td>
                        <button class="btn btn-primary" onclick="comprar('${producto.nombre}', ${producto.precio})">Comprar</button>
                    </td>
                `;
                tbody.appendChild(row);
            });
        })
        .catch(error => console.error('Error al obtener productos:', error));
};

function comprar(nombre, precio) {
    subtotal += precio;
    carrito.push({ nombre, precio });
    
    // Actualizar la lista de productos en el carrito
    const carritoList = document.getElementById('carritoList');
    const listItem = document.createElement('li');
    listItem.textContent = `${nombre} - $${precio}`;
    carritoList.appendChild(listItem);

    // Actualizar el subtotal
    document.getElementById('subtotal').textContent = subtotal;

    console.log(`Comprar producto: ${nombre}`);
    console.log(`Subtotal: $${subtotal}`);
}

function confirmarCompra() {
    // Mostrar el mensaje de compra realizada
    const mensajeCompra = document.getElementById('mensajeCompra');
    mensajeCompra.style.display = 'block';

    // Reiniciar el carrito y subtotal
    carrito.length = 0;
    subtotal = 0;

    // Limpiar la lista de productos en el carrito
    const carritoList = document.getElementById('carritoList');
    carritoList.innerHTML = '';

    // Actualizar el subtotal
    document.getElementById('subtotal').textContent = subtotal;
}