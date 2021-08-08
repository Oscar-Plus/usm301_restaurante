<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CrearTablaMateriasprimas extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('materiasprimas', function (Blueprint $table) {
            $table->id();
            $table->integer("cod_materiaP");
            $table->string("nom_materiaP", 20);
            $table->integer("cant_materiaP");
            $table->integer("val_materiaP");
            $table->date("fecha_materiaP");

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('materiasprimas');
    }
}
