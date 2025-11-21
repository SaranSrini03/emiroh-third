// view-more page inspired by the provided UI
import React, { useState, ChangeEvent, FormEvent } from "react";
import { FiUpload, FiCheck, FiX } from "react-icons/fi";
import GradientButton from "@/components/buttons/GradientButton";
import AppliedByCard, { AppliedByCardProps } from "@/components/cards/AppliedByCard";

const highlightDetails = [
  { icon: "📍", text: "Shooting Location Example: Mumbai, Studio 14" },
  { icon: "🎥", text: "Virtual intro round or physical audition after shortlisted" },
  { icon: "📅", text: "Shoot Date(s) June 5–7, 2025" },
  { icon: "🗓️", text: "Rehearsal/Pre-meeting Date June 6–7, 2025" },
  { icon: "⏰", text: "Time 10 AM to 4 PM" },
  { icon: "👗", text: "Role Female Model – Casualwear shoot" },
  { icon: "👙", text: "Content – Women’s innerwear and top & bottom shoot" },
  { icon: "💰", text: "Compensation ₹10,000 + travel allowance" },
  { icon: "🏷️", text: "Brand Type: Clothing Brand" },
  { icon: "📸", text: "Deliverables: 20 photos, 2 short videos" },
  { icon: "💄", text: "Wardrobe, Hair & Makeup: Provided" },
  { icon: "⏳", text: "Deadline to Apply April 30, 2025" },
];

const eligibilityCriteria = [
  "Gender: Female",
  "Age: 18–26",
  "Height: 5'6\"+",
  "Skin Tone: All inclusive",
  "Body Type: —",
  "Prior Experience: Not mandatory",
  "Location: Preferably Mumbai-based",
];

const viewMoreHero: AppliedByCardProps = {
  name: "ABC Lifestyle Pvt Ltd",
  username: "ABCLifestyle",
  description: "Casting team for the Elle Collection 2025 · Posted on Jan 25, 2025",
  buttonText: "Launch Product",
  showButton: false,
};

const ViewMorePage: React.FC = () => {
  const [photos, setPhotos] = useState<File[]>([]);
  const [videos, setVideos] = useState<File[]>([]);
  const [form, setForm] = useState<Record<string, string>>({
    height: "5.7 feet",
    weight: "80kg",
    bustChest: "36",
    waist: "24",
    bottomHips: "35",
    eyeColor: "brown",
    dressSize: "XS",
    shoeSize: "5.9",
    hairLength: "Mid back",
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
    setter([...current, ...Array.from(e.target.files)]);
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
    console.log("form", form);
    console.log("photos", photos);
    console.log("videos", videos);
    alert("Application submitted (demo).");
  };

  return (
    <div className="min-h-screen bg-white py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 space-y-6">
            <section className="bg-white rounded-2xl  p-8 space-y-6">
              <div>
                <h1 className="text-2xl font-semibold text-gray-900">Overview</h1>
                <p className="text-sm text-gray-600 mt-2">
                  This casting call is a real-time opportunity for models to be part of an upcoming brand campaign.
                  Open to fresh and experienced talent, the casting aims to find faces that match the campaign&apos;s
                  theme and energy. Selected models will work with professional teams, gain exposure, and build their portfolio.
                </p>
              </div>

              <div className="space-y-3">
                {highlightDetails.map(detail => (
                  <div key={detail.text} className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="text-lg leading-none">{detail.icon}</span>
                    <p>{detail.text}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white rounded-2xl  p-8 space-y-6">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Eligibility Criteria</h2>
                <div className="mt-4 space-y-3">
                  {eligibilityCriteria.map(item => (
                    <div key={item} className="flex items-center gap-3 text-sm text-gray-700">
                      <FiCheck className="text-emerald-600" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <form onSubmit={handleSubmit} className="bg-white rounded-2xl  p-8 space-y-6">
              <h2 className="text-lg font-semibold text-gray-900">Upload Model Portfolio</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { label: "Height", name: "height", placeholder: "e.g., 5.7 feet" },
                  { label: "Weight", name: "weight", placeholder: "e.g., 60kg" },
                  { label: "Bust/Chest", name: "bustChest", placeholder: "e.g., 36" },
                  { label: "Waist", name: "waist", placeholder: "e.g., 24" },
                  { label: "Bottom/Hips", name: "bottomHips", placeholder: "e.g., 36" },
                  { label: "Eye color", name: "eyeColor", placeholder: "e.g., brown" },
                  { label: "Dress size", name: "dressSize", placeholder: "e.g., XS" },
                  { label: "Shoe size", name: "shoeSize", placeholder: "e.g., 5.9" },
                  { label: "Length of hair", name: "hairLength", placeholder: "e.g., mid back" },
                ].map(field => (
                  <div key={field.name}>
                    <label className="block text-xs font-semibold text-gray-600">{field.label}</label>
                    <input
                      name={field.name}
                      value={form[field.name] ?? ""}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      className="mt-1 w-full border border-gray-200 rounded-md p-2 text-sm"
                    />
                  </div>
                ))}
                <div className="sm:col-span-2 lg:col-span-3">
                  <label className="block text-xs font-semibold text-gray-600">Portfolio Link</label>
                  <input
                    name="portfolioLink"
                    value={form.portfolioLink}
                    onChange={handleChange}
                    placeholder="https://"
                    className="mt-1 w-full border border-gray-200 rounded-md p-2 text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <p className="text-sm font-semibold text-gray-700">Upload Photos</p>
                  <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl p-6 text-center cursor-pointer bg-gray-50">
                    <FiUpload className="w-8 h-8 text-gray-500" />
                    <p className="text-sm text-gray-600 mt-2">Drag & drop here or browse files</p>
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={(e) => handleFileUpload(e, setPhotos, photos)}
                      className="hidden"
                    />
                  </label>
                  {photos.length > 0 && (
                    <div className="space-y-2 text-xs text-gray-600">
                      <p>Selected ({photos.length})</p>
                      {photos.map((photo, index) => (
                        <div key={photo.name + index} className="flex items-center justify-between bg-gray-100 px-3 py-2 rounded">
                          <span className="truncate">{photo.name}</span>
                          <button
                            type="button"
                            onClick={() => removeFile(index, setPhotos, photos)}
                            className="text-red-500"
                          >
                            <FiX />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="space-y-3">
                  <p className="text-sm font-semibold text-gray-700">Upload Videos (walk or intro)</p>
                  <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl p-6 text-center cursor-pointer bg-gray-50">
                    <FiUpload className="w-8 h-8 text-gray-500" />
                    <p className="text-sm text-gray-600 mt-2">Drag & drop here or browse files</p>
                    <input
                      type="file"
                      accept="video/*"
                      multiple
                      onChange={(e) => handleFileUpload(e, setVideos, videos)}
                      className="hidden"
                    />
                  </label>
                  {videos.length > 0 && (
                    <div className="space-y-2 text-xs text-gray-600">
                      <p>Selected ({videos.length})</p>
                      {videos.map((video, index) => (
                        <div key={video.name + index} className="flex items-center justify-between bg-gray-100 px-3 py-2 rounded">
                          <span className="truncate">{video.name}</span>
                          <button
                            type="button"
                            onClick={() => removeFile(index, setVideos, videos)}
                            className="text-red-500"
                          >
                            <FiX />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <GradientButton
                type="submit"
                label="Apply"
                colors="bg-gradient-to-r from-blue-600 to-blue-800 text-white"
                width="w-full h-[48px]"
                className="text-base"
              />
            </form>
          </div>

          <div className="w-full lg:w-80">
            <AppliedByCard {...viewMoreHero} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewMorePage;

