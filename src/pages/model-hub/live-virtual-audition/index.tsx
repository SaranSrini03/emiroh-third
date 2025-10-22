"use client";
import React, { useMemo, useState } from "react";
import { SecondaryNavbar, GradientButton } from "@/lib/imports";
import Input from "@/components/forms/Input";
import Field from "@/components/forms/Field";
import Dropzone from "@/components/forms/Dropzone";
import { AiOutlineFileText } from "react-icons/ai";

export default function HostLiveAuditionPage() {
    // Overview and sections
    const [overview, setOverview] = useState("");
    const [whatWeExpect, setWhatWeExpect] = useState("");
    const [howToAudition, setHowToAudition] = useState("");

    // Audition details
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [platform, setPlatform] = useState("");
    const [duration, setDuration] = useState("");

    // Eligibility
    const [gender, setGender] = useState("Female");
    const [age, setAge] = useState("18–26");
    const [height, setHeight] = useState("5'6\"+");
    const [skinTone, setSkinTone] = useState("All inclusive");
    const [experience, setExperience] = useState("Not mandatory");
    const [location, setLocation] = useState("Mumbai-based");

    // Portfolio
    const [pHeight, setPHeight] = useState("5 feet");
    const [pWeight, setPWeight] = useState("60kg");
    const [pBustChest, setPBustChest] = useState("32");
    const [pWaist, setPWaist] = useState("28");
    const [pHips, setPHips] = useState("35");
    const [pEye, setPEye] = useState("Brown");
    const [pDress, setPDress] = useState("M");
    const [pShoe, setPShoe] = useState("5.0");
    const [pHair, setPHair] = useState("Mid back");
    const [portfolioLink, setPortfolioLink] = useState("");

    // Additional questions
    const [q1, setQ1] = useState("");
    const [q2, setQ2] = useState("");
    const [q3, setQ3] = useState("");
    const [q4, setQ4] = useState("");
    const [q5, setQ5] = useState("");

    const uploadHint = useMemo(() => "PNG, JPG, MP4 up to 10MB", []);

    return (
        <div className="min-h-screen bg-white">
            <SecondaryNavbar />

            <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Main */}
                    <div className="lg:col-span-9">
                        {/* Overview */}
                        <div className="flex items-center">
                            <h1 className="text-2xl font-semibold text-gray-900">Overview</h1>
                        </div>
                        <div className="mt-3">
                            <textarea
                                value={overview}
                                onChange={(e) => setOverview(e.target.value)}
                                placeholder="Write a short description"
                                className="w-full min-h-24 rounded-xl border border-gray-200 bg-gray-50 p-4 text-sm outline-none focus:border-indigo-400"
                            />
                        </div>

                        {/* Audition Details */}
                        <h2 className="mt-8 text-xl font-semibold text-gray-900">Audition Details</h2>
                        <div className="mt-4 space-y-4">
                            <Field label="Date">
                                <Input value={date} onChange={setDate} placeholder="Write your own date" />
                            </Field>
                            <Field label="Time">
                                <Input value={time} onChange={setTime} placeholder="Write your own time" />
                            </Field>
                            <Field label="Platform">
                                <Input value={platform} onChange={setPlatform} placeholder="Write your own platform" />
                            </Field>
                            <Field label="Duration">
                                <Input value={duration} onChange={setDuration} placeholder="Write your own duration" />
                            </Field>
                        </div>

                        {/* What we expect */}
                        <div className="mt-10 flex items-center">
                            <h2 className="text-xl font-semibold text-gray-900">What We Expect?</h2>
                        </div>
                        <div className="mt-3">
                            <textarea
                                value={whatWeExpect}
                                onChange={(e) => setWhatWeExpect(e.target.value)}
                                placeholder="Write a short description"
                                className="w-full min-h-24 rounded-xl border border-gray-200 bg-gray-50 p-4 text-sm outline-none focus:border-indigo-400"
                            />
                        </div>

                        {/* How to Audition */}
                        <div className="mt-10 flex items-center">
                            <h2 className="text-xl font-semibold text-gray-900">How to Audition?</h2>
                        </div>
                        <div className="mt-3">
                            <textarea
                                value={howToAudition}
                                onChange={(e) => setHowToAudition(e.target.value)}
                                placeholder="Write a short description"
                                className="w-full min-h-24 rounded-xl border border-gray-200 bg-gray-50 p-4 text-sm outline-none focus:border-indigo-400"
                            />
                        </div>

                        {/* Eligibility */}
                        <h2 className="mt-10 text-xl font-semibold text-gray-900">Eligibility Criteria</h2>
                        <div className="mt-4 space-y-3">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                                <div className="flex items-center gap-2 text-gray-700 text-sm">
                                    <span className="h-4 w-4 rounded-sm bg-green-500" />
                                    Gender
                                </div>
                                <Input value={gender} onChange={setGender} placeholder="Write your own" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                                <div className="flex items-center gap-2 text-gray-700 text-sm">
                                    <span className="h-4 w-4 rounded-sm bg-green-500" />
                                    Age
                                </div>
                                <Input value={age} onChange={setAge} placeholder="Write your own" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                                <div className="flex items-center gap-2 text-gray-700 text-sm">
                                    <span className="h-4 w-4 rounded-sm bg-green-500" />
                                    Height
                                </div>
                                <Input value={height} onChange={setHeight} placeholder="Write your own" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                                <div className="flex items-center gap-2 text-gray-700 text-sm">
                                    <span className="h-4 w-4 rounded-sm bg-green-500" />
                                    Skin Tone
                                </div>
                                <Input value={skinTone} onChange={setSkinTone} placeholder="Write your own" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                                <div className="flex items-center gap-2 text-gray-700 text-sm">
                                    <span className="h-4 w-4 rounded-sm bg-green-500" />
                                    Prior Experience
                                </div>
                                <Input value={experience} onChange={setExperience} placeholder="Write your own" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                                <div className="flex items-center gap-2 text-gray-700 text-sm">
                                    <span className="h-4 w-4 rounded-sm bg-green-500" />
                                    Location
                                </div>
                                <Input value={location} onChange={setLocation} placeholder="Write your own" />
                            </div>
                        </div>

                        {/* Upload Portfolio */}
                        <h2 className="mt-10 text-xl font-semibold text-gray-900">Upload Model Portfolio</h2>
                        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div className="space-y-1">
                                <label className="text-sm font-medium text-gray-800">Height</label>
                                <Input value={pHeight} onChange={setPHeight} />
                            </div>
                            <div className="space-y-1">
                                <label className="text-sm font-medium text-gray-800">Weight</label>
                                <Input value={pWeight} onChange={setPWeight} />
                            </div>
                            <div className="space-y-1">
                                <label className="text-sm font-medium text-gray-800">Bust/Chest</label>
                                <Input value={pBustChest} onChange={setPBustChest} />
                            </div>
                            <div className="space-y-1">
                                <label className="text-sm font-medium text-gray-800">Waist</label>
                                <Input value={pWaist} onChange={setPWaist} />
                            </div>
                            <div className="space-y-1">
                                <label className="text-sm font-medium text-gray-800">Hips</label>
                                <Input value={pHips} onChange={setPHips} />
                            </div>
                            <div className="space-y-1">
                                <label className="text-sm font-medium text-gray-800">Eye color</label>
                                <Input value={pEye} onChange={setPEye} />
                            </div>
                            <div className="space-y-1">
                                <label className="text-sm font-medium text-gray-800">Dress size</label>
                                <Input value={pDress} onChange={setPDress} />
                            </div>
                            <div className="space-y-1">
                                <label className="text-sm font-medium text-gray-800">Shoe size</label>
                                <Input value={pShoe} onChange={setPShoe} />
                            </div>
                            <div className="space-y-1">
                                <label className="text-sm font-medium text-gray-800">Length of hair</label>
                                <Input value={pHair} onChange={setPHair} />
                            </div>
                            <div className="space-y-1 lg:col-span-3">
                                <label className="text-sm font-medium text-gray-800 flex items-center gap-2">
                                    <span role="img" aria-label="link">🔗</span>
                                    Portfolio Link
                                </label>
                                <Input value={portfolioLink} onChange={setPortfolioLink} placeholder="Link" />
                            </div>
                        </div>

                        {/* Additional questions */}
                        <div className="mt-10 flex items-center">
                            <h2 className="text-xl font-semibold text-gray-900">Additional questions</h2>
                        </div>
                        <div className="mt-4 space-y-4">
                            <div className="space-y-1">
                                <label className="text-sm font-medium text-gray-800 flex items-center gap-2">
                                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gray-200 text-xs font-semibold text-gray-700">1</span>
                                    Describe your past work (e.g., shoots, shows)
                                </label>
                                <Input value={q1} onChange={setQ1} />
                            </div>
                            <div className="space-y-1">
                                <label className="text-sm font-medium text-gray-800 flex items-center gap-2">
                                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gray-200 text-xs font-semibold text-gray-700">2</span>
                                    What interests you in this audition or project?
                                </label>
                                <Input value={q2} onChange={setQ2} />
                            </div>
                            <div className="space-y-1">
                                <label className="text-sm font-medium text-gray-800 flex items-center gap-2">
                                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gray-200 text-xs font-semibold text-gray-700">3</span>
                                    Share links to your social profiles or portfolio
                                </label>
                                <Input value={q3} onChange={setQ3} />
                            </div>
                            <div className="space-y-1">
                                <label className="text-sm font-medium text-gray-800 flex items-center gap-2">
                                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gray-200 text-xs font-semibold text-gray-700">4</span>
                                    Are you comfortable with traveling to attend the shoot?
                                </label>
                                <Input value={q4} onChange={setQ4} />
                            </div>
                            <div className="space-y-1">
                                <label className="text-sm font-medium text-gray-800 flex items-center gap-2">
                                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gray-200 text-xs font-semibold text-gray-700">5</span>
                                    Any other questions or details you’d like to share?
                                </label>
                                <Input value={q5} onChange={setQ5} />
                            </div>
                        </div>

                        {/* Uploads */}
                        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">Upload Photos</h3>
                                <div className="mt-3">
                                    <Dropzone icon={<AiOutlineFileText />} text="Image upload" hint={uploadHint} multiple accept="image/*" onChange={() => { }} />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">Upload Videos walk or intro</h3>
                                <div className="mt-3">
                                    <Dropzone icon={<AiOutlineFileText />} text="Video upload" hint={uploadHint} multiple accept="video/*" onChange={() => { }} />
                                </div>
                            </div>
                        </div>
                        

                        {/* CTA */}
                        <div className="mt-10 flex justify-center">
                            <GradientButton  href="/model-hub" label="Host" width="w-[200px] h-[44px]" colors="bg-blue-900 text-white hover:opacity-90" />
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-3">
                        <div className="sticky top-4 rounded-2xl border border-gray-200 bg-white p-4">
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
        </div>
    );
}
