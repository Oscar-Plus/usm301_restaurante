<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\MateriaPrima;

class MateriasPrimasController extends Controller
{
    public function getMateriaP(){
        $materiasp = MateriaPrima::all();
        return $materiasp;
    }

    public function crearMateriaP(Request $request){
        $input = $request->all();

        $materiap = new MateriaPrima();
        $materiap->cod_materiaP = $input["cod_materiaP"];
        $materiap->nom_materiaP = $input["nom_materiaP"];
        $materiap->cant_materiaP = $input["cant_materiaP"];
        $materiap->val_materiaP = $input["val_materiaP"];
        $materiap->fecha_materiaP = $input["fecha_materiaP"];

        $materiap->save();

        return $materiap;
    }

    public function eliminarMateriaP(Request $request){
        $input = $request->all();

        $id = $input["id"];

        $materiap = MateriaPrima::findOrFail($id);

        $materiap->delete();
        return "ok";

    }

    public function actualizarMateriaP(Request $request){
        $input = $request->all();

        $id = $input["id"];

        $materiap = MateriaPrima::findOrFail($id);
        $materiap->cod_materiaP = $input["cod_materiaP"];
        $materiap->nom_materiaP = $input["nom_materiaP"];
        $materiap->cant_materiaP = $input["cant_materiaP"];
        $materiap->val_materiaP = $input["val_materiaP"];
        $materiap->fecha_materiaP = $input["fecha_materiaP"];

        $materiap->save();

        return $materiap;

    }

}
