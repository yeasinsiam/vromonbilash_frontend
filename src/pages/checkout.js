import HomeLayout from "@/components/layouts/home";
import dynamic from "next/dynamic";
import { CheckoutBreadcrumbSectionLoading } from "@/components/sections/checkout/Breadcrumb";
import { FullCheckoutSectionLoading } from "@/components/sections/checkout/FullCheckoutSection";

const CheckoutBreadcrumbSection = dynamic(
  () => import("@/components/sections/checkout/Breadcrumb"),
  {
    ssr: false,
    loading: () => <CheckoutBreadcrumbSectionLoading />,
  }
);
const FullCheckoutSection = dynamic(
  () => import("@/components/sections/checkout/FullCheckoutSection"),
  {
    ssr: false,
    loading: () => <FullCheckoutSectionLoading />,
  }
);

export default function CheckoutPage() {
  return (
    <HomeLayout>
      {/* Breadcrumb  */}
      <CheckoutBreadcrumbSection />

      {/* <FullCheckoutSection /> */}
      <FullCheckoutSection />
    </HomeLayout>
  );
}
