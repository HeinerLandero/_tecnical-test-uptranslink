<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdatePqrsRequest extends FormRequest
{
    public function rules(): array {
        return [
            'estado' => 'required|in:Pendiente,En proceso,Resuelto',
            'respuesta' => 'nullable|string',
        ];
    }
}
