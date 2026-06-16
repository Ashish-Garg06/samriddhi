import Link from "next/link";
import { Arrow } from "@/components/Icons";
import LeafMark from "@/components/LeafMark";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className="section center" style={{ paddingTop: 120, paddingBottom: 120 }}>
      <div className="wrap">
        <span style={{ color: "var(--moss)" }}><LeafMark size={56} /></span>
        <h1 className="display-lg" style={{ marginTop: 18 }}>Page not found</h1>
        <p className="lead" style={{ margin: "16px auto 30px" }}>
          The page you're looking for has wandered off the trail. Let's get you back.
        </p>
        <Link href="/" className="btn btn--green">Return home <Arrow /></Link>
      </div>
    </section>
  );
}
