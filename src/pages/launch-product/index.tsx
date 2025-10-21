"use client";
import React from "react";
import { FilterButton, Pagination, SecondaryNavbar } from "@/lib/imports";
import AffiliateHeader from "@/components/layout/AffiliateHeader";

import ProductCard from "@/components/ProductCard";
import { useState } from "react";

type Product = {
    id: number;
    name: string;
    price: string;
    img: string;
};

const PRODUCTS: Product[] = [
    { id: 1, name: "Men Printed T-Shirt", price: "$590", img: "/images/launch-product/image1.jpg" },
    { id: 2, name: "DJI Phantom 4 Multispectral", price: "$590", img: "/images/launch-product/image2.jpg" },
    { id: 3, name: "DJI Phantom 4 Pro", price: "$590", img: "/images/launch-product/image3.jpg" },
    { id: 4, name: "DJI Phantom 4 Max", price: "$590", img: "/images/launch-product/image4.jpg" },
    { id: 5, name: "Men Printed T-Shirt", price: "$590", img: "/images/launch-product/image1.jpg" },
    { id: 6, name: "Men Printed T-Shirt", price: "$590", img: "/images/launch-product/image2.jpg" },
    { id: 7, name: "Men Printed T-Shirt", price: "$590", img: "/images/launch-product/image3.jpg" },
    { id: 8, name: "Men Printed T-Shirt", price: "$590", img: "/images/launch-product/image4.jpg" },
];

export default function ProductListPage() {
    const [query, setQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const pageSize = 8;
    const filtered = PRODUCTS.filter((p) => p.name.toLowerCase().includes(query.toLowerCase()));
    const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
    const start = (currentPage - 1) * pageSize;
    const pageItems = filtered.slice(start, start + pageSize);

    return (
        <div className="px-4 md:px-8 py-6 h-full bg-white">
            {/* Top search + chips */}
            <SecondaryNavbar />
            <AffiliateHeader title="Launch Product" showSmartMatching={false} />


                {/* Title */}

                {/* Subheader row */}
            <div className=" flex items-center justify-between p-8 ">
                <p className="text-lg text-gray-700">Campaign Name</p>
                <FilterButton />
            </div>

            {/* Listed products (no space between cards) */}
            <div className=" p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 ">
                {pageItems.map((item) => (
                    <div key={item.id} className="m-0 p-10 border border-gray-200 hover:bg-gray-50 transition-all">
                        <ProductCard
                            id={item.id}
                            name={item.name}
                            price={item.price}
                            img={item.img}
                        />
                    </div>
                ))}
            </div>
                    

            {/* Pagination */}
            <div className="mt-6">
                <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
            </div>
        </div>
    );
}
