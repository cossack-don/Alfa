<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ToDo extends Model
{
    // Указываем таблицу базы данных, к которой относится модель.
    protected $table = 'todos';

    // Указываем поля, которые могут быть заполнены пользователем (массивное присвоение).
    protected $fillable = [
        'title',
        'description',
        'completed'
    ];
}
