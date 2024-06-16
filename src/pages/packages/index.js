import dynamic from "next/dynamic";
import HomeLayout from "@/components/layouts/home";
import { PackagesSearchSectionLoading } from "@/components/sections/packages/PackagesSearchSection";
import FullPackagesListSection from "@/components/sections/packages/FullPackagesListSection";

const PackagesSearchSection = dynamic(
  () => import("@/components/sections/packages/PackagesSearchSection"),
  {
    ssr: false,
    loading: () => <PackagesSearchSectionLoading />,
  }
);
export default function PackagesPage() {
  return (
    <HomeLayout>
      <PackagesSearchSection />
      <FullPackagesListSection />
    </HomeLayout>
  );
}
