import type { Metadata } from "next";
import { BlogIndex } from "@/components/blog/BlogIndex";

export const metadata: Metadata = {
  title: "Blog — Human Archive",
};

export default function BlogPage() {
  return <BlogIndex />;
}
