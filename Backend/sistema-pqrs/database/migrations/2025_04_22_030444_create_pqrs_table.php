<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('pqrs', function (Blueprint $table) {
            $table->id();
            $table->string('nombre');
            $table->string('email');
            $table->enum('tipo', ['Peticion', 'Queja', 'Reclamo', 'Sugerencia']);
            $table->text('descripcion');
            $table->enum('estado', ['Pendiente', 'En proceso', 'Resuelto'])->default('Pendiente');
            $table->text('respuesta')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void {
        Schema::dropIfExists('pqrs');
    }
};
