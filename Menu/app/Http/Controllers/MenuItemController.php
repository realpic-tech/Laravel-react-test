<?php

namespace App\Http\Controllers;

use App\Models\MenuItem;
use Illuminate\Http\Request;
class MenuItemController extends Controller
{
    public function index($menuId)


    {
        echo 'MenuItem::where("menu_id", $menuId)->rootItems()->with("children")->get();';
        $items = MenuItem::where('menu_id', $menuId)->rootItems()->with('children')->get();
        return response()->json($items);
    }

    public function store(Request $request, $menuId)
    {
        $data = $request->all();
        $data['menu_id'] = $menuId;

        $menuItem = MenuItem::create($data);
        return response()->json($menuItem, 201);
    }

    public function update(Request $request, $menuId, $itemId)
    {
        $menuItem = MenuItem::where('menu_id', $menuId)->findOrFail($itemId);
        $menuItem->update($request->all());
        return response()->json($menuItem);
    }

    public function destroy($menuId, $itemId)
    {
        MenuItem::where('menu_id', $menuId)->where('id', $itemId)->delete();
        return response()->json(null, 204);
    }
}

