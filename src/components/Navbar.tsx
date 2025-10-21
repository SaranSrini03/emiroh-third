"use client"
import { useState } from "react";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center justify-between w-full">
            <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
              <a href="#" className="hover:text-gray-900">Home</a>
              <div className="relative group">
                <button className="flex items-center gap-1 hover:text-gray-900">
                  Services
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
                <div className="absolute hidden group-hover:block w-48 bg-white border border-gray-100 rounded-lg shadow-lg py-2 mt-2">
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-50">Web Development</a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-50">Mobile Apps</a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-50">Cloud Solutions</a>
                </div>
              </div>
              <div className="relative group">
                <button className="flex items-center gap-1 hover:text-gray-900">
                  Find Influencer
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
                <div className="absolute hidden group-hover:block w-48 bg-white border border-gray-100 rounded-lg shadow-lg py-2 mt-2">
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-50">Fashion</a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-50">Beauty</a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-50">Lifestyle</a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-50">Tech</a>
                </div>
              </div>
              <a href="#" className="hover:text-gray-900">Pro market</a>
              <a href="#" className="hover:text-gray-900">Plans</a>
              <a href="#" className="hover:text-gray-900">About us</a>
            </nav>
            
            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"} />
              </svg>
            </button>

            <div className="hidden md:flex items-center gap-3">
              <Button label="Sign Up" height={36} color="#ffffff" bgColor="#ef4444" className="px-4 text-sm font-medium rounded-full hover:opacity-90" />
              <Button label="Log In" height={36} color="#ffffff" bgColor="#ef4444"  className="px-4 text-sm font-medium hover:bg-gray-50 rounded-full" />
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className="space-y-4 py-4 px-2">
            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">Home</a>
            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">Services</a>
            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">Find a influencer</a>
            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">Pro market</a>
            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">Plans</a>
            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">About us</a>
            <div className="flex flex-col gap-2 pt-4">
              <Button label="Sign Up" height={36} color="#ffffff" bgColor="#ef4444" className="w-full justify-center text-sm font-medium rounded-full hover:opacity-90" />
              <Button label="Log In" height={36} color="#ffffff" bgColor="#ef4444"  className="w-full justify-center text-sm font-medium hover:bg-gray-50 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
