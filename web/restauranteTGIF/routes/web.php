<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::view("/","agregar_proveedor")->name("agregar_proveedor");
Route::view("/ver_proveedor","ver_proveedor")->name("ver_proveedor");

Route::view("/agregar_materiaprima","agregar_materiaprima")->name("agregar_materiaprima");
Route::view("/ver_materiaprima","ver_materiaprima")->name("ver_materiaprima");

Route::view("/realizar_venta","realizar_venta")->name("realizar_venta");
Route::view("/ver_venta","ver_venta")->name("ver_venta");
