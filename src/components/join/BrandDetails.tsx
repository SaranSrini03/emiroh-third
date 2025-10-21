import { Upload } from "lucide-react";
export default function BrandDetails() {
    return (
        <div>
            <h2 className="text-sm font-semibold text-gray-900">Brand Details</h2>
            <div className="mt-3 space-y-3">
                <input
                    name="brandName"
                    className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                    placeholder="Brand Name"
                />
                <input
                    name="primaryUrl"
                    className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                    placeholder="Website URL"
                    type="url"
                />
                <div className="relative">
                    <select
                        name="category"
                        className="w-full appearance-none rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                        defaultValue=""
                    >
                        <option value="" disabled>
                            Industry Category
                        </option>
                        <option>Fashion</option>
                        <option>Beauty</option>
                        <option>Electronics</option>
                        <option>Home & Living</option>
                        <option>Health & Wellness</option>
                    </select>
                    <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">▾</span>
                </div>
            </div>
            <div className="mt-10">
                <h2 className="text-sm font-semibold text-gray-900">Contact Information</h2>
                <div className="mt-3 space-y-3">
                    <input
                        name="fullName"
                        className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                        placeholder="Full Name"
                    />
                    <input
                        name="email"
                        className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                        placeholder="Email"
                        type="email"
                    />
                    <input
                        name="phone"
                        className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                        placeholder="Phone Number"
                        type="tel"
                    />
                </div>
            </div>
            <div className="mt-10">
                <h2 className="text-sm font-semibold text-gray-900">
                    Affiliate Setup
                </h2>
                <div className="mt-3 space-y-3">
                    <div className="relative">
                        <input
                            name="commission"
                            className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 pr-10 text-sm outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                            placeholder={"Default Commission Rate"}
                            type="number"
                            min={0}
                            max={100}
                        />
                        <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500 text-xs">%</span>
                    </div>

                    <div className="relative">
                        <select
                            name="paymentMode"
                            className="w-full appearance-none rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                            defaultValue=""
                        >
                            <option value="" disabled>
                                Payment Mode
                            </option>
                            <option>Bank Transfer</option>
                            <option>UPI</option>
                            <option>PayPal</option>
                        </select>
                        <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">▾</span>
                    </div>

                    <div className="flex gap-2">
                        <input
                            name="payoutHandle"
                            className="flex-1 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                            placeholder={
                                "Bank / UPI ID"
                            }
                        />
                        <label className="inline-flex items-center justify-center whitespace-nowrap rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 cursor-pointer">
                            <input type="file" className="hidden" />
                            <Upload className="mr-2 h-4 w-4" aria-hidden="true" />
                            Upload Logo
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}
