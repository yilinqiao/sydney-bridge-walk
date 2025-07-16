export default function SydneyBridgeWalk() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-10 space-y-10 bg-white text-gray-800">
      <header className="text-center">
        <h1 className="text-5xl font-bold text-blue-800 mb-2">Sydney Harbour Bridge Walk</h1>
        <p className="text-lg text-gray-600">A scenic, stress-free half-day adventure</p>
      </header>

      <section className="border rounded-xl p-6 shadow bg-blue-50">
        <h2 className="text-xl font-semibold mb-4">📅 Trip Summary</h2>
        <ul className="space-y-2">
          <li>⏰ Must arrive at Town Hall by <strong>3:30 PM</strong></li>
          <li>📍 Key Spots: Harbour Bridge, Pylon Lookout</li>
          <li>🌿 Optional: Wendy’s Secret Garden</li>
        </ul>
      </section>

      <section className="border rounded-xl p-6 shadow bg-yellow-50">
        <h2 className="text-xl font-semibold mb-4">🗺️ Featured Timeline</h2>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <p>🚉 <strong>10:30 AM</strong> – Depart from home</p>
            <p>📍 <strong>11:00 AM</strong> – Arrive at Milsons Point</p>
            <p className="ml-4 text-xs text-gray-500">🌳 Optional: Wendy’s Garden (10–15 min)</p>
            <p>🌉 <strong>12:00 PM</strong> – Walk across the Harbour Bridge</p>
          </div>
          <div>
            <p>🔭 <strong>12:45 PM</strong> – Explore Pylon Lookout (Entry $19, ~40 mins)</p>
            <p>🍴 <strong>1:30 PM</strong> – Lunch break</p>
            <p>🚇 <strong>2:30 PM</strong> – Depart for Town Hall</p>
            <p>✅ <strong>3:30 PM</strong> – Arrive</p>
          </div>
        </div>
      </section>

      <section className="border rounded-xl p-6 shadow bg-green-50">
        <h2 className="text-xl font-semibold mb-4">🌟 Experience Highlights</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>🌉 <strong>Harbour Bridge Walk</strong> – 30-min scenic stroll</li>
          <li>🔭 <strong>Pylon Lookout</strong> – Great views + history</li>
          <li>🌿 <strong>Wendy’s Garden</strong> – Peaceful garden spot</li>
        </ul>
      </section>

      <section className="border rounded-xl p-6 shadow bg-pink-50">
        <h2 className="text-xl font-semibold mb-4">🍽️ Lunch Options</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>🥞 Pancakes on the Rocks</li>
          <li>🍱 Gateway Food Court</li>
          <li>🍻 The Glenmore</li>
        </ul>
      </section>

      <section className="border rounded-xl p-6 shadow bg-indigo-50">
        <h2 className="text-xl font-semibold mb-4">🧳 What to Bring</h2>
        <div className="grid sm:grid-cols-2 gap-4 text-sm">
          <ul className="list-disc pl-6 space-y-1">
            <li>👟 Comfy shoes</li>
            <li>☀️ Hat / Sunscreen</li>
            <li>💳 Opal card / digital wallet</li>
          </ul>
          <ul className="list-disc pl-6 space-y-1">
            <li>🥤 Water bottle</li>
            <li>🧥 Light jacket</li>
            <li>📱 Phone with camera</li>
          </ul>
        </div>
      </section>

      <footer className="text-center pt-8">
        <button className="px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white text-lg rounded-lg shadow">
          Let the Harbour Breeze Lead the Way 🌬️
        </button>
      </footer>
    </main>
  );
}
