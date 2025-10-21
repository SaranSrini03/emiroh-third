"use client";
import { Home, FileText, BarChart3, CreditCard, Menu, X } from "@/lib/imports";
import Link from "next/link";
import { useState } from "react";

interface HubSidebarProps {
  activeItem?: string;
}

export default function HubSidebar({ activeItem = "Dashboard" }: HubSidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { id: "Dashboard", label: "Dashboard", icon: Home, path: "/hub/dashboard" },
    { id: "Campaign", label: "Campaign", icon: FileText, path: "/hub/campaign" },
    { id: "Analytics", label: "Analytics", icon: BarChart3, path: "/hub/analytics" },
    { id: "Payments", label: "Payments", icon: CreditCard, path: "/hub/payments" },
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Hamburger Button */}
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-white text-black border border-gray-200 rounded-lg shadow-md"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed md:relative inset-y-0 left-0 z-40
          w-64 bg-white border-r border-gray-200 flex flex-col
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
      >
        <div className="p-6 flex-1">
          {/* Navigation Items */}
          <div className="space-y-2 mt-16 md:mt-0">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeItem === item.id;
              return (
                <Link
                  key={item.id}
                  href={item.path}
                  onClick={closeSidebar}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-colors ${
                    isActive
                      ? "bg-blue-50 text-black"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                  prefetch={false}
                >
                  <Icon size={20} />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}