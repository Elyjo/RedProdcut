<?php

namespace App\Http\Controllers;

use App\Models\Hotel;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HotelController extends Controller
{
    public function index()
    {
        return Inertia::render('Hotels/Index', [
            'hotels' => Hotel::all(),
        ]);
    }

    public function create()
    {
        return Inertia::render('Hotels/Create'); 
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'city' => 'required|string|max:255',
            'email' => 'required|string|max:255',
            'price' => 'required|numeric|min:0',
            'phone' => 'required|string|max:20',
            'devise' => 'required|string|max:10',
            'image' => 'nullable|image|max:2048',
        ]);

        if ($request->hasFile('image')) {
            $validated['image'] = $request->file('image')->store('hotels', 'public');
        }

        Hotel::create($validated);

        return redirect()->route('hotels.index');
    }

    public function edit(Hotel $hotel)
    {
        return Inertia::render('Hotels/Edit', [
            'hotel' => $hotel,
        ]);
    }

    public function update(Request $request, Hotel $hotel)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'city' => 'required|string|max:255',
            'email' => 'required|string|max:255',
            'price' => 'required|numeric|min:0',
            'phone' => 'required|string|max:20',
            'devise' => 'required|string|max:10',
            'image' => 'nullable|image|max:2048',
        ]);

        if ($request->hasFile('image')) {
            $validated['image'] = $request->file('image')->store('hotels', 'public');

        } else {
            $validated['image'] = $hotel->image;
        }

        $hotel->update($validated);

        return redirect()->route('hotels.index');
        


    }

    public function destroy(Hotel $hotel)
    {
        if ($hotel->image) {
            \Storage::disk('public')->delete($hotel->image);
        }

        $hotel->delete();

        return redirect()->route('hotels.index');
    }
}
