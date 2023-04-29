<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class visitor extends Model
{
    use HasFactory;

    protected $guarded = [
        'ip_address',
        'visit_time',
        'visit_date',
    ];
}
