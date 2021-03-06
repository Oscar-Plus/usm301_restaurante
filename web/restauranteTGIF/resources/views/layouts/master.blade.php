<!doctype html>
<html lang="es">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!--Petición -->
    <meta name= "csrf-token" content = "{{csrf_token()}}">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <!-- CSS  -->
    <link rel="stylesheet" href="{{asset('css/style.css')}}">

    <title>RestauranteTGIF</title>
  </head>

  <body>

    <header>

        <nav class="navbar navbar-expand-lg navbar-light bg-success text-warning">
            <div class="container-fluid ">
              <a class="navbar-brand" href="{{route('agregar_proveedor')}}">
                <img class = "logo" src="{{asset('img/logo1.jpg')}}" alt="Imagen de comida">
              </a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse " id="navbarNavAltMarkup" >
                <div class="navbar-nav ">
                  <a class="nav-link active text-warning" aria-current="page" href="{{route('agregar_proveedor')}}">Agregar Proveedor</a>
                  <a class="nav-link text-warning" href="{{route('ver_proveedor')}}">Ver Proveedor</a>
                  <a class="nav-link text-warning" href="{{route('agregar_materiaprima')}}">Agregar Materia Prima</a>
                  <a class="nav-link text-warning" href="{{route('ver_materiaprima')}}">Ver Materia Prima</a>
                  <a class="nav-link text-warning" href="{{route('realizar_venta')}}">Realizar Venta</a>
                  <a class="nav-link text-warning" href="{{route('ver_venta')}}">Ver Venta</a>
                  <a class="nav-link text-warning" href="{{route('ingresar_personalCaja')}}">Ingresar Personal de Caja</a>
                  <a class="nav-link text-warning" href="{{route('ver_personalCaja')}}">Ver Personal</a>
                 
                </div>
              </div>
            </div>
          </nav>

    </header>

    <main class="container-fluid">
        @yield('contenido')

    </main>

   


    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <!--LIBRERIA AXIOS -->
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <!--Señales-->
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
     <!--AXIOS -->
    <script src="{{asset('js/axios_config.js')}}"></script>

    @yield('javascript')

  </body>
</html>