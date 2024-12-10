<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});





Route::get('/lk/{vue_capture?}', function() {
    return view('lk');
})->where('vue_capture', '[\/\w\.-]*');

// Обработчик для всех остальных маршрутов
// Route::fallback(function () {
//     abort(404); // Возвращает ошибку 404 для несуществующих маршрутов
// });

// Route::get('/{any?}', [
//     function () {
//         return view('lk');
//     }
// ])->where('any', '.*');
