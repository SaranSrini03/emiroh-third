import Button from "./ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight font-sans">Get meaningful feedbacks on your code</h1>
          <p className="text-gray-600 max-w-lg">Speed up your code reviews with structured, actionable insights from peers and AI. Improve quality, reduce bugs, and ship faster.</p>
          <div className="flex items-center gap-3">
            <div className="flex -space-x-3">
              <img
                src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=100&auto=format&fit=crop"
                alt=""
                className="h-8 w-8 rounded-full object-cover ring-2 ring-white"
              />
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&auto=format&fit=crop"
                alt=""
                className="h-8 w-8 rounded-full object-cover ring-2 ring-white"
              />
              <img
                src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=100&auto=format&fit=crop"
                alt=""
                className="h-8 w-8 rounded-full object-cover ring-2 ring-white"
              />
            </div>
            <div className="text-sm text-gray-700">
              <div>
                Join with <span className="font-semibold">4600+ Developers</span> and start
              </div>
              <div className="text-gray-500">getting feedbacks right now</div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              label="Join now"
              gradient="linear-gradient(90deg, #ef4444, #f87171)" // yellow to red
              width="150px"
              height="50px"
              radius={15}
              className="font-semibold"
              href="/join"
            />

          </div>
        </div>
        <div className="relative">
          <img src="/images/hero.jpg" alt="Hero" className="h-full w-full rounded-xl object-cover" />
        </div>
      </div>
    </section>
  );
}
