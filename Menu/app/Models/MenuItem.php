<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class MenuItem extends Model
{
    protected $fillable = ['name', 'parent_id', 'depth', 'menu_id'];

    public function parent()
    {
        return $this->belongsTo(MenuItem::class, 'parent_id');
    }

    public function children()
    {
        return $this->hasMany(MenuItem::class, 'parent_id')->with('children');
    }

    public function scopeRoot($query)
    {
        return $query->whereNull('parent_id');
    }
}
