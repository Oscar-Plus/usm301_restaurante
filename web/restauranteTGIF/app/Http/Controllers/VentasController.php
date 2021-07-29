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

    

}


