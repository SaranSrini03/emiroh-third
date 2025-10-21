"use client";
import { ArrowUp, ArrowDown } from "lucide-react";

interface StatCard {
  value: string;
  change: string;
  label: string;
  bgColor?: string;      
  textColor?: string;    
  changeColor?: string;  
}

interface StatsCardsProps {
  stats?: StatCard[];
}

const defaultStats: StatCard[] = [
  { value: "$5,000", change: "+6.08%", label: "Revenue", bgColor: "bg-gray-100", textColor: "text-gray-900", changeColor: "text-green-600" },
];

export default function StatsCards({ stats = defaultStats }: StatsCardsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6 mb-8">
      {stats.map((stat, index) => {
        const isPositive = stat.change.startsWith("+");
        return (
          <div key={index} className={`${stat.bgColor} p-4 md:p-6 rounded-lg`}>
            <div className="text-gray-600 text-sm md:text-md mb-2">{stat.label}</div>
            <div className={`text-xl md:text-2xl font-bold mb-1 ${stat.textColor}`}>{stat.value}</div>
            <div className={`flex items-center gap-1 text-xs md:text-sm ${stat.changeColor}`}>
              {isPositive ? <ArrowUp className="w-3 h-3 md:w-4 md:h-4" /> : <ArrowDown className="w-3 h-3 md:w-4 md:h-4" />}
              <span>{stat.change}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}