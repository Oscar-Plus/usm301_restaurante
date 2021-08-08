@extends('layouts.master')

@section('contenido')
        <div class="row mt-5">
            <div class="col-12 col-md-6 col-lg-6 mx-auto">
                <div class="card">

                    <div class="card-header bg-gradient bg-success text-warning">
                        <span>Ingresar Materia prima</span>
                    </div>

                    <div class="card-body">
                        
                        <div class="mb-3">
                            <label for="cod_materiaP-num" class="form-label">Codigo materia prima</label>
                            <input type="number" id="cod_materiaP-num" min = 0 value = "0"  class="form-control">
                        </div>

                        <div class="mb-3">
                            <label for="nom_materiaP-txt" class="form-label">Nombre</label>
                            <input type="text" id="nom_materiaP-txt" placeholder="Ingrese el nombre" class="form-control">
                        </div>

                        <div class="mb-3">
                            <label for="cant_materiaP-num" class="form-label">Cantidad</label>
                            <input type="number" id="cant_materiaP-num" min =0 value="0" class="form-control">

                        </div>

                        <div class="mb-3">
                            <label for="val_materiaP-num" class="form-label">Valor</label>
                            <input type="number" id="val_materiaP-num" min="0" value="0" class="form-control">
                        </div>

                        <div class="mb-3">
                            <label for="fecha_materiaP-date" class="form-label">Fecha</label>
                            <input type="date" id="fecha_materiaP-date" class="form-control">
                        </div>

                    </div>

                    <div class="card-footer d-grid gap-1">
                        <button id="registrarMP-btn" class="btn btn-info">Registrar</button>
                        
                    </div>
                    

                </div>

            </div>

        </div>

    
@endsection

@section('javascript')
        <script src="{{asset('js/servicios/materiasprimasService.js')}}"></script>
        <script src="{{asset('js/agregar_materiaprima.js')}}"></script>
        
@endsection