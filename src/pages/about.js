import Link from "next/link";
import DateRangePicker from "react-daterange-picker";

export default function AboutPage() {
  return (
    <div>
      <Link href="/">Home</Link>
      <br />
      <DateRangePicker />
    </div>
  );
}
