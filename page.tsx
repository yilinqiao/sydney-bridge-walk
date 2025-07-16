import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays, MapPin, Landmark, Clock, Sun, Utensils } from "lucide-react";

export default function SydneyBridgeWalk() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10 bg-gradient-to-br from-white to-blue-50 space-y-10">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold text-blue-900 tracking-tight mb-2">Sydney Harbour Bridge Walk</h1>
        <p className="text-lg text-gray-600">A scenic, stress-free half-day adventure</p>
      </div>
      <section className="grid md:grid-cols-3 gap-6">
        <Card className="bg-white shadow-md">
          <CardContent className="p-5">
            <div className="flex items-center gap-2 text-blue-700 text-base font-medium mb-2"><CalendarDays /> 📅 This Saturday</div>
            <div className="text-gray-700 text-sm">⏰ Must arrive at Town Hall by <strong>3:30 PM</strong></div>
            <div className="text-gray-700 text-sm">📍 Key Spots: Harbour Bridge, Pylon Lookout</div>
            <div className="text-gray-700 text-sm">🌿 Optional: Wendy’s Secret Garden</div>
          </CardContent>
        </Card>
        <Card className="col-span-2 bg-white shadow-md">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">🗺️ Featured Timeline</h2>
            <div className="grid sm:grid-cols-2 gap-4 text-gray-700 text-sm">
              <div>
                <p>🚉 <strong>10:30 AM</strong> – Depart from home</p>
                <p>📍 <strong>11:00 AM</strong> – Arrive at Milsons Point</p>
                <p className="ml-4 text-xs text-gray-500">🌳 Optional detour: Wendy’s Garden (10–15 min)</p>
                <p>🌉 <strong>12:00 PM</strong> – Walk across the Harbour Bridge</p>
              </div>
              <div>
                <p>🔭 <strong>12:45 PM</strong> – Explore Pylon Lookout (Entry $19, ~40 mins)</p>
                <p>🍴 <strong>1:30 PM</strong> – Lunch break (Pancakes / Glenmore / Gateway)</p>
                <p>🚇 <strong>2:30 PM</strong> – Depart for Town Hall</p>
                <p>✅ <strong>3:30 PM</strong> – Arrive</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
      <section className="grid md:grid-cols-2 gap-6">
        <Card className="bg-white shadow-md">
          <CardContent className="p-5">
            <h2 className="text-xl font-semibold text-green-700 mb-2">🌟 Experience Highlights</h2>
            <ul className="list-disc pl-5 space-y-1 text-gray-800 text-sm">
              <li>🌉 <strong>Harbour Bridge Walk</strong> – 30-min scenic stroll with epic views</li>
              <li>🔭 <strong>Pylon Lookout</strong> – Panoramic views + exhibits, $19 entry</li>
              <li>🌿 <strong>Wendy’s Garden</strong> – Peaceful, lush local favourite</li>
            </ul>
          </CardContent>
        </Card>
        <Card className="bg-white shadow-md">
          <CardContent className="p-5">
            <h2 className="text-xl font-semibold text-pink-700 mb-2">🍽️ Lunch Options</h2>
            <ul className="list-disc pl-5 text-gray-800 text-sm space-y-1">
              <li>🥞 <strong>Pancakes on the Rocks</strong> – Sweet & savory classics</li>
              <li>🍱 <strong>Gateway Food Court</strong> – Quick bites with variety</li>
              <li>🍻 <strong>The Glenmore</strong> – Rooftop pub with city view</li>
            </ul>
          </CardContent>
        </Card>
      </section>
      <section className="bg-white shadow-md rounded-xl">
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold text-indigo-700 mb-2">🧳 What to Bring</h2>
          <div className="grid sm:grid-cols-2 gap-4 text-gray-800 text-sm">
            <ul className="list-disc pl-5 space-y-1">
              <li>👟 Comfy shoes</li>
              <li>☀️ Hat / Sunscreen</li>
              <li>💳 Opal card / digital wallet</li>
            </ul>
            <ul className="list-disc pl-5 space-y-1">
              <li>🥤 Water bottle</li>
              <li>🧥 Light jacket</li>
              <li>📱 Phone with camera</li>
            </ul>
          </div>
        </CardContent>
      </section>
      <div className="text-center pt-6">
        <Button className="text-lg px-8 py-4 bg-blue-700 hover:bg-blue-800 text-white rounded-xl shadow">Let the Harbour Breeze Lead the Way 🌬️</Button>
      </div>
    </div>
  );
}