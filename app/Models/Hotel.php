<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Hotel extends Model
{
    use HasFactory;

    // Autoriser l'insertion en masse (mass assignment)
    protected $fillable = [
        'name',
        'city',
        'email',
        'phone',
        'price',
        'devise',
        'image',
    ];
}
