<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Cajero;

class CajerosController extends Controller
{

    public function getCajeros(){
        $cajeros = Cajero::all();
        return $cajeros;
    }

    public function crearCajero(Request $request){
        $input = $request ->all();

        $cajero = new Cajero();
        $cajero->cod_cajero = $input["cod_cajero"];
        $cajero->nom_cajero = $input["nom_cajero"];
        $cajero->fono_cajero = $input["fono_cajero"];
        $cajero->correo_cajero = $input["correo_cajero"];

        $cajero->save();
        return $cajero;
    }

    public function eliminarCajero(Request $request){
        $input = $request->all();
        $id    = $input["id"];

        $cajero = Cajero::findOrFail($id);

        $cajero->delete();

        return "ok";

    }



}
