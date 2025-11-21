// Centralized re-exports for components and UI utilities
// Import from this file to keep import lines short across the app.

export { default as Navbar } from "../components/layout/SiteNavbar";

export { default as MosaicBanner } from "../components/sections/MosaicBanner";
export { default as CastingRequests } from "../components/sections/CastingRequests";
export { default as CastingGrid } from "../components/sections/CastingGrid";
export { default as TrendingModelsSection } from "../components/sections/TrendingModels";
export { default as AffiliateHeader } from "../components/layout/AffiliateHeader";

// UI
export { default as FilterButton } from "../components/buttons/FilterButton";
export { default as GradientButton } from "../components/buttons/GradientButton";

// Cards
export { default as Card } from "../components/cards/Card";
export { default as CampaignCard } from "../components/cards/CampaignCard";
export type { Campaign } from "../components/cards/CampaignCard";
export { default as StatsCards } from "../components/cards/StatsCards";
export { default as ModelCard } from "../components/cards/ModelCard";
export type { ModelCardData } from "../components/cards/ModelCard";
export { default as ApplicationCard } from "../components/cards/ApplicationCard";
export type { Application } from "../components/cards/ApplicationCard";

// Charts
export { default as DonutPie } from "../components/charts/DonutPie";
export { default as MultiLineChart } from "../components/charts/MultiLineChart";
export { default as SimpleLineChartPayments } from "../components/charts/SimpleLineChartPayments";



// Layout
export { default as SecondaryNavbar } from "../components/layout/SecondaryNavbar";
export { default as HubNavbar } from "../components/layout/HubNavbar";
export { default as CampaignHeader } from "../components/layout/CampaignHeader";
export { default as Sidebar } from "../components/layout/Sidebar";
export { default as HubSidebar } from "../components/layout/HubSidebar";

// Misc
export { default as ApprovalLists } from "../components/misc/ApprovalLists";
export { default as Badge } from "../components/misc/Badge";
export { default as MatchBanner } from "../components/misc/MatchBanner";
export { default as Pagination } from "../components/misc/Pagination";
export { default as ReportsSection } from "../components/misc/ReportsSection";
export { default as SearchInput } from "../components/misc/SearchInput";
export { default as SearchSortBar } from "../components/misc/SearchSortBar";
export { default as StatsGrid } from "../components/misc/StatsGrid";
export { default as TableRowContent } from "../components/misc/TableRowContent";
export { default as CreateGigForm } from "../components/forms/CreateGigForm";

// Popups
export { default as CreateCampaignPopup } from "../components/popup/CreateCampaignPopup";

// Tables
export { default as AnimatedTable } from "../components/tables/AnimatedTable";
export { default as PayoutsTable } from "../components/tables/PayoutsTable";
export { default as PerformanceTable } from "../components/tables/PerformanceTable";
export { default as TableHeader } from "../components/tables/TableHeader";

// Direct access to specific/legacy layout components
export { default as SiteNavbar } from "../components/layout/SiteNavbar";
export { default as LegacyNavbar } from "../components/Navbar";
export { default as DeprecatedLayoutHeader } from "../components/layout/Header";
export { default as DeprecatedLayoutNavbar } from "../components/layout/Navbar";
export { default as DownNavBar } from "../components/layout/DownNavBar";

// Utilities and icons
export { default as React } from "react";
export { useState, useEffect, useRef } from "react";
export { usePathname } from "next/navigation";
export { default as Link } from "next/link";
export { default as Image } from "next/image";
export { motion, type Variants } from "framer-motion";



export type { ReactNode, ChangeEvent, FormEvent } from "react";

export { useRouter } from "next/router";
export { Html, Head, Main, NextScript } from "next/document";

// ─── Next.js Types ─────────────────────────────────────
export type { AppProps } from "next/app";
export type { StaticImport } from "next/dist/shared/lib/get-img-props";


// ─── Chart.js / React-ChartJS-2 ──────────────────────────
export {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
export { Line } from "react-chartjs-2";


// ─── MUI Components ────────────────────────────────────
export {
  Table,
  TableRow,
  TableContainer,
  TableHead,
  Paper,
  TableCell,
  Button,
  Checkbox,
} from "@mui/material";

// ─── Lucide Icons ──────────────────────────────────────
export {
  Edit2,
  Trash2,
  Twitter,
  Linkedin,
  Globe,
  Search,
  Bell,
  Mail,
  UserCircle,
  Menu,
  X,
  BarChart3,
  Filter,
  ChevronDown,
  ChevronRight,
  Home,
  FileText,
  CreditCard,
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  Heart,
  MoreVertical,
  Info,
  SlidersHorizontal,
  Upload,
  Send,
} from "lucide-react";

// ─── React Icons ───────────────────────────────────────
export { FaInstagram, FaUsers, FaBoxOpen, FaMoneyBillWave, FaCode } from "react-icons/fa";
export { MdOutlineAttachMoney } from "react-icons/md";
export { AiOutlineFileText } from "react-icons/ai";
export { AiOutlineClose } from "react-icons/ai";
export { BsClipboardData } from "react-icons/bs";
export { CheckCircledIcon } from "@radix-ui/react-icons";
export { FiMenu, FiX } from "react-icons/fi";
// ─── Custom Components (via components barrel) ──────────

export * from "@/components";

// ─── Data ──────────────────────────────────────────────
export { default as data } from "@/data/influencer";

// ─── Utils / Libraries ─────────────────────────────────
export { default as toast } from "react-hot-toast";
export { Toaster } from "react-hot-toast";

// ─── latest ──────────────────────────────────────
export { default as Hero } from "../components/Hero";
export { default as AffiliateBanner } from "../components/AffiliateBanner";
export { default as Features } from "../components/Features";
export { default as Features2 } from "../components/Features2"; 
export { default as Partners } from "../components/Partners";
export { default as SocialGallery } from "../components/SocialGallery";
export { default as CTABanner } from "../components/CTABanner";
export { default as ContactForm } from "../components/ContactForm";
export { default as SiteFooter } from "../components/SiteFooter";

// ─── Join Flow Components ─────────────────────────
export { default as BrandDetails } from "../components/join/BrandDetails";
export { default as InfluencerDetails } from "../components/join/InfluencerDetails";
