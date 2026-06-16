import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  metadataBase: new URL("https://www.samriddhi.in"),
  title: {
    default: "Samriddhi — Women-Led Rural Enterprise in Himachal Pradesh",
    template: "%s · Samriddhi",
  },
  description:
    "Samriddhi empowers 3,000 rural women across 15 villages in Himachal Pradesh through value addition, processing, branding and marketing of natural Himalayan products.",
  keywords: [
    "Samriddhi", "Himachal Pradesh", "rural enterprise", "women empowerment",
    "herbal products", "essential oils", "sustainable livelihoods", "CSR",
  ],
  openGraph: {
    title: "Samriddhi — Women-Led Rural Enterprise in Himachal Pradesh",
    description:
      "A women-led rural enterprise movement for sustainable livelihoods in Himachal Pradesh.",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#16432b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,400;1,9..144,500&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
