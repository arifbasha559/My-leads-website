export default function Download() {
  return (
    <section className="text-center py-20 bg-blue-50 min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold text-blue-700 mb-4">Get My Leads Extension</h2>
      <p className="text-gray-600 mb-8 max-w-md">
        You can install the extension directly from Chrome Web Store or download the .crx file to install manually.
      </p>

      <div className="flex flex-col md:flex-row gap-4">
        {/* Chrome Web Store Button */}
        

        {/* Direct .crx Download Button */}
        <a
          href="/my-extension.crx"
          download
          className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition"
        >
          Download .CRX
        </a>
      </div>

      <p className="text-sm text-gray-500 mt-6 max-w-sm">
        Note: To install the .crx file manually, go to <code className="text-blue-600">chrome://extensions/</code> in Chrome and drag the file there.
      </p>
    </section>
  );
}
