"use client";
import React from "react";

type Row = {
  influencer: { avatar: string; name: string; username: string };
  product: string;
  productId: string;
  conversions: number;
  conversionRate: string;
  revenue: string;
  avgOrder: string;
  status: string;
  payout: boolean;
  lastUpdate: string;
};

export default function PayoutsTable({ rows, search }: { rows: Row[]; search?: string }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-x-auto">
      <table className="min-w-full whitespace-nowrap">
        <thead>
          <tr className="text-gray-500 text-xs bg-gray-50">
            <th className="px-6 py-4 text-left font-semibold">Influencer</th>
            <th className="px-6 py-4 text-left font-semibold">Product</th>
            <th className="px-6 py-4 text-left font-semibold">Conversions</th>
            <th className="px-6 py-4 text-left font-semibold">Conversion Rate</th>
            <th className="px-6 py-4 text-left font-semibold">Revenue</th>
            <th className="px-6 py-4 text-left font-semibold">Avg Order Value</th>
            <th className="px-6 py-4 text-left font-semibold">Status</th>
            <th className="px-6 py-4 text-left font-semibold">Last Update</th>
            <th className="px-6 py-4 text-left font-semibold">Payout</th>
          </tr>
        </thead>
        <tbody>
          {rows
            .filter((row) => {
              if (!search) return true;
              const q = search.toLowerCase();
              return (
                row.influencer.name.toLowerCase().includes(q) ||
                row.influencer.username.toLowerCase().includes(q) ||
                row.product.toLowerCase().includes(q)
              );
            })
            .map((row, idx) => (
              <tr key={idx} className="border-t last:border-b bg-white hover:bg-blue-50 transition">
                <td className="px-6 py-4 flex items-center gap-3">
                  <img src={row.influencer.avatar} alt={row.influencer.name} className="w-8 h-8 rounded-full" />
                  <div>
                    <div className="font-semibold text-sm text-gray-800">{row.influencer.name}</div>
                    <div className="text-xs text-gray-400">@{row.influencer.username}</div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  {row.product} <span className="text-xs text-gray-400 block">{row.productId}</span>
                </td>
                <td className="px-6 py-4 text-sm text-blue-700 font-bold">{row.conversions}</td>
                <td className="px-6 py-4 text-sm">{row.conversionRate}</td>
                <td className="px-6 py-4 text-sm">{row.revenue}</td>
                <td className="px-6 py-4 text-sm">{row.avgOrder}</td>
                <td className="px-6 py-4">
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${row.status === "Pending" ? "bg-yellow-100 text-yellow-800" : "bg-green-100 text-green-800"}`}>
                    {row.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-xs text-gray-500">{row.lastUpdate}</td>
                <td className="px-6 py-4">
                  {row.payout ? (
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-xs font-medium hover:bg-blue-700 transition">Pay Out</button>
                  ) : (
                    <span className="text-xs text-gray-400">—</span>
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}


