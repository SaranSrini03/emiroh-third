export default function Partners() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="rounded-full bg-red-400/90 px-5 py-2 text-white text-sm font-medium shadow-sm">
            Trusted By 250+ Companies
          </div>
        </div>

        <div className="mt-6 overflow-hidden border border-gray-200 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-6 px-8 py-8">
            <span className="text-xl font-semibold tracking-wide text-gray-800">zapier</span>
            <span className="text-xl font-semibold tracking-wide text-gray-800">Spotify</span>
            <span className="text-xl font-semibold tracking-wide text-gray-800">zoom</span>
            <span className="text-xl font-semibold tracking-wide text-gray-800">slack</span>
            <span className="text-xl font-semibold tracking-wide text-gray-800">amazon</span>
            <span className="text-xl font-semibold tracking-wide text-gray-800">Adobe</span>
          </div>
        </div>
      </div>
    </section>
  );
}
