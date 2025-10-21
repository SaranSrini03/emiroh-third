"use client";

import {
  usePathname,
  Link,
  FaUsers,
  FaBoxOpen,
  FaMoneyBillWave,
  FaCode,
  MdOutlineAttachMoney,
  AiOutlineFileText,
  BsClipboardData,
  useState,
  FiMenu,
  FiX
} from "@/lib/imports";

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Influencers", icon: <FaUsers size={18} />, href: "/p/beauty-product/influencers" },
    { name: "Product and Content", icon: <FaBoxOpen size={18} />, href: "/p/beauty-product/product-content" },
    { name: "Budget allocations", icon: <MdOutlineAttachMoney size={18} />, href: "/p/beauty-product/budget" },
    { name: "Agree Terms & condition", icon: <AiOutlineFileText size={18} />, href: "/p/beauty-product/terms" },
    { name: "Product sending (If need)", icon: <FaBoxOpen size={18} />, href: "/p/beauty-product/product-sending" },
    { name: "Review", icon: <FaCode size={18} />, href: "/p/beauty-product/review" },
    { name: "Campaign Monitoring", icon: <BsClipboardData size={18} />, href: "/p/beauty-product/campaign" },
    { name: "Payment Management", icon: <FaMoneyBillWave size={18} />, href: "/p/beauty-product/payment" },
  ];

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={toggleSidebar}
        className={`md:hidden fixed z-50 bg-black text-white p-2 rounded-md shadow-md transition-all duration-300 ${
          isOpen ? 'left-60 transform -translate-x-10' : 'left-6'
        }`}
        style={{ top: '5.75rem' }} // top-23 equivalent (5.75rem)
        aria-label="Toggle menu"
      >
        {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed md:relative inset-y-0 left-0 z-40
        transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:translate-x-0 transition-transform duration-300 ease-in-out
        w-64 bg-white border-r min-h-screen p-4
      `}>
        <div className="pt-2 md:pt-0">
          <ul className="space-y-3 md:mt-0 mt-30">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 p-2 rounded-lg transition-colors duration-200 ${
                    pathname === item.href
                      ? "bg-blue-100 text-blue-600"
                      : "hover:bg-gray-100 text-gray-600"
                  }`}
                >
                  <span>{item.icon}</span>
                  <span className="text-sm md:text-base">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}