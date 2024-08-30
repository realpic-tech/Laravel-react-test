<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MenuItemController;

// Menu Routes
Route::post('menus', [MenuItemController::class, 'store']); // Create new menu
Route::get('menus/{menuId}/items', [MenuItemController::class, 'index']); // List items for a specific menu
Route::post('menus/{menuId}/items', [MenuItemController::class, 'storeItem']); // Create item under a specific menu
Route::get('menus/{menuId}/items/{itemId}', [MenuItemController::class, 'show']); // Show specific item
Route::put('menus/{menuId}/items/{itemId}', [MenuItemController::class, 'update']); // Update specific item
Route::delete('menus/{menuId}/items/{itemId}', [MenuItemController::class, 'destroy']); 
Route::get('menus/all', [MenuItemController::class, 'getAllMenus']);
