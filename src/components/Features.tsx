export default function Features() {
  return (
    <section id="features" className="py-12 lg:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
              How Does Affiliate Marketing Work Here?
            </h2>
            <div className="mt-8 text-md space-y-4 ">
              <div className="rounded-xl  bg-white px-5 py-5 ">
                <p className=" text-gray-700">
                  Apparel stores can register and list their products in our pro market page
                </p>
              </div>
              <div className="rounded-xl  bg-white px-5 py-5 ">
                <p className=" text-gray-700">
                  Encourages small-scale businesses to reach a wider audience.
                </p>
              </div>
              <div className="rounded-xl  bg-white px-5 py-5 ">
                <p className=" text-gray-700">
                  Provides a platform for them to increase sales.
                </p>
              </div>
            </div>
          </div>
          <div className="justify-self-center w-full max-w-xl">
            <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop"
                alt="Colleagues reviewing documents"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
