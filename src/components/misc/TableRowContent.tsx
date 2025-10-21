"use client";
import { TableCell, Checkbox, Image, Badge } from "@/lib/imports";
import { DashboardItem } from "@/data/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TableRowContent({ item }: { item: DashboardItem }) {
  const pathname = usePathname() || "";

  // Determine dynamic base path
  const basePath = pathname.startsWith("/hub/payments") ? "/p" : "/u";

  return (
    <>
      {/* Checkbox */}
      <TableCell className="p-3">
        <Checkbox />
      </TableCell>

      {/* Influencer Name */}
      <TableCell className="p-3">
        <div className="flex items-center gap-3">
          {item.avatar && (
            <div className="w-10 h-10 rounded-full overflow-hidden relative flex-shrink-0">
              <Image src={item.avatar} alt={item.name} fill className="object-cover" />
            </div>
          )}
          <div className="flex flex-col justify-center">
            <Link
              href={`${basePath}/${item.username}`}
              className="font-medium text-gray-900 text-left hover:underline"
            >
              {item.name}
            </Link>
            <span className="text-gray-500 text-xs">{item.username}</span>
          </div>
        </div>
      </TableCell>

      {/* Product Link */}
      <TableCell className="p-3 text-left">
        <Badge label="Link" color="text-green-600" bgColor="bg-green-100" href={item.link} />
      </TableCell>

      {/* Product ID */}
      <TableCell className="p-3 text-left">{item.productId}</TableCell>

      {/* Total Convertio */}
      <TableCell className="p-3 text-left">{item.totalConvertio}</TableCell>

      {/* Total Clicks */}
      <TableCell className="p-3 text-left">{item.totalClicks}</TableCell>

      {/* Avg Conversion */}
      <TableCell className="p-3 text-left">{item.avgConversion}</TableCell>

      {/* Revenue Generated */}
      <TableCell className="p-3 text-left">{item.revenueGenerated}</TableCell>

      {/* Total Commission */}
      <TableCell className="p-3 text-left">{item.totalCommission}</TableCell>
    </>
  );
}
