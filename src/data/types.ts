import { StaticImport } from "@/lib/imports";

// ===========================
// Dashboard Item Interface
// ===========================
export interface DashboardItem {
  id: string;                 // Unique ID for the row
  name: string;               // Influencer Name
  username: string;           // Influencer username
  link: string;               // Product Link
  productId: string;          // Product ID
  totalConvertio: number;     // Total Convertio
  totalClicks: number;        // Total Clicks
  avgConversion: string;      // Avg Conversion (e.g., "12%")
  revenueGenerated: string;   // Revenue Generated (e.g., "$1,200")
  totalCommission: string;    // Total Commission (e.g., "$180")
  avatar?: StaticImport;      // Optional influencer image
  isSelected?: boolean;       // Optional: is row selected (for table actions)
  isHighlighted?: boolean;    // Optional: highlight row (e.g., high performance)
  createdAt?: string;         // Optional: when the item was added
}

// ===========================
// Other Table Items (for future use)
// ===========================
export interface CampaignItem {
  id: string;
  name: string;
  type: string;
  budget: string;
  status: "active" | "paused" | "completed";
  clicks: number;
  conversions: number;
  revenue: string;
}

// ===========================
// Table Type
// ===========================
export type TableType = "dashboard" | "campaigns";

// ===========================
// Table Row Item
// ===========================
export type TableRowItem = DashboardItem | CampaignItem;
