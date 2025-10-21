import { TableCell, TableRow } from "@/lib/imports";

export default function TableHeader({ type }: { type: "dashboard" }) {
  return (
    <TableRow className="text-left">
      <TableCell className="p-3 w-1 TableCell"></TableCell>
      <TableCell className="p-3 TableCell">Influencer Name</TableCell>
      <TableCell className="p-3 TableCell">Product Link</TableCell>
      <TableCell className="p-3 TableCell">Product ID</TableCell>
      <TableCell className="p-3 TableCell">Total Convertio</TableCell>
      <TableCell className="p-3 TableCell">Total Clicks</TableCell>
      <TableCell className="p-3 TableCell">Avg Conversation</TableCell>
      <TableCell className="p-3 TableCell">Revenue Generated</TableCell>
      <TableCell className="p-3 TableCell">Total Commission</TableCell>
    </TableRow>
  );
}


