"use client";

import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Twitter, Linkedin, Globe } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import ProductCard from "@/components/ProductCard";
import { SecondaryNavbar, GradientButton } from "@/lib/imports";

const PRODUCTS = [
  {
    name: "Men Printed T-Shirt",
    price: "$599",
    img: "/images/launch-product/image1.jpg",
    gallery: [
      "/images/launch-product/image1.jpg",
      "/images/launch-product/image1.jpg",
      "/images/launch-product/image1.jpg",
      "/images/launch-product/image1.jpg",
    ],
    description:
      "Your ideal pick for daily wear. Features breathable cotton, soft finish, and a relaxed fit with durable stitching. Perfect for casual outings or work-from-home comfort.",
  },
  {
    name: "DJI Phantom 4 Multispectral",
    price: "$599",
    img: "/images/launch-product/image2.jpg",
    gallery: [
      "/images/launch-product/image1.jpg",
      "/images/launch-product/image1.jpg",
      "/images/launch-product/image1.jpg",
      "/images/launch-product/image1.jpg",
    ],
    description:
      "Your ideal pick for daily wear. Features breathable cotton, soft finish, and a relaxed fit with durable stitching. Perfect for casual outings or work-from-home comfort.",
  },
  {
    name: "DJI Phantom 4 Pro",
    price: "$599",
    img: "/images/launch-product/image3.jpg",
    gallery: [
      "/images/launch-product/image1.jpg",
      "/images/launch-product/image1.jpg",
      "/images/launch-product/image1.jpg",
      "/images/launch-product/image1.jpg",
    ],
    description:
      "Your ideal pick for daily wear. Features breathable cotton, soft finish, and a relaxed fit with durable stitching. Perfect for casual outings or work-from-home comfort.",
  },
  {
    name: "DJI Phantom 4 Max",
    price: "$599",
    img: "/images/launch-product/image4.jpg",
    gallery: [
      "/images/launch-product/image1.jpg",
      "/images/launch-product/image1.jpg",
      "/images/launch-product/image1.jpg",
      "/images/launch-product/image1.jpg",
    ],
    description:
      "Your ideal pick for daily wear. Features breathable cotton, soft finish, and a relaxed fit with durable stitching. Perfect for casual outings or work-from-home comfort.",
  },
];

export default function ProductPage() {
  const router = useRouter();
  const { slug } = router.query;
  if (!slug) return null;

  const product = PRODUCTS.find(
    (p) => p.name.toLowerCase().replace(/\s+/g, "-") === slug
  );

  if (!product)
    return (
      <div className="p-10 text-center text-gray-600 bg-white">
        <h2 className="text-xl font-semibold">Product not found</h2>
        <Link href="/" className="text-blue-600 hover:underline">
          Go back
        </Link>
      </div>
    );

  const [activeImg, setActiveImg] = useState<string>(product.img);
  const [showPopup, setShowPopup] = useState(false);
  const [campaignData, setCampaignData] = useState({
    startDate: "",
    endDate: "",
    medium: "influencer",
    source: "Instagram"
  });

  const handleGenerateLink = () => {
    // Generate the affiliate link with UTM parameters
    const baseUrl = `${window.location.origin}${window.location.pathname}`;
    const affiliateLink = `${baseUrl}?ref=influencer123&utm_source=${campaignData.source.toLowerCase()}&utm_medium=${campaignData.medium}`;

    navigator.clipboard.writeText(affiliateLink);
    setShowPopup(false);
    alert("Affiliate link copied to clipboard!");
  };

  const handleInputChange = (field: string, value: string) => {
    setCampaignData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="mx-auto px-6 py-10 bg-white relative">
      {/* Top Search and Buttons */}
      <div className="pb-10">
        <SecondaryNavbar />
      </div>

      {/* Product section */}
      <div className="border-t border-r border-b border-gray-200 w-3/4 ">
        {/* Title & Generate Link */}
        <div className="flex items-center justify-between mb-6 p-10">
          <h1 className="text-3xl font-semibold text-gray-900">Product</h1>
          <GradientButton
            label="Generate Link"
            onClick={() => setShowPopup(true)}
          />
        </div>

        {/* Updated Popup */}
        {showPopup && (
          <div className="fixed inset-0 bg-black/20  bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white text-center  rounded-lg shadow-xl w-8xl text-black mx-4 border border-gray-200">
              <div className="p-10 ">
                <h2 className="text-xl font-semibold text-gray-900 mb-10">
                  Generate Your Trackable Affiliate Link
                </h2>

                {/* Product Info */}
                <div className="space-y-3 mb-6 text-left">
                  <div>
                    <span className="font-medium">Product Name:</span>
                    <span className="ml-2">Leather Sling Bao</span>
                  </div>
                  <div>
                    <span className="font-medium">Product ID:</span>
                    <span className="ml-2">P1023</span>
                  </div>
                  <div>
                    <span className="font-medium">Brand Name:</span>
                    <span className="ml-2">LBMIBOH</span>
                  </div>
                  <div>
                    <span className="font-medium">Your Commission:</span>
                    <span className="ml-2">10%</span>
                  </div>
                </div>

                <div className="border-t border-gray-200 my-4"></div>

                {/* Campaign Duration */}
                <div className="mb-6 text-left">
                  <h3 className="font-semibold text-gray-900 mb-3">Campaign Duration</h3>
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <label className="block text-sm text-gray-600 mb-1">Start Date</label>
                      <input
                        type="date"
                        value={campaignData.startDate}
                        onChange={(e) => handleInputChange("startDate", e.target.value)}
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm text-gray-600 mb-1">End Date</label>
                      <input
                        type="date"
                        value={campaignData.endDate}
                        onChange={(e) => handleInputChange("endDate", e.target.value)}
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 my-4"></div>

                {/* Custom UTM Tags */}
                <div className="mb-6 text-left">
                  <h3 className="font-semibold text-gray-900 mb-3">Custom UTM tags:</h3>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">Medium</label>
                      <input
                        type="text"
                        value={campaignData.medium}
                        onChange={(e) => handleInputChange("medium", e.target.value)}
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Influencer"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">Source</label>
                      <select
                        value={campaignData.source}
                        onChange={(e) => handleInputChange("source", e.target.value)}
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="Instagram">Instagram</option>
                        <option value="Facebook">Facebook</option>
                        <option value="YouTube">YouTube</option>
                        <option value="TikTok">TikTok</option>
                        <option value="Twitter">Twitter</option>
                        <option value="Blog">Blog</option>
                        <option value="Website">Website</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 my-4"></div>

                {/* Affiliate Link */}
                <div className="mb-6 text-left">
                  <h3 className="font-semibold text-gray-900 mb-3">Your Affiliate Link</h3>
                  <div className="bg-gray-50 border border-gray-300 rounded px-3 py-2 text-sm break-all">
                    https://yourdomain.com/p/1234?ref=influencer123&utm_source={campaignData.source.toLowerCase()}&utm_medium={campaignData.medium}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-end gap-3 pt-4">
                  <button
                    onClick={() => setShowPopup(false)}
                    className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <GradientButton
                    label="Save and Generate Link"
                    onClick={handleGenerateLink}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="rounded-lg bg-white p-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {/* Left main image - Fixed size container */}
            <div className="md:col-span-3 rounded-lg overflow-hidden aspect-square">
              <Image
                src={activeImg}
                alt={product.name}
                width={600}
                height={600}
                className="object-cover w-full h-full rounded-4xl"
                priority
              />
            </div>

            {/* Right gallery - Fixed size containers */}
            <div className="md:col-span-2 grid grid-cols-2 gap-0.5 mt-25 ">
              {product.gallery.slice(0, 4).map((g, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(g)}
                  className={`overflow-hidden transition aspect-square  ${activeImg === g
                    ? "ring-inset"
                    : "hover:opacity-90"
                    }`}
                >
                  <Image
                    src={g}
                    alt={`${product.name}-${i}`}
                    width={300}
                    height={300}
                    className="object-cover w-full h-full rounded-2xl"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Description & Buy Now */}
          <div className="mt-6 pt-6 flex flex-col md:flex-row justify-between w-200">
            <div className="md:w-3/4">
              <h2 className="text-lg font-semibold text-gray-500 mb-2">
                Product Description
              </h2>
              <p className="text-gray-600 max-w-2xl leading-relaxed">
                {product.description}
              </p>

              {/* Share buttons */}
              <div className="mt-5 flex items-center gap-3">
                <span className="text-sm text-gray-600">Share:</span>
                <div className="flex items-center gap-2">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50"
                  >
                    <Twitter size={16} />
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50"
                  >
                    <Linkedin size={16} />
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50"
                  >
                    <Globe size={16} />
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50"
                  >
                    <FaInstagram size={14} />
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-4 md:mt-0">
              <GradientButton
                label="Buy now"
                colors="bg-gray-200 text-black"
                className="shadow-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Listed Products */}
      <div className="mt-10 ">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Listed products
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {PRODUCTS.map((p, i) => (
            <ProductCard key={i} id={i} name={p.name} price={p.price} img={p.img} />
          ))}
        </div>
      </div>
    </div>
  );
}