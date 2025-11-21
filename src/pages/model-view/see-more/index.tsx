// AuditionPage.tsx
import React, { useState, ChangeEvent, FormEvent } from "react";
import { FiUpload, FiX, FiCheck } from "react-icons/fi";
import GradientButton from "@/components/buttons/GradientButton";
import AppliedByCard from "@/components/cards/AppliedByCard";

const UPLOADED_IMAGE = "/mnt/data/8da94944-1216-492a-b20d-2b49e554b868.jpg";

const AuditionPage: React.FC = () => {
  // Simple form state (expand as needed)
  const [photos, setPhotos] = useState<File[]>([]);
  const [videos, setVideos] = useState<File[]>([]);
  const [form, setForm] = useState<Record<string, string>>({
    height: "",
    weight: "",
    bustChest: "",
    waist: "",
    bottomHips: "",
    eyeColor: "",
    dressSize: "",
    shoeSize: "",
    hairLength: "",
    portfolioLink: "",
    specialSkills: "",
    brandsWorkedWith: "",
    availability: "",
    travelComfort: "",
    tattoosPiercings: "",
    themes: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (
    e: ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<File[]>>,
    current: File[]
  ) => {
    if (!e.target.files) return;
    const added = Array.from(e.target.files);
    setter([...current, ...added]);
  };

  const removeFile = (
    index: number,
    setter: React.Dispatch<React.SetStateAction<File[]>>,
    current: File[]
  ) => {
    const copy = [...current];
    copy.splice(index, 1);
    setter(copy);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // For demo, print to console. Hook to API as needed.
    console.log("Form:", form);
    console.log("Photos:", photos);
    console.log("Videos:", videos);
    alert("Submitted (demo). Check console.");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden">
        <div className="flex items-start gap-8 p-8">
          {/* LEFT: main content */}
          <div className="flex-1 min-w-0">
            {/* Header area */}
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-lg font-medium text-gray-800 mb-3">Overview</h2>

                <p className="text-sm text-gray-500 mt-1">
                  Are you a talented model looking for your next big break? Were excited to invite you to our live virtual casting audition for <span className="font-medium">[Project Title]</span>.
                </p>
              </div>

              {/* Right-top small meta (keeps space for created card but it's in right column) */}
              <div className="hidden md:block" />
            </div>

            {/* Audition details */}
            <div className="mt-6">
              <h2 className="text-lg font-medium text-gray-800 mb-3">Audition Details</h2>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li><span className="font-medium">Date:</span> [Date]</li>
                <li><span className="font-medium">Time:</span> [Time]</li>
                <li><span className="font-medium">Platform:</span> [Platform]</li>
                <li><span className="font-medium">Duration:</span> [Duration]</li>
              </ul>
            </div>

            <div className="mt-6">
              <h2 className="text-lg font-medium text-gray-800 mb-3">What We Expect</h2>
              <p className="text-gray-700">
                A live, interactive audition with our casting team — introduce yourself, showcase your portfolio and be prepared to answer a few questions about experience and availability.
              </p>
            </div>

            <div className="mt-6">
              <h2 className="text-lg font-medium text-gray-800 mb-3">How to Join</h2>
              <ol className="list-decimal pl-5 text-gray-700 space-y-1">
                <li>Click the "Apply" button below to register</li>
                <li>Fill out the registration form with details and upload headshot & resume</li>
                <li>You'll receive a confirmation email with the Zoom link</li>
              </ol>
            </div>

            {/* Eligibility */}
            <div className="mt-6 bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-3">Eligibility Criteria</h3>

              <div className="space-y-3">
                {[
                  "Gender: Female",
                  "Age: 18–26",
                  "Height: 5'6\"+",
                  "Skin Tone: All inclusive",
                  "Body Type: —",
                  "Prior Experience: Not mandatory",
                  "Location: Preferably Mumbai-based",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="flex-shrink-0 mt-0.5">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-green-100 text-green-700 rounded-full">
                        <FiCheck className="w-4 h-4" />
                      </span>
                    </span>
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <h3 className="text-lg font-medium text-gray-800">Upload Model Portfolio</h3>

              {/* grid of inputs similar to screenshot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Left column inputs */}
                <div>
                  <label className="block text-xs font-medium text-gray-600">Height</label>
                  <input
                    name="height"
                    value={form.height}
                    onChange={handleChange}
                    className="mt-1 w-full border rounded-md p-2 text-sm"
                    placeholder="e.g., 5.7 foot"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-600">Weight</label>
                  <input
                    name="weight"
                    value={form.weight}
                    onChange={handleChange}
                    className="mt-1 w-full border rounded-md p-2 text-sm"
                    placeholder="e.g., 60kg"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-600">Bust/Chest</label>
                  <input
                    name="bustChest"
                    value={form.bustChest}
                    onChange={handleChange}
                    className="mt-1 w-full border rounded-md p-2 text-sm"
                    placeholder="e.g., 36"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-600">Waist</label>
                  <input
                    name="waist"
                    value={form.waist}
                    onChange={handleChange}
                    className="mt-1 w-full border rounded-md p-2 text-sm"
                    placeholder="e.g., 24"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-600">Bottom/Hips</label>
                  <input
                    name="bottomHips"
                    value={form.bottomHips}
                    onChange={handleChange}
                    className="mt-1 w-full border rounded-md p-2 text-sm"
                    placeholder="e.g., 36"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-600">Eye color</label>
                  <input
                    name="eyeColor"
                    value={form.eyeColor}
                    onChange={handleChange}
                    className="mt-1 w-full border rounded-md p-2 text-sm"
                    placeholder="e.g., brown"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-600">Dress size</label>
                  <input
                    name="dressSize"
                    value={form.dressSize}
                    onChange={handleChange}
                    className="mt-1 w-full border rounded-md p-2 text-sm"
                    placeholder="e.g., XS / M"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-600">Shoe size</label>
                  <input
                    name="shoeSize"
                    value={form.shoeSize}
                    onChange={handleChange}
                    className="mt-1 w-full border rounded-md p-2 text-sm"
                    placeholder="e.g., 5.5"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-600">Length of hair</label>
                  <input
                    name="hairLength"
                    value={form.hairLength}
                    onChange={handleChange}
                    className="mt-1 w-full border rounded-md p-2 text-sm"
                    placeholder="e.g., mid back"
                  />
                </div>

                <div className="sm:col-span-2 lg:col-span-3">
                  <label className="block text-xs font-medium text-gray-600">Portfolio link</label>
                  <input
                    name="portfolioLink"
                    value={form.portfolioLink}
                    onChange={handleChange}
                    className="mt-1 w-full border rounded-md p-2 text-sm"
                    placeholder="https://"
                  />
                </div>
              </div>

              {/* Additional questions */}
              <div className="pt-4 border-t">
                <h3 className="text-lg font-medium text-gray-800 mb-3">Additional questions</h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-600">Special skills</label>
                    <input
                      name="specialSkills"
                      value={form.specialSkills}
                      onChange={handleChange}
                      className="mt-1 w-full border rounded-md p-2 text-sm"
                      placeholder="e.g., dance, acting"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-600">Brands / designers</label>
                    <input
                      name="brandsWorkedWith"
                      value={form.brandsWorkedWith}
                      onChange={handleChange}
                      className="mt-1 w-full border rounded-md p-2 text-sm"
                      placeholder="List notable brands"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-600">Availability</label>
                    <input
                      name="availability"
                      value={form.availability}
                      onChange={handleChange}
                      className="mt-1 w-full border rounded-md p-2 text-sm"
                      placeholder="Are you available for same-day / last-minute?"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-600">Travel comfort</label>
                    <input
                      name="travelComfort"
                      value={form.travelComfort}
                      onChange={handleChange}
                      className="mt-1 w-full border rounded-md p-2 text-sm"
                      placeholder="Travel radius"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-600">Tattoos / piercings</label>
                    <input
                      name="tattoosPiercings"
                      value={form.tattoosPiercings}
                      onChange={handleChange}
                      className="mt-1 w-full border rounded-md p-2 text-sm"
                      placeholder="Describe if any"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-600">Themes / roles</label>
                    <input
                      name="themes"
                      value={form.themes}
                      onChange={handleChange}
                      className="mt-1 w-full border rounded-md p-2 text-sm"
                      placeholder="Specific themes you're interested in"
                    />
                  </div>
                </div>
              </div>

              {/* Upload areas */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {/* Photos */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Upload Photos</label>
                  <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer bg-white">
                    <FiUpload className="w-8 h-8 text-gray-400" />
                    <p className="text-sm text-gray-600 mt-2">Drag and drop here or click to browse</p>
                    <p className="text-xs text-gray-400 mt-1">JPEG, PNG up to 10MB</p>
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={(e) => handleFileUpload(e, setPhotos, photos)}
                      className="hidden"
                    />
                  </label>

                  {photos.length > 0 && (
                    <div className="mt-3 space-y-2">
                      <div className="text-sm text-gray-600">Selected Photos ({photos.length})</div>
                      {photos.map((p, i) => (
                        <div key={i} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                          <div className="truncate max-w-xs text-sm text-gray-700">{p.name}</div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-green-600 flex items-center gap-1">
                              <FiCheck /> Uploaded
                            </span>
                            <button type="button" onClick={() => removeFile(i, setPhotos, photos)}>
                              <FiX className="text-red-500" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Videos */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Upload Videos (walk or intro)</label>
                  <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer bg-white">
                    <FiUpload className="w-8 h-8 text-gray-400" />
                    <p className="text-sm text-gray-600 mt-2">Drag and drop here or click to browse</p>
                    <p className="text-xs text-gray-400 mt-1">MP4, MOV up to 50MB</p>
                    <input
                      type="file"
                      accept="video/*"
                      multiple
                      onChange={(e) => handleFileUpload(e, setVideos, videos)}
                      className="hidden"
                    />
                  </label>

                  {videos.length > 0 && (
                    <div className="mt-3 space-y-2">
                      <div className="text-sm text-gray-600">Selected Videos ({videos.length})</div>
                      {videos.map((p, i) => (
                        <div key={i} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                          <div className="truncate max-w-xs text-sm text-gray-700">{p.name}</div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-green-600 flex items-center gap-1">
                              <FiCheck /> Uploaded
                            </span>
                            <button type="button" onClick={() => removeFile(i, setVideos, videos)}>
                              <FiX className="text-red-500" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Apply button */}
              <div className="flex justify-center mt-6">
                <GradientButton
                  type="submit"
                  label="Apply"
                  width="w-40"
                  variant="horizontal"
                />
              </div>
            </form>
          </div>

          {/* RIGHT: created by card */}
          <aside className="w-80 hidden lg:block">
            <div className="lg:col-span-3">
              <AppliedByCard
                name="Jane Cooper"
                username="janecooper"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."
                buttonText="Launch Product"
                showButton={false}
                
              />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default AuditionPage;


