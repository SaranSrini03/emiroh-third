import { Upload } from "lucide-react";

export default function InfluencerDetails() {
    return (
        <div>
            <h2 className="text-sm font-semibold text-gray-900">Personal Details</h2>
            <div className="mt-3 space-y-3">
                <input
                    name="Fullname"
                    className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                    placeholder="Full Name"
                />
                <input
                    name="primaryUrl"
                    className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                    placeholder="Instagram / Tiktok Handle"
                    type="url"
                />
                <input
                    name="primaryUrl"
                    className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                    placeholder="Email"
                    type="email"
                />
                <input
                    name="primaryUrl"
                    className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                    placeholder="Phone Number"
                    type="number"
                />

            </div>
            <div className="mt-10">
                <h2 className="text-sm font-semibold text-gray-900">Platform & Stats</h2>
                <div className="mt-3 space-y-3">
                    <input
                        name="fullName"
                        className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                        placeholder="Full Name"
                    />
                    <input
                        name="email"
                        className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                        placeholder="Follower Count"
                        type="email"
                    />
                    <input
                        name="phone"
                        className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                        placeholder="Engagement Rate (Optional)"
                        type="tel"
                    />
                </div>
            </div>
            <div className="mt-10">
                <h2 className="text-sm font-semibold text-gray-900">
                    Payment Info
                </h2>
                <div className="mt-3 space-y-3">
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
                    <input
                        name="phone"
                        className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                        placeholder="UPI ID "
                        type="tel"
                    />


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
