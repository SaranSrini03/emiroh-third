import React from "react";

type TableCellProps = {
  children?: React.ReactNode;
  className?: string;
};

export default function TableCell({ children, className = "" }: TableCellProps) {
  return <td className={className}>{children}</td>;
}


