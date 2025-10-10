export default function HowItWorks() {
  const steps = [
    "Click 'Save Tab' to capture your current page URL.",
    "Use 'Save Input' to add any custom link.",
    "Click a saved link to open it in a new tab.",
    "Remove links anytime using the delete icon.",
  ];

  return (
    <section className="max-w-3xl mx-auto px-6 py-20 text-center">
      <h2 className="text-3xl font-bold text-blue-700 mb-6">How It Works</h2>
      <ol className="text-gray-700 space-y-4 text-lg list-decimal text-left mx-auto w-fit">
        {steps.map((s, i) => <li key={i}>{s}</li>)}
      </ol>
    </section>
  );
}
