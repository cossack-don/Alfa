<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ToDo; // Предположим, что у вас есть модель Todo

class User {
    public string $name;
    public int $age;

    public function __construct(string $name, int $age) {
        $this->name = $name;
        $this->age = $age;
    }
}
class ProjectController extends Controller
{
    //GET LIST
    public function index()
    {
        // Получение всех задач
//         $todos = Todo::all();
        $todos = Todo::paginate(10); //пагинация
        return response()->json($todos, 200);
    }

    //POST-create
    public function store(Request $request)
    {
        // Создание новой задачи
        $todo = new Todo();
        $todo->title = 'ffffff';
        $todo->description = 'descrip23424tion';
        $todo->completed = true;
        $todo->save();

        return response()->json(['message' => 'Задача создана успешно'], 201);
    }

    //GET_BY_ID
    public function show(string $id)
    {
          // Найти задачу по ID
          $todo = Todo::findOrFail($id);
          return response()->json($todo, 200);
    }

    //PUT OR PATCH - xz
    public function update(Request $request, string $id)
    {
        $validatedData = $request->validate([
            'title' => 'sometimes|required|string|max:255',
            'description' => 'sometimes|nullable|string',
        ]);

        // Поиск задачи по ID
        $todo = Todo::findOrFail($id);
        // Обновление полей задачи
        $todo->fill($validatedData)->save();
        return response()->json(['message' => 'Задача обновлена успешно'], 200);
    }

    //DELETE
    public function destroy(string $id)
    {
       // Найти задачу по ID
       $todo = Todo::findOrFail($id);
       // Удаление задачи
       $todo->delete();
       return response()->json(['message' => 'Задача удалена успешно'], 200);
    }
}
