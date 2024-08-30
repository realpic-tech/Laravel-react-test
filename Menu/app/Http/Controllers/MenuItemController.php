<?php
namespace App\Http\Controllers;

use App\Models\MenuItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
class MenuItemController extends Controller
{
    /**
     * Display a listing of the menu items for a specific menu.
     *
     * @param  int  $menuId
     * @return \Illuminate\Http\JsonResponse
     */
    public function index($menuId)
    {
        $items = MenuItem::where('menu_id', $menuId)->root()->with('children')->get();
        return response()->json($items);
    }


    public function store(Request $request)
{
    // Validate the incoming request
    $validator = Validator::make($request->all(), [
        'name' => 'required|string|max:255',
        'parent_id' => 'nullable|exists:menu_items,id', // Optional: Ensure parent_id refers to an existing menu item
    ]);

    if ($validator->fails()) {
        return response()->json(['error' => $validator->errors()], 400);
    }

    // Prepare data
    $data = $request->only(['name', 'parent_id']);
    $data['menu_id'] = null; // Set this to null if not needed for top-level menus

    // Automatically set the depth based on the parent item
    if (!empty($data['parent_id'])) {
        $parent = MenuItem::find($data['parent_id']);
        if ($parent) {
            $data['depth'] = $parent->depth + 1;
        } else {
            return response()->json(['error' => 'Parent ID does not exist.'], 400);
        }
    } else {
        $data['depth'] = 0;
    }

    // Create the menu item
    $menuItem = MenuItem::create($data);

    return response()->json($menuItem, 201);
}


    /**
     * Store a newly created menu item in the database.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $menuId
     * @return \Illuminate\Http\JsonResponse
     */
    public function storeItem(Request $request, $menuId)
    {
        // Validate the incoming request
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'parent_id' => 'nullable|exists:menu_items,id', // Ensures parent_id refers to a valid menu item
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

        // Prepare data
        $data = $request->only(['name', 'parent_id']);
        $data['menu_id'] = $menuId; // Set menu_id from route parameter

        // Automatically set the depth based on the parent item
        if (!empty($data['parent_id'])) {
            $parent = MenuItem::find($data['parent_id']);
            if ($parent) {
                $data['depth'] = $parent->depth + 1;
            } else {
                return response()->json(['error' => 'Parent ID does not exist.'], 400);
            }
        } else {
            $data['depth'] = 0;
        }

        // Create the menu item
        $menuItem = MenuItem::create($data);

        return response()->json($menuItem, 201);
    }

    /**
     * Display a listing of all menu items.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function getAllMenus()
    {
        $menus = MenuItem::whereNull('parent_id')->with('children')->get();
        $formattedMenus = $this->formatMenuItems($menus);

        return response()->json($formattedMenus);
    }

    /**
     * Show a specific menu item.
     *
     * @param  int  $menuId
     * @param  int  $itemId
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($menuId, $itemId)
    {
        $item = MenuItem::where('menu_id', $menuId)->findOrFail($itemId);
        return response()->json($item);
    }

    /**
     * Update a specific menu item.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $menuId
     * @param  int  $itemId
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $menuId, $itemId)
    {
        // Validate the incoming request
        $validator = Validator::make($request->all(), [
            'name' => 'sometimes|required|string|max:255',
            'parent_id' => 'nullable|exists:menu_items,id',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

        $menuItem = MenuItem::where('menu_id', $menuId)->findOrFail($itemId);

        // Update depth if parent_id changes
        if ($request->has('parent_id')) {
            if ($request->input('parent_id') != $menuItem->parent_id) {
                if ($request->input('parent_id')) {
                    $parent = MenuItem::find($request->input('parent_id'));
                    if ($parent) {
                        $menuItem->depth = $parent->depth + 1;
                    } else {
                        return response()->json(['error' => 'Parent ID does not exist.'], 400);
                    }
                } else {
                    $menuItem->depth = 0;
                }
            }
        }

        $menuItem->update($request->all());

        return response()->json($menuItem);
    }

    /**
     * Remove a specific menu item.
     *
     * @param  int  $menuId
     * @param  int  $itemId
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($menuId, $itemId)
    {
        $menuItem = MenuItem::where('menu_id', $menuId)->findOrFail($itemId);
        $menuItem->delete();
        return response()->json(null, 204);
    }

    /**
     * Recursively format menu items into a hierarchical structure.
     *
     * @param  \Illuminate\Support\Collection  $items
     * @return array
     */
    private function formatMenuItems($items)
    {
        $formatted = [];

        foreach ($items as $item) {
            $formattedItem = [
                'id' => $item->id,
                'name' => $item->name,
                'depth' => $item->depth,
                'parentId' => $item->parent_id,
                'subMenus' => $this->formatMenuItems($item->children) // Recursive call
            ];

            $formatted[] = $formattedItem;
        }

        return $formatted;
    }
}
