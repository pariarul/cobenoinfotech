import "./globals.css";
import BottomNav from "@/components/BottomNav";
import WhatsAppChat from "@/components/WhatsAppChat";

export const metadata = {
  title: "Cobenoinfotech | Premium Web & App Development Services",
  description:
    "Empowering businesses through cutting-edge technology & modern software solutions. Specializing in Web Development, Mobile Apps, and Cloud Infrastructure.",

  keywords: [
    "Cobenoinfotech",
    "Web Development",
    "Mobile App Development",
    "Software Solutions",
    "Next.js Development",
    "React Native",
    "Enterprise Software",
  ],


  icons: {
    icon: "/cobeno_logo.png",
  },

  /* 🔹 Open Graph (Facebook, Instagram, LinkedIn) */
  openGraph: {
    title: "Cobenoinfotech | Web & Mobile Solutions",
    description:
      "Professional web and mobile development services. Build high-performance digital products with Cobenoinfotech.",
    url: "https://www.cobenoinfotech.com", // change to your domain
    siteName: "Cobenoinfotech",
    images: [
      {
        url: "/cobeno_logo.png", // best: 1200x630 image
        width: 1200,
        height: 630,
        alt: "Cobenoinfotech - Premium Web & App Development",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  /* 🔹 Twitter (also helps Instagram preview indirectly) */
  twitter: {
    card: "summary_large_image",
    title: "Cobenoinfotech | Web & App Development Services",
    description:
      "Empowering businesses through modern web and mobile solutions.",
    images: ["/cobeno_logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300 relative">
        {children}
        <BottomNav />
        <WhatsAppChat />
      </body>
    </html>
  );
}
