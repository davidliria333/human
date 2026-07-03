import { ContributeHero } from "@/components/contribute/ContributeHero";
import { TaskGrid } from "@/components/contribute/TaskGrid";
import { ContributorStories } from "@/components/contribute/ContributorStories";
import { CommunityBand } from "@/components/contribute/CommunityBand";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contribute — Human Archive",
};

export default function ContributePage() {
  return (
    <>
      <ContributeHero />
      <TaskGrid />
      <ContributorStories />
      <CommunityBand />
    </>
  );
}
