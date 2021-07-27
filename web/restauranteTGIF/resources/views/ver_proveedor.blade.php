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
                            <th>Acciones</th>

                        </tr>
                    </thead>

                    <tbody id= "tbody-proveedor">

                    </tbody>
                </table>

            </div>

        </div>
    
@endsection