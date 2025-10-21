import { React, Image, Heart, ArrowUpRight, GradientButton } from "@/lib/imports";
import Link from "next/link";

type ProductCardProps = {
  id: number;
  name: string;
  price: string;
  img: string;
};

export default function ProductCard({ id, name, price, img }: ProductCardProps) {
  // Convert product name into URL-friendly slug (e.g. "Men Printed T-Shirt" → "men-printed-t-shirt")
  const slug = name.toLowerCase().replace(/\s+/g, "-");

  return (
    <Link
      href={`/product/${slug}`}
      className="block bg-white w-auto h-90 overflow-hidden m-0 p-0 rounded-none  transition-shadow duration-200"
    >
      <div className="relative w-full aspect-[4/3] bg-gray-100 ">
        <Image src={img} alt={name} fill className="object-cover" />
        <button
          type="button"
          aria-label="Favourite"
          onClick={(e) => e.stopPropagation()} // Prevent link trigger when heart clicked
          className="absolute top-2 right-2 rounded-full p-1.5 bg-white/80 backdrop-blur hover:bg-white cursor-pointer"
        >
          <Heart className="text-gray-400 pointer-events-none" size={16} />
        </button>
      </div>

      {/* text section */}
      <div className="p-7">
        <div className="flex items-center gap-1 text-[13px] text-gray-900">
          <span className="truncate max-w-[90%]">{name}</span>
          <ArrowUpRight className="shrink-0 text-gray-500" size={14} />
        </div>
        <div className="mt-1 flex items-center justify-between">
          <div className="text-xl font-semibold text-gray-900">{price}</div>
          <GradientButton
            label="Website"
            colors="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent hover:opacity-90"
            className="!px-3 !py-1 text-[12px] rounded-full"
            width="w-auto"
            onClick={(e: any) => e.stopPropagation()} // Prevent link trigger when button clicked
          />
        </div>
      </div>
    </Link>
  );
}
