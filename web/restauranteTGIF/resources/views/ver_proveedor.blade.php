@extends('layouts.master')


@section('contenido')
        <div class="row mt-5">
            <div class="col-12 col-md-12 col-lg-6 mx-auto">
                <table class="table table-hover table-bordered table-striped table-responsive">
                    <thead class="bg-info">
                        <tr>
                            <th>Rut</th>
                            <th>Nombre</th>
                            <th>Telefono</th>
                            <th>Correo Electronico</th>
                            <th>Ubicacion</th>
                            <th>COD EMP</th>
                            <th>Acciones</th>

                        </tr>
                    </thead>

                    <tbody id= "tbody-proveedor">

                    </tbody>
                </table>

            </div>

            <div class="col-12 col-md-6 col-lg-5 mx-auto">
        
                <div class="card">
        
                  <div class="card-header bg-success text-warning bg-gradient">
                    <span>Actualizar Proveedor</span>
                    
                  </div>
        
                  <div class="card-body">
                    <div class="mb-3">
                      <label for="rut-txt" class="form-label">Rut</label>
                      <input type="text" id= "rut-txt" placeholder = "Ingrese el rut" class="form-control">
        
                    </div>
        
                    <div class="mb-3">
                      <label for="nombre-txt" class="form-label">Nombre</label>
                      <input type="text" id="nombre-txt" placeholder = "Ingrese el nombre" class="form-control">
        
                    </div>
        
                    <div class="mb-3">
                      <label for="fono-txt" class="form-label">Telefono</label>
                      <input type="text" id ="fono-txt" placeholder= "Ingrese el numero de telefono" class="form-control">
        
                    </div>
        
                    <div class="mb-3">
                      <label for="correo-txt" class="form-label">Correo Electronico</label>
                      <input type="text" id="correo-txt" placeholder = "Ingrese el correo electronico" class="form-control">
        
                    </div>
        
                    <div class="mb-3">
                      <label for="ubicacion-txt" class="form-label">Ubicacion</label>
                      <input type="text" id="ubicacion-txt" placeholder ="Ingrese la ubicaciom" class="form-control">
                    </div>
        
                    <div class="mb-3">
                      <label for="cod_empresa-txt" class="form-label">Codigo Empresa</label>
                      <input type="number" id="cod_empresa-txt" placeholder = "Ingrese codigo de la empresa" min = 0 value="0" class="form-control">
                    </div>
        
                  </div>
        
                  <div class="card-footer d-grid gap-1">
                    <button id="modificarP-btn" class="btn btn-info">Modificar</button>
        
                  </div>
        
                </div>
                
             </div>

        </div>
    
@endsection

@section('javascript')
        <script src ="{{asset('js/servicios/proveedoresService.js')}}"></script>
        <script src="{{asset('js/ver_proveedor.js')}}"></script>
@endsection