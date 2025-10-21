// components/SearchSortBar.js
import { useState, usePathname, GradientButton } from "@/lib/imports";

export default function SearchSortBar() {
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("Name");
    const pathname = usePathname();
    const isOnYourCampaign = pathname === "/your-campaign";

    return (
        <div className="flex flex-col md:flex-row items-center justify-between w-9xl  py-6 md:py-12 px-4 text-gray-400 gap-8 md:gap-0">
            {/* Left side: Search + Sort */}
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
                {/* Search Box */}
                <div className="flex items-center border rounded-full px-2 sm:w-80 md:w-90">
                    <svg
                        className="w-4 h-4 text-gray-400 mr-2 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 3a7.5 7.5 0 006.15 13.65z"
                        />
                    </svg>
                    <input
                        type="text"
                        placeholder="Search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="outline-none p-1 text-sm w-full"
                    />
                </div>

                {/* Sort Dropdown */}
                <div className="flex items-center text-sm w-full sm:w-auto justify-center sm:justify-start">
                    <span className="mr-3 text-gray-600 whitespace-nowrap">Sort by</span>
                    <select
                        value={sort}
                        onChange={(e) => setSort(e.target.value)}
                        className="border text-left rounded px-4 sm:px-9 py-1 text-sm w-full sm:w-auto"
                    >
                        <option value="Name">Name</option>
                        <option value="Date">Date</option>
                    </select>
                </div>
            </div>

            {/* Right side: Button */}
            <div className="w-9xl  sm:w-auto flex justify-center">
                <GradientButton
                    href={isOnYourCampaign ? "/create-a-campaign1" : "/your-campaign"}
                    label={isOnYourCampaign ? "Create a Campaign" : "Your Campaign"}
                    className="w-9xl   sm:w-auto"
                />
            </div>
        </div>
    );
}