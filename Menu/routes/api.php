<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\MenuItemController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


// Menu Routes
Route::apiResource('menus', MenuController::class);

// Menu Items Routes
Route::get('menus/{menu}/items', [MenuItemController::class, 'index']);  // List all items in a menu
Route::post('menus/{menu}/items', [MenuItemController::class, 'store']); // Add a new item to a menu
Route::get('menus/{menu}/items/{item}', [MenuItemController::class, 'show']); // Get a specific item in a menu
Route::put('menus/{menu}/items/{item}', [MenuItemController::class, 'update']); // Update a specific item in a menu
Route::delete('menus/{menu}/items/{item}', [MenuItemController::class, 'destroy']); // Delete a specific item from a menu
