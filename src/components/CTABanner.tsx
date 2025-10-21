import Button from "./ui/Button";
export default function CTABanner() {
  return (
    <section className="py-12 lg:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden rounded-2xl bg-blue-50 px-6 py-12 sm:px-12 ">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center  ">
            <div className="px-6 py-12 sm:px-12">
              <h3 className="text-2xl font-bold ">Grow Your Business with Us</h3>
              <p className="mt-3 text-gray-600 ">From discovery to payout, streamline your affiliate workflow and scale confidently.</p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Button
                  label="Start Now"
                  bgColor="#ef4444"
                  width="150px"
                  height="50px"
                  
                  className="font-semibold"
                />
              </div>
            </div>
            <div className="order-first lg:order-none">
              <div className="aspect-[4/3] w-full max-w-md overflow-hidden rounded-xl">
                <img src="/images/ctabanner.png" alt="CTA Banner" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
