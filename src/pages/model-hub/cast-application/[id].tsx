        "use client";
        import React, { useMemo, useState } from "react";
        import { SecondaryNavbar, GradientButton } from "@/lib/imports";
        import Input from "@/components/forms/Input";
        import Field from "@/components/forms/Field";
        import Dropzone from "@/components/forms/Dropzone";
        import { AiOutlineFileText } from "react-icons/ai";

        export default function ViewModelPostPage() {
            const [height, setHeight] = useState("");
            const [weight, setWeight] = useState("");
            const [bustChest, setBustChest] = useState("");
            const [waist, setWaist] = useState("");
            const [hips, setHips] = useState("");
            const [eyeColor, setEyeColor] = useState("");
            const [dressSize, setDressSize] = useState("");
            const [shoeSize, setShoeSize] = useState("");
            const [hairLength, setHairLength] = useState("");
            const [portfolioLink, setPortfolioLink] = useState("");

            const uploadHint = useMemo(() => "PNG, JPG, MP4 up to 10MB", []);

            return (
                <div className="min-h-screen bg-white">
                    <SecondaryNavbar />

                    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                            <div className="lg:col-span-9">
                                <div className="flex items-center justify-between">
                                    <h1 className="text-2xl font-semibold text-gray-900">Overview</h1>
                                    <div className="hidden md:block w-72">
                                        <input placeholder="Search" className="w-full rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm outline-none focus:border-indigo-400" />
                                    </div>
                                </div>

                                <div className="mt-4 text-gray-700 leading-7 text-sm">
                                    <p>
                                        This casting call is a real-time opportunity for models to be part of an upcoming brand campaign. Open to fresh and experienced talent, the casting aims to find faces that match the campaign’s theme and vision. Whether it’s for runway, commercial, print, or digital media, selected models will get a chance to work with professional teams, gain exposure, and build their portfolio. Limteds slots available.
                                    </p>
                                </div>

                                <ul className="mt-6 space-y-2 text-sm text-gray-700">
                                    <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-orange-500" /> Shooting Location: Example Mumbai, Studio 14</li>
                                    <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-orange-500" /> Shoot Date(s): June 5 – 7, 2025</li>
                                    <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-orange-500" /> Time: 9:00 AM to 4 PM</li>
                                    <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-orange-500" /> Role/Format: Model – Crossover shoot</li>
                                    <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-orange-500" /> Compensation: ₹20,000 + travel allowance</li>
                                    <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-orange-500" /> Brand Type: Clothing Brand</li>
                                    <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-orange-500" /> Deliverables: 20 photos, 2 short videos</li>
                                    <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-orange-500" /> Rehearsal/Pre-meeting: Date</li>
                                    <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-orange-500" /> Wardrobe, Hair & Makeup: Provided</li>
                                    <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-orange-500" /> Deadline to Apply: April 30, 2025</li>
                                </ul>

                                <h2 className="mt-10 text-xl font-semibold text-gray-900">Eligibility Criteria</h2>
                                <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                                    <li className="flex items-start gap-2 text-gray-700"><span className="mt-1 h-4 w-4 rounded-sm bg-green-500" /> Gender: Female</li>
                                    <li className="flex items-start gap-2 text-gray-700"><span className="mt-1 h-4 w-4 rounded-sm bg-green-500" /> Age: 18–26</li>
                                    <li className="flex items-start gap-2 text-gray-700"><span className="mt-1 h-4 w-4 rounded-sm bg-green-500" /> Height: 5'6"+</li>
                                    <li className="flex items-start gap-2 text-gray-700"><span className="mt-1 h-4 w-4 rounded-sm bg-green-500" /> Skin Tone: All inclusive</li>
                                    <li className="flex items-start gap-2 text-gray-700"><span className="mt-1 h-4 w-4 rounded-sm bg-green-500" /> Prior Experience: Not mandatory</li>
                                    <li className="flex items-start gap-2 text-gray-700"><span className="mt-1 h-4 w-4 rounded-sm bg-green-500" /> Location: Preferably Mumbai-based</li>
                                </ul>

                                <h2 className="mt-10 text-xl font-semibold text-gray-900">Upload Model Portfolio</h2>

                                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-black">
                                    <Field label="Height">
                                        <Input value={height || "5 feet"} onChange={setHeight} />
                                    </Field>
                                    <Field label="Weight">
                                        <Input value={weight || "60kg"} onChange={setWeight} />
                                    </Field>
                                    <Field label="Bust/Chest">
                                        <Input value={bustChest || "32"} onChange={setBustChest} />
                                    </Field>
                                    <Field label="Waist">
                                        <Input value={waist || "28"} onChange={setWaist} />
                                    </Field>
                                    <Field label="Hips">
                                        <Input value={hips || "35"} onChange={setHips} />
                                    </Field>
                                    <Field label="Eye color">
                                        <Input value={eyeColor || "Brown"} onChange={setEyeColor} />
                                    </Field>
                                    <Field label="Dress size">
                                        <Input value={dressSize || "M"} onChange={setDressSize} />
                                    </Field>
                                    <Field label="Shoe size">
                                        <Input value={shoeSize || "5.0"} onChange={setShoeSize} />
                                    </Field>
                                    <Field label="Length of hair">
                                        <Input value={hairLength || "Mid back"} onChange={setHairLength} />
                                    </Field>
                                </div>

                                <div className="mt-4">
                                    <Field label="Portfolio Link">
                                        <Input value={portfolioLink} onChange={setPortfolioLink} placeholder="Link" />
                                    </Field>
                                </div>

                                <h3 className="mt-10 text-lg font-semibold text-gray-900">Upload Photos</h3>
                                <div className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {[
                                        "/images/launch-product/image1.jpg",
                                        "/images/launch-product/image2.jpg",
                                        "/images/launch-product/image3.jpg",
                                        "/images/launch-product/image4.jpg",
                                    ].map((src, idx) => (
                                        <div key={idx} className="relative w-full overflow-hidden rounded-lg border border-gray-200 bg-gray-50">
                                            <img src={src} alt={`Uploaded ${idx + 1}`} className="h-40 w-full object-cover" />
                                        </div>
                                    ))}
                                </div>

                                <h3 className="mt-10 text-lg font-semibold text-gray-900">Upload Videos walk or intro</h3>
                                <div className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {[
                                        "/images/launch-product/image1.jpg",
                                        "/images/launch-product/image2.jpg",
                                        "/images/launch-product/image3.jpg",
                                        "/images/launch-product/image4.jpg",
                                    ].map((src, idx) => (
                                        <div key={idx} className="relative w-full overflow-hidden rounded-lg border border-gray-200 bg-gray-50">
                                            <img src={src} alt={`Uploaded ${idx + 1}`} className="h-40 w-full object-cover" />
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                                    <GradientButton href="/model-hub/" label="Shortlist" width="w-[160px] h-[44px]" colors="bg-blue-600 text-white hover:opacity-90" />
                                    <GradientButton href="/model-hub/" label="Reject" width="w-[160px] h-[44px]" colors="bg-orange-500 text-white hover:opacity-90" />
                                </div>
                            </div>

                            <div className="lg:col-span-3">
                                <div className="sticky top-4 rounded-2xl border border-gray-200 bg-white p-4">
                                    <div className="text-sm font-semibold text-gray-900">Applied By</div>
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
                                    <div className="mt-4">
                                        <GradientButton label="Launch Product" width="w-full h-[40px]" colors="bg-gray-900 text-white hover:opacity-90" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

