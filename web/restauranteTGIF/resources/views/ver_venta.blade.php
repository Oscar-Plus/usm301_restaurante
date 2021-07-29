@extends('layouts.master')


@section('contenido')
        <div class="row mt-5">
            <div class="col-12 col-md-12 col-lg-6 mx-auto">
                <table class="table table-hover table-bordered table-striped table-responsive">
                    <thead class="bg-info">
                        <th>Nombre</th>
                        <th>Tipo</th>
                        <th>Precio</th>
                        <th>Fecha</th>
                    </thead>

                    <tbody id="tbody-venta">

                    </tbody>
                    
                </table>




            </div>
        </div>
@endsection