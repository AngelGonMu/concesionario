<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Car extends Model
{

    protected $table = "cars";

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title', 'description', 'precio', 'status', 'user_id'
    ];

}
