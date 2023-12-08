document.getElementById("header").innerHTML = `
  <nav class="navbar navbar-expand-sm navbar-light bg-light" style="border-bottom: 2px solid brown;">
    <div class="container">
      <a class="navbar-brand" href="index.html">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0OZTs7Js7Up9eOEKgbUKq6ptXgI5-rodfuw&usqp=CAU" alt="Coffee House" width="200" height="70" class="d-inline-block align-top">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavId">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <a class="nav-link active" href="index.html" aria-current="page">Inicio <span class="visually-hidden">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="carta01.html">Menú</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="productos.html">Productos</a>
          </li>
        </ul>
        <a href="url_de_tu_imagen.jpg" target="_blank">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMWilMSaCYcXqafXYJGu8CyoQhzSn47TtLGA&usqp=CAU" alt="Buscar" width="100" height="100">
        </a>
      </div>
    </div>
  </nav>
`;
