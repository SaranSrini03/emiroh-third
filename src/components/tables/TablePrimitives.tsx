import React from "react";

export function Table({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return <table className={className}>{children}</table>;
}

export function TableContainer({ className = "", children, component: Component }: { className?: string; children: React.ReactNode; component?: React.ComponentType<{ className?: string; children: React.ReactNode }> }) {
  if (Component) {
    return <Component className={className}>{children}</Component>;
  }
  return <div className={className}>{children}</div>;
}

export function TableHead({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return <thead className={className}>{children}</thead>;
}

export function Paper({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return <div className={className}>{children}</div>;
}

export function TableRow({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return <tr className={className}>{children}</tr>;
}


