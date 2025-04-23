<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\PqrsController;

Route::get('/pqrs', [PqrsController::class, 'index']);
Route::post('/pqrs', [PqrsController::class, 'store']);
Route::put('/pqrs/{pqrs}', [PqrsController::class, 'update']);
Route::get('/pqrs/cliente/{email}', [PqrsController::class, 'getByEmail']);
