"use client";

import { useState, ChangeEvent } from "react";
import { AiOutlineClose } from "react-icons/ai";
import GradientButton from "../buttons/GradientButton";

interface Props {
    onClose: () => void;
    onSubmit: (data: any) => void;
}

export default function CreateCampaignPopup({ onClose, onSubmit }: Props) {
    const [form, setForm] = useState({
        city: "",
        state: "",
        country: "",
        niche: "",
        audienceAge: "",
        audienceGender: "",
        conversionRate: "",
        sensuality: "",
        productName: "",
        productNiche: "",
        productDescription: "",
        websiteUrl: "",
        productLink: "",
        campaignName: "",
        numberOfInfluencers: 0,
        startDate: "",
        endDate: "",
        budget: "",
        commission: "",
        socialLink: "",
        image: null as File | null,
        smartMatch: false,
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target as HTMLInputElement | HTMLSelectElement;
        if (type === "checkbox") {
            const checked = (e.target as HTMLInputElement).checked;
            setForm({ ...form, [name]: checked });
        } else {
            setForm({ ...form, [name]: value });
        }
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setForm({ ...form, image: e.target.files[0] });
        }
    };

    const handleSubmit = () => {
        console.log("Form submitted:", form);
        onClose();
    };

    return (

        <div className="fixed inset-0 bg-gradient-to-br from-black/15 to-black/5 backdrop-blur-3xl border border-black/10 shadow-2xl flex justify-center items-start pt-10 z-50 overflow-auto">
            <div className="bg-white p-6 rounded-xl w-full max-w-2xl shadow-lg relative">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors"
                >
                    <AiOutlineClose size={20} />
                </button>

                <h2 className="text-xl font-semibold mb-6 text-black">Create a Campaign</h2>

                {/* Toggle Switch */}
                <div className="flex justify-between items-center mb-6 p-3 bg-gray-50 rounded-lg">
                    <span className="text-black font-medium">Smart Match</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            name="smartMatch"
                            checked={form.smartMatch}
                            onChange={handleChange}
                            className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer 
              peer-checked:after:translate-x-full peer-checked:after:border-white 
              after:content-[''] after:absolute after:top-[2px] after:left-[2px] 
              after:bg-white after:border-gray-300 after:border after:rounded-full 
              after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600">
                        </div>
                    </label>
                </div>

                {/* Smart Match Extra Fields */}
                {form.smartMatch && (
                    <div className="grid grid-cols-2 gap-4 mb-4 ">
                        <input
                            type="text"
                            placeholder="City"
                            name="city"
                            value={form.city}
                            onChange={handleChange}
                            className="border border-gray-300 p-3 rounded-lg w-full text-black bg-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <input
                            type="text"
                            placeholder="State"
                            name="state"
                            value={form.state}
                            onChange={handleChange}
                            className="border border-gray-300 p-3 rounded-lg w-full text-black bg-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <input
                            type="text"
                            placeholder="Country"
                            name="country"
                            value={form.country}
                            onChange={handleChange}
                            className="border border-gray-300 p-3 rounded-lg w-full text-black bg-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <input
                            type="text"
                            placeholder="Niche"
                            name="niche"
                            value={form.niche}
                            onChange={handleChange}
                            className="border border-gray-300 p-3 rounded-lg w-full text-black bg-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <input
                            type="text"
                            placeholder="Audience Age"
                            name="audienceAge"
                            value={form.audienceAge}
                            onChange={handleChange}
                            className="border border-gray-300 p-3 rounded-lg w-full text-black bg-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <input
                            type="text"
                            placeholder="Audience Gender"
                            name="audienceGender"
                            value={form.audienceGender}
                            onChange={handleChange}
                            className="border border-gray-300 p-3 rounded-lg w-full text-black bg-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <input
                            type="text"
                            placeholder="Conversion Rate"
                            name="conversionRate"
                            value={form.conversionRate}
                            onChange={handleChange}
                            className="border border-gray-300 p-3 rounded-lg w-full text-black bg-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <input
                            type="text"
                            placeholder="Sensuality"
                            name="sensuality"
                            value={form.sensuality}
                            onChange={handleChange}
                            className="border border-gray-300 p-3 rounded-lg w-full text-black bg-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>
                )}

                {/* Main Form */}
                <div className="grid grid-cols-2 gap-4">
                    <input
                        type="text"
                        placeholder="Product name"
                        name="productName"
                        value={form.productName}
                        onChange={handleChange}
                        className="border border-gray-300 p-3 rounded-lg w-full text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <input
                        type="text"
                        placeholder="Product niche"
                        name="productNiche"
                        value={form.productNiche}
                        onChange={handleChange}
                        className="border border-gray-300 p-3 rounded-lg w-full text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>

                <input
                    type="text"
                    placeholder="Product Description"
                    name="productDescription"
                    value={form.productDescription}
                    onChange={handleChange}
                    className="border border-gray-300 p-3 rounded-lg w-full mt-4 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                    type="text"
                    placeholder="Website URL"
                    name="websiteUrl"
                    value={form.websiteUrl}
                    onChange={handleChange}
                    className="border border-gray-300 p-3 rounded-lg w-full mt-4 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                    type="text"
                    placeholder="Product Link"
                    name="productLink"
                    value={form.productLink}
                    onChange={handleChange}
                    className="border border-gray-300 p-3 rounded-lg w-full mt-4 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <select
                    name="campaignName"
                    value={form.campaignName}
                    onChange={handleChange}
                    className="border border-gray-300 p-3 rounded-lg w-full mt-4 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                    <option value="" className="text-gray-500">Campaign Name</option>
                    <option value="Retail" className="text-black">Retail</option>
                    <option value="Tech" className="text-black">Tech</option>
                    <option value="Fashion" className="text-black">Fashion</option>
                </select>

                <input
                    type="number"
                    placeholder="Number of influencers"
                    name="numberOfInfluencers"
                    value={form.numberOfInfluencers}
                    onChange={handleChange}
                    className="border border-gray-300 p-3 rounded-lg w-full mt-4 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />

                <div className="grid grid-cols-2 gap-4 mt-4">
                    <input
                        type="date"
                        name="startDate"
                        value={form.startDate}
                        onChange={handleChange}
                        className="border border-gray-300 p-3 rounded-lg w-full text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <input
                        type="date"
                        name="endDate"
                        value={form.endDate}
                        onChange={handleChange}
                        className="border border-gray-300 p-3 rounded-lg w-full text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>

                <input
                    type="text"
                    placeholder="Budget"
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                    className="border border-gray-300 p-3 rounded-lg w-full mt-4 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                    type="text"
                    placeholder="Per-product commission %"
                    name="commission"
                    value={form.commission}
                    onChange={handleChange}
                    className="border border-gray-300 p-3 rounded-lg w-full mt-4 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                    type="text"
                    placeholder="Social media link"
                    name="socialLink"
                    value={form.socialLink}
                    onChange={handleChange}
                    className="border border-gray-300 p-3 rounded-lg w-full mt-4 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />

                <div className="mt-4">
                    <label className="block mb-2 text-black font-medium">Upload Image</label>
                    <input
                        type="file"
                        onChange={handleFileChange}
                        className="mb-2 w-full text-black file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-red-700 hover:file:bg-blue-100"
                    />
                    {form.image && (
                        <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                            <span className="text-black">{form.image.name}</span>
                            <button
                                onClick={() => setForm({ ...form, image: null })}
                                className="text-red-500 hover:text-red-700 font-bold"
                            >
                                ×
                            </button>
                        </div>
                    )}
                </div>

                <GradientButton
                    onClick={handleSubmit}
                    label="Launch Campaign"
                    width="w-full"
                    variant="vertical" // or "vertical"
                    className="mt-6 font-medium"
                />
            </div>
        </div>
    );
}
