"use client";

import { useState } from "react";
import { MarketplaceHero } from "@/components/marketplace/MarketplaceHero";
import { DatasetGrid } from "@/components/marketplace/DatasetGrid";

export default function MarketplacePage() {
  const [filter, setFilter] = useState("All");

  return (
    <>
      <MarketplaceHero active={filter} onChange={setFilter} />
      <DatasetGrid filter={filter} />
    </>
  );
}
