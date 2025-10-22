import CastCallingForm from "@/components/forms/CastCallingForm";
import { SecondaryNavbar } from "@/lib/imports";

export default function Page() {
    const createdBy = {
        name: "ABC Lifestyle pvt ltd",
        avatar: "images/hero.jpg",
        postedOn: "25th Jan 2025",
    };

    return (
        <div className="min-h-dvh bg-gray-50 ">
            <SecondaryNavbar />
            <div className="lg:pr-96 ">
                <CastCallingForm />
            </div>
            <div className="hidden lg:block fixed right-50 top-28 z-10 ">
                <div className="lg:col-span-3">
                    <div className="sticky top-4 rounded-2xl w-70 border border-gray-200 bg-white p-4">
                        <div className="text-sm font-semibold text-gray-900">Created by</div>
                        <div className="mt-4 flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full overflow-hidden bg-gray-200" />
                            <div>
                                <div className="text-sm font-medium text-gray-900">Jane Cooper</div>
                                <div className="text-xs text-gray-500">@janecooper</div>
                            </div>
                        </div>
                        <div className="mt-4 text-xs text-gray-600 leading-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}