import HomeLayout from "@/components/layouts/home";
import FullResortDetailsSection from "@/components/sections/resorts/FullResortDetailsSection";
import { useRouter } from "next/router";

export default function ResortDetailsPage() {
  const { query: slug } = useRouter();

  console.log(slug);
  return (
    <HomeLayout>
      <FullResortDetailsSection />
    </HomeLayout>
  );
}
