<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Proveedor;

class ProveedoresController extends Controller
{
    public function getProveedores(){
        // Equivalente Select * from preveedores
        $proveedores = Proveedor::all();
        return $proveedores;

    }

    public function crearProveedor(Request $request){
        // Equivalente a un INSERT INTO ....
        $input = $request->all();
        
        $proveedor = new Proveedor();
        $proveedor->rut = $input["rut"];
        $proveedor->nombre = $input["nombre"];
        $proveedor->telefono = $input["telefono"];
        $proveedor->correo = $input["correo"];
        $proveedor->ubicacion = $input["ubicacion"];

        $proveedor->save();
        return $proveedor;

    }

    public function eliminarProveedor(Request $request){
        $input = $request->all();
        $id = $input["id"];
        //1.Ir a buscar el registro a la BD
        $proveedor = Proveedor::findOrFail($id);

        //2. Para eliminar llamo al metodo delete
        $proveedor->delete();

        return "ok";


    }

}
 