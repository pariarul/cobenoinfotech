import "./globals.css";
import BottomNav from "@/components/BottomNav";
import WhatsAppChat from "@/components/WhatsAppChat";

export const metadata = {
  title: "Cobenoinfotech | Leading Web & Mobile App Development Agency in India",
  description:
    "Cobenoinfotech provides premium web development, mobile app solutions, and custom software engineering. Specializing in SaaS, E-commerce, and Fintech apps in Perambalur, Coimbatore, and across India.",

  keywords: [
    "Cobenoinfotech",
    "Web Development India",
    "Mobile App Development Perambalur",
    "Custom Software Development",
    "E-commerce Website Design",
    "SaaS Product Development",
    "UI/UX Design Services",
    "Next.js Agency India",
    "React Native App Development",
    "Fintech App Solutions",
    "Admin Dashboard Development",
    "Cloud Infrastructure Services",
    "SEO Services for Businesses",
    "API Development and Integration",
    "Full Stack Development",
    "Frontend Development Services",
    "Backend Engineering",
    "Node.js Development",
    "Real-time Inventory Systems",
    "CRM Software Development",
    "Digital Transformation Agency",
    "Tech Support for Startups",
    "IT Consulting Perambalur",
    "App Development Tamil Nadu",
    "Web Design Coimbatore",
    "Progressive Web Apps (PWA)",
    "Responsive Web Design",
    "Hybrid Mobile Applications",
    "Scalable Web Applications",
    "Affordable IT Solutions India",
    "Software Startup Solutions",
    "Web Portals Development"
  ],

  icons: {
    icon: "/cobeno_logo.png",
  },

  /* 🔹 Open Graph (Facebook, Instagram, LinkedIn) */
  openGraph: {
    title: "Cobenoinfotech | High-Performance Web & Mobile Solutions",
    description:
      "Transform your business with Cobenoinfotech's professional web and mobile development services. Specializing in scalable digital products.",
    url: "https://www.cobenoinfotech.com",
    siteName: "Cobenoinfotech",
    images: [
      {
        url: "/cobeno_logo.png",
        width: 1200,
        height: 630,
        alt: "Cobenoinfotech - Premium Web & App Development",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  /* 🔹 Twitter Support */
  twitter: {
    card: "summary_large_image",
    title: "Cobenoinfotech | Expert Software Development Agency",
    description:
      "Building the next generation of web and mobile applications for global businesses.",
    images: ["/cobeno_logo.png"],
  },
  
  /* 🔹 Robots & Search Indexing */
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
