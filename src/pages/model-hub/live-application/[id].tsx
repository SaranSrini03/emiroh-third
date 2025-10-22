    "use client";
    import React, { useState } from "react";
    import { SecondaryNavbar } from "@/lib/imports";
    import Input from "@/components/forms/Input";
    import Field from "@/components/forms/Field";
    import GradientButton from "@/components/buttons/GradientButton";

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
      const [q1, setQ1] = useState("");
      const [q2, setQ2] = useState("");
      const [q3, setQ3] = useState("");
      const [q4, setQ4] = useState("");
      const [q5, setQ5] = useState("");


      return (
        <div className="min-h-screen bg-white">
          <SecondaryNavbar />

          <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-9">
                <div className="flex items-center justify-between">
                  <h1 className="text-2xl font-semibold text-gray-900">Overview</h1>
                </div>

                <div className="mt-4 text-gray-700 leading-7 text-sm">
                  <p>
                    Are you a talented model looking for your next big break? We’re excited to invite you to our live virtual casting audition for [Project Title]!
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

                <h2 className="mt-10 text-xl font-semibold text-gray-900">What We Expect?</h2>
                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2"><span className="mt-1 h-4 w-4 rounded-sm bg-green-500" /> A live, interactive audition with our casting team</li>
                  <li className="flex items-start gap-2"><span className="mt-1 h-4 w-4 rounded-sm bg-green-500" /> Opportunity to showcase your talent and personality</li>
                  <li className="flex items-start gap-2"><span className="mt-1 h-4 w-4 rounded-sm bg-green-500" /> Chance to be part of [Project Title] and work with our brand</li>
                </ul>

                <h2 className="mt-10 text-xl font-semibold text-gray-900">How to Join?</h2>
                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2"><span className="mt-1 h-4 w-4 rounded-sm bg-green-500" /> Click the “Apply” button below to register for the audition</li>
                  <li className="flex items-start gap-2"><span className="mt-1 h-4 w-4 rounded-sm bg-green-500" /> Fill out the registration form with your details and upload your headshot and resume</li>
                  <li className="flex items-start gap-2"><span className="mt-1 h-4 w-4 rounded-sm bg-green-500" /> We’ll send you a confirmation email with further instructions</li>
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
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-800">Height</label>
                    <Input value={height || "5 feet"} onChange={setHeight} />
                  </div>

                  <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-800">Weight</label>
                    <Input value={weight || "60kg"} onChange={setWeight} />
                  </div>

                  <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-800">Bust/Chest</label>
                    <Input value={bustChest || "32"} onChange={setBustChest} />
                  </div>

                  <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-800">Waist</label>
                    <Input value={waist || "28"} onChange={setWaist} />
                  </div>

                  <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-800">Hips</label>
                    <Input value={hips || "35"} onChange={setHips} />
                  </div>

                  <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-800">Eye color</label>
                    <Input value={eyeColor || "Brown"} onChange={setEyeColor} />
                  </div>

                  <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-800">Dress size</label>
                    <Input value={dressSize || "M"} onChange={setDressSize} />
                  </div>

                  <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-800">Shoe size</label>
                    <Input value={shoeSize || "5.0"} onChange={setShoeSize} />
                  </div>

                  <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-800">Length of hair</label>
                    <Input value={hairLength || "Mid back"} onChange={setHairLength} />
                  </div>

                  <div className="md:col-span-2 lg:col-span-3 space-y-1">
                    <label className="text-sm font-medium text-gray-800">Portfolio Link</label>
                    <Input value={q1} onChange={setQ1} placeholder="Link" />
                  </div>
                </div>



                <h2 className="mt-10 text-xl font-semibold text-gray-900">Additional questions</h2>
                <div className="mt-4 space-y-4">
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-800">Do you have any special skills (e.g., dance, acting)?</label>
                    <Input value={q1} onChange={setQ1} placeholder="Type your answer" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-800">Have you worked with any brands or done campaigns?</label>
                    <Input value={q2} onChange={setQ2} placeholder="Type your answer" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-800">Are you available for the given dates or schedule adjustments?</label>
                    <Input value={q3} onChange={setQ3} placeholder="Type your answer" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-800">Are you comfortable with traveling for callbacks or fittings?</label>
                    <Input value={q4} onChange={setQ4} placeholder="Type your answer" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-800">Share your portfolio or social links (Instagram/YouTube/TikTok)</label>
                    <Input value={q5} onChange={setQ5} placeholder="Paste links here" />
                  </div>
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


                {/* Actions intentionally omitted per spec */}
              </div>

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

