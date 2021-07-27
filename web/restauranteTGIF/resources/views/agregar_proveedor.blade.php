@extends('layouts.master')

@section('contenido')

  <div class="row mt-5">
     <div class="col-12 col-md-6 col-lg-5 mx-auto">
        
        <div class="card">

          <div class="card-header bg-success text-warning">
            <span>Agregar Proveedor</span>
            
          </div>

          <div class="card-body">
            <div class="mb-3">
              <label for="rut-txt" class="form-label">Rut</label>
              <input type="text" id= "rut-txt" placeholder = "Ingrese su rut" class="form-control">

            </div>

            <div class="mb-3">
              <label for="nombre-txt" class="form-label">Nombre</label>
              <input type="text" id="nombre-txt" placeholder = "Ingrese su nombre" class="form-control">

            </div>

            <div class="mb-3">
              <label for="fono-txt" class="form-label">Telefono</label>
              <input type="text" id ="fono-txt" placeholder= "Ingrese su telefono" class="form-control">

            </div>

            <div class="mb-3">
              <label for="correo-txt" class="form-label">Correo Electronico</label>
              <input type="text" id="correo-txt" placeholder = "Ingrese su correo" class="form-control">

            </div>

          </div>

          <div class="card-footer d-grid gap-1">
            <button class="btn btn-info">Registrar</button>

          </div>

        </div>
        
     </div>

  </div>
      
@endsection