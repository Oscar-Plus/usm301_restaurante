<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\ProveedoresController;
use App\Http\Controllers\VentasController;
use App\Http\Controllers\MateriasPrimasController;
use App\Http\Controllers\CajerosController;


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

//Rutas del controller Proveedor
//get
Route::get("proveedores/get",[ProveedoresController::class , "getProveedores"]);

//post
Route::post("proveedores/post", [ProveedoresController::class, "crearProveedor"]);
Route::post("proveedores/delete", [ProveedoresController::class , "eliminarProveedor"]);
Route::post("proveedores/actualizar",[ProveedoresController::class, "actualizarProveedor"]);

//Rutas del controller Ventas
//get 
Route::get("tipos/get",[VentasController::class,"getTipos"]);
Route::get("ventas/get",[VentasController::class , "getVentas"]);
Route::get("ventas/filtrar",[VentasController::class, "filtrarVentas"]);

//post
Route::post("ventas/post",[VentasController::class , "crearVenta"]);
Route::post("ventas/delete",[VentasController::class , "eliminarVenta"]);

//Rutas del controller MateriasPrimas

//get
Route::get("materiasp/get" ,[MateriasPrimasController::class , "getMateriaP"]);

//post
Route::post("materiasp/post" ,[MateriasPrimasController::class , "crearMateriaP"]);
Route::post("materiasp/delete",[MateriasPrimasController::class , "eliminarMateriaP"]);
//Ruta del controller Cajeros

//get
Route::get("cajeros/get" , [CajerosController::class , "getCajeros"]);


//post
Route::post("cajeros/post",[CajerosController::class, "crearCajero"]);
Route::post("cajeros/delete",[CajerosController::class,"eliminarCajero"]);