<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CrearTablaCajeros extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cajeros', function (Blueprint $table) {
            $table->id();
            $table->integer("cod_cajero");
            $table->string("nom_cajero",50);
            $table->string("fono_cajero",20);
            $table->string("correo_cajero",50);

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
        Schema::dropIfExists('cajeros');
    }
}
