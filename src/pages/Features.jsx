export default function Features() {
  const features = [
    { title: "Save Any Link", desc: "Store custom URLs or capture your current tab instantly." },
    { title: "Offline Storage", desc: "All data saved locally — fast and private." },
    { title: "Smart Toasts", desc: "Beautiful notifications for every action." },
    { title: "Minimal UI", desc: "Clean, responsive interface powered by TailwindCSS." },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">Features</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <div key={i} className="p-6 border rounded-xl shadow hover:shadow-md transition">
            <h3 className="font-semibold text-xl mb-2 text-blue-600">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
