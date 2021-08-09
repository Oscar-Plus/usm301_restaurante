<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Venta;

class VentasController extends Controller
{
    public function getTipos(){
        $tipos = array();
        $tipos[] = "Comidas";
        $tipos[] = "Postres";
        $tipos[] = "Bebidas";
        $tipos[] = "Aperiritivos";

        return $tipos;

    }

    public function getVentas(){
        $ventas = Venta::all();
        return $ventas;

    }

    public function filtrarVentas(Request $request){
        $input = $request->all();
        $filtro = $input["filtro"];
        
        $ventas = Venta::where("tipo", $filtro)->get();
        return $ventas;

    }


    public function crearVenta(Request $request){
        $input = $request->all();

        $ventas = new Venta();
        $ventas->nombre = $input["nombre"];
        $ventas->tipo   = $input["tipo"];
        $ventas->precio = $input["precio"];
        $ventas->fecha  = $input["fecha"];

        $ventas->save();

        return $ventas;

    }

    public function eliminarVenta(Request $request){
        $input = $request->all();
        $id    = $input["id"];

        $venta = Venta::findorFail($id);

        $venta->delete();

        return "ok";

    }

    public function actualizarVenta(Request $request){
        $input = $request->all();
        $id    = $input["id"];

        $venta = Venta::findorFail($id);
        $venta->nombre = $input["nombre"];
        $venta->tipo   = $input["tipo"];
        $venta->precio = $input["precio"];
        $venta->fecha  = $input["fecha"];

        $venta->save();

        return $venta;


    }

    
    

}


