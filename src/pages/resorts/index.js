import HomeLayout from "@/components/layouts/home";
import ResortListSection from "@/components/sections/resorts/ResortListSection";
import { ResortsSearchSectionLoading } from "@/components/sections/resorts/ResortsSearchSection";
import dynamic from "next/dynamic";

const ResortsSearchSection = dynamic(
  () => import("@/components/sections/resorts/ResortsSearchSection"),
  {
    ssr: false,
    loading: () => <ResortsSearchSectionLoading />,
  }
);

export default function ResortsPage() {
  return (
    <HomeLayout>
      <ResortsSearchSection />
      <ResortListSection />
    </HomeLayout>
  );
}
