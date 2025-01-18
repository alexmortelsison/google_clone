import SearchHeader from "@/components/SearchHeader";
import React, { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <SearchHeader />
      {children}
    </div>
  );
}
