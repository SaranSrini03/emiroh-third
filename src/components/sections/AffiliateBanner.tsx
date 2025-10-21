export default function AffiliateBanner() {
  return (
    <section className="py-8 lg:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl ring-1 ring-white">
          <img
            src="/images/affiliate-banner.png"
            alt="What is Affiliate Marketing"
            className="w-full h-auto object-cover"
          />
          <div className="pointer-events-none absolute left-1/2 top-[70%] w-full -translate-x-1/2">
            <div className="pointer-events-auto mx-auto max-w-2xl rounded-2xl bg-white px-6 py-6  ring-1 ring-black/5 sm:px-8">
              <h3 className="text-center text-xl sm:text-2xl font-bold text-gray-900">
                What is Affiliate Marketing?
              </h3>
              <p className="mt-2 text-center text-sm text-gray-600">
                The influencer promote a brand's products or services and earn a commission for every sale you generate
                through your unique affiliate link
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}