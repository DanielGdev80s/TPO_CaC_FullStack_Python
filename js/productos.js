const { createApp } = Vue;

createApp({
  data() {
    return {
      productos: [],
      //url:'http://localhost:5000/productos',
      // Si el backend está corriendo local usar localhost 5000 (si no lo subieron a pythonanywhere)
      url: 'https://danielgomezcac.pythonanywhere.com/productos', // Si ya lo subieron a pythonanywhere
      error: false,
      cargando: true,
      /* Atributos para guardar los valores del formulario */
      id: 0,
      nombre: "",
      imagen: "",
      stock: 0,
      precio: 0,
    };
  },
  methods: {
    fetchData(url) {
      fetch(url)
        .then(response => response.json())
        .then(data => {
          this.productos = data;
          this.cargando = false;
        })
        .catch(err => {
          console.error(err);
          this.error = true;
        });
    },
    eliminar(producto) {
      const url = this.url + '/' + producto;
      const options = {
        method: 'DELETE',
      };

      fetch(url, options)
        .then(res => res.text()) // or res.json()
        .then(res => {
          location.reload();
        });
    },
    grabar() {
      const producto = {
        nombre: this.nombre,
        precio: this.precio,
        stock: this.stock,
        imagen: this.imagen,
      };

      const options = {
        body: JSON.stringify(producto),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow',
      };

      fetch(this.url, options)
        .then(() => {
          alert("Registro grabado");
          window.location.href = "./productosBackEnd.html";
        })
        .catch(err => {
          console.error(err);
          alert("Error al Grabar");
        });
    },
  },
  created() {
    this.fetchData(this.url);
  },
}).mount('#app');
