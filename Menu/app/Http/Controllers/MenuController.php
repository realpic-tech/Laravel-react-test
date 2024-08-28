<?php

namespace App\Http\Controllers;

use App\Models\Menu;
use Illuminate\Http\Request;

class MenuController extends Controller
{
    public function index()
    {
        return Menu::all();
    }

    public function show($id)
    {
        $menu = Menu::with(['items' => function($query) {
            $query->with('children');
        }])->findOrFail($id);

        return response()->json($menu);
    }

    public function store(Request $request)
    {
        // return "geeting here";
        $menu = Menu::create($request->only('name'));
        return $menu;
        return response()->json($menu, 201);
    }

    public function update(Request $request, $id)
    {
        $menu = Menu::findOrFail($id);
        $menu->update($request->only('name'));
        return response()->json($menu);
    }

    public function destroy($id)
    {
        Menu::destroy($id);
        return response()->json(null, 204);
    }
}