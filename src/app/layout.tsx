import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "rddlans.online — Custom Software, Security Research & Hardware",
  description:
    "Ranger-Andrews Research & Development. Custom mobile & web apps, security research and penetration testing, and custom electronics & firmware. Recent work: Spider Protocol and BCW Mobile.",
  keywords: [
    "custom web development",
    "mobile apps",
    "penetration testing",
    "security research",
    "firmware development",
    "custom electronics",
    "ESP32",
    "freelance engineer",
    "rddlans",
  ],
  openGraph: {
    title: "rddlans.online — Custom Software, Security Research & Hardware",
    description:
      "Custom mobile & web apps, security research and penetration testing, and custom electronics & firmware. Recent work: Spider Protocol and BCW Mobile.",
    url: "https://rddlans.online",
    siteName: "rddlans.online",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "rddlans.online — Custom Software, Security Research & Hardware",
    description:
      "Custom mobile & web apps, security research and penetration testing, and custom electronics & firmware.",
  },
};

export const viewport: Viewport = {
  themeColor: "#04060c",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}