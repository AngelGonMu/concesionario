<?php

namespace App\Http\Controllers;

use App\Car;
use Illuminate\Http\Request;

class CarsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $cars = Car::all();
        return response()->json(["results"=>$cars]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            $user = auth()->userOrFail();
        } catch (\Tymon\JWTAuth\Exceptions\UserNotDefinedException $e) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
        Car::create([
    		"title"=>$request->title,
    		"description"=>$request->description,
    		"precio"=>$request->precio,
            "status"=>$request->status,
            "user_id"=>$user->id
    	]);
        return response()->json(['response' => 'creado'], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  $car
     * @return \Illuminate\Http\Response
     */
    public function show($car)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  $car
     * @return \Illuminate\Http\Response
     */
    public function edit($car)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  $car
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $car)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  $car
     * @return \Illuminate\Http\Response
     */
    public function destroy($car)
    {
        $car = Car::find($car);
        $car->delete();

        return json_encode(array("result"=>"Success?"));
    }
}
