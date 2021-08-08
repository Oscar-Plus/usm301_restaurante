@extends('layouts.master')

@section('contenido')
    <div class="row mt-5">
        <div class="col-12 col md-6 col-lg-6 mx-auto">
            <div class="card">
                <div class="card-header bg-success text-warning bg-gradient">
                    <span>Ingresar Personal</span>
                </div>

                <div class="card-body">

                    <div class="mb-3">
                        <label for="cod_cajero-txt" class="form-label">Codigo del cajero</label>
                        <input type="number" id="cod_cajero-txt" min = 0 value="0" class="form-control">
                    </div>

                    <div class="mb-3">
                        <label for="nom_cajero-txt" class="form-label">Nombre</label>
                        <input type="text" id ="nom_cajero-txt" placeholder="Ingrese el nombre" class="form-control">
                    </div>

                    <div class="mb-3">
                        <label for="fono_cajero-txt" class="form-label">Telefono</label>
                        <input type="text" id="fono_cajero-txt" placeholder="Ingrese el numero de telefono" class="form-control">
                    </div>

                    <div class="mb-3">
                        <label for="correo_cajero-txt" class="form-label">Correo Electronico</label>
                        <input type="text" id="correo_cajero-txt" placeholder ="Ingrese el correo electronico" class="form-control">
                    </div>

                    <div class="card-footer d-grid gap-1">
                        <button id="registrarCajero-btn" class="btn btn-info">Registrar</button>

                    </div>



                </div>

            </div>

        </div>

    </div>


@endsection

@section('javascript')
    <script src="{{asset('js/servicios/cajerosService.js')}}"></script>
    <script src="{{asset('js/ingresar_cajero.js')}}"></script>
@endsection