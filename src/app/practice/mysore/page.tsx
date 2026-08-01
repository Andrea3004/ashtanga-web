import { PracticeDetailPage } from "@/components/PracticeDetailPage";
import { practiceDetailPages } from "@/data/practicePages";
import { createPageMetadata } from "@/lib/seo";

const page = practiceDetailPages.mysore;

export const metadata = createPageMetadata({
  title: page.metadata.title,
  description: page.metadata.description,
  path: page.path
});

export default function MysorePracticePage() {
  return <PracticeDetailPage page={page} />;
}
