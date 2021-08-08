@extends('layouts.master')

@section('contenido')
    <div class="row mt-5">
        <div class="col-12 col-md-6 col-lg-5 mx-auto">
            <div class="card">
                <div class="card-header bg-success bg-gradient text-warning">
                    <span>Registrar Venta</span>
                </div>

                <div class="card-body">
                    <div class="mb-3">
                        <label for="nom_producto-txt" class="form-label">Producto</label>
                        <input type="text" id = "nom_producto-txt" placeholder ="Ingrese nombre del producto" class="form-control">

                    </div>

                    <div class="mb-3">
                        <label for="tipos-select" class="form-label">Tipo</label>
                        <select  id="tipos-select" class="form-select"></select>

                    </div>

                    <div class="mb-3">
                        <label for="precio-txt" class="form-label">Precio</label>
                        <input type="number" id="precio-txt" min = 0 value="0" class="form-control">
                    </div>

                    <div class="mb-3">
                        <label for="fecha-txt" class="form-label">Fecha</label>
                        <input type="date"  id="fecha-txt"  class="form-control">
                    </div>


                    
                </div>


                <div class="card-footer d-grid gap-1">
                    <button id="registrarVenta-btn" class="btn btn-info" >Registrar</button>
                </div>

            </div>

        </div>

    </div>
    
@endsection

@section('javascript')
    <script src="{{asset('js/servicios/tiposService.js')}}"></script>
    <script src="{{asset("js/servicios/ventasService.js")}}"></script>
    <script src="{{asset('js/realizar_venta.js')}}"></script>
    
@endsection