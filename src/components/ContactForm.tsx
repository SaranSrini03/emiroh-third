import { Send } from "lucide-react";
import Button from "./ui/Button";
export default function ContactForm() {
  return (
    <section id="contact" className="py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-6 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-500 leading-tight">
              Ready to get started?
              <br />
              <span className="text-black">Talk to us today</span>
            </h2>
            <svg className=" w-64 h-12 text-blue-300" viewBox="0 0 256 48" fill="none" aria-hidden="true">
              <path d="M0 36 Q128 4 256 36" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeDasharray="1 10" />
            </svg>
          </div>
          <div className="flex justify-start lg:justify-end">
            <Button label="Get Started" width={140} height={44} bgColor="#f0544f" radius={15} className="shadow-sm" />
          </div>
        </div>

        <div className="mt-12 grid gap-10 sm:gap-12 lg:grid-cols-4">
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Email us</h4>
            <p className="mt-2 text-sm text-gray-700">hello@produce-ui.com</p>
            <p className="mt-6 text-sm text-gray-700 whitespace-pre-line">
              {`95, thottakara street, kaveripakkam,
Tamilnadu, India - 632508.`}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900">Header</h4>
            <div className="mt-3 space-y-3 text-sm">
              <a className="block text-gray-700" href="#">Footer Link</a>
              <a className="block text-blue-600" href="#">Footer Link</a>
              <a className="block text-gray-700" href="#">Footer Link</a>
              <a className="block text-gray-700" href="#">Footer Link</a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900">Header</h4>
            <div className="mt-3 space-y-3 text-sm">
              <a className="block text-gray-700" href="#">Footer Link</a>
              <a className="block text-gray-700" href="#">Footer Link</a>
              <a className="block text-gray-700" href="#">Footer Link</a>
              <a className="block text-gray-700" href="#">Footer Link</a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900">Stay up to date</h4>
            <p className="mt-2 text-sm text-gray-600">Stay inform about our latest new products when it arrives</p>
            <div className="mt-4 relative">
              <input
                type="email"
                placeholder="hello@produce-ui.com"
                className="h-11 w-full rounded-xl border border-blue-100 bg-blue-50 px-4 pr-12 text-sm text-gray-700 placeholder:text-gray-400 outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-200"
              />
              <button
                aria-label="Subscribe"
                className="absolute right-1.5 top-1.5 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500 text-white hover:bg-blue-600"
              >
                <Send className="h-4 w-4" aria-hidden />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
