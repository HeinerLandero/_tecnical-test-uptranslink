<?php

namespace App\Http\Controllers;

use App\Models\Pqrs;
use App\Http\Requests\StorePqrsRequest;
use App\Http\Requests\UpdatePqrsRequest;

class PqrsController extends Controller
{
    public function index() {
        return Pqrs::all();
    }

    public function store(StorePqrsRequest $request) {
        $pqrs = Pqrs::create($request->validated());
        return response()->json($pqrs, 201);
    }

    public function update(UpdatePqrsRequest $request, Pqrs $pqrs) {
        $pqrs->update($request->validated());
        return response()->json($pqrs);
    }

    public function getByEmail($email) {
        return Pqrs::where('email', $email)->get();
    }
}
