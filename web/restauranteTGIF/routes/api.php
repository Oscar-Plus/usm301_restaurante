<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\ProveedoresController;
use App\Http\Controllers\VentasController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//Rutas del controler Proveedor
//get
Route::get("proveedores/get",[ProveedoresController::class , "getProveedores"]);

//post
Route::post("proveedores/post", [ProveedoresController::class, "crearProveedor"]);
Route::post("proveedores/delete", [ProveedoresController::class , "eliminarProveedor"]);

//Rutas del controler Ventas
//get 
Route::get("tipos/get",[VentasController::class,"getTipos"]);

//post

//Rutas del controler MateriasPrimas

