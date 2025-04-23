<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorePqrsRequest extends FormRequest
{
    public function rules(): array {
        return [
            'nombre' => 'required|string|max:255',
            'email' => 'required|email',
            'tipo' => 'required|in:Peticion,Queja,Reclamo,Sugerencia',
            'descripcion' => 'required|string',
        ];
    }
}
