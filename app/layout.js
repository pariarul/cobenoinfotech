import "./globals.css";

export const metadata = {
  title: "Cobenoinfotech | Web Development & IT Training",
  description:
    "Empowering businesses through technology & skill development. Web development, software solutions, and industry-ready IT training programs.",

  keywords: [
    "Cobenoinfotech",
    "Web Development",
    "IT Training",
    "Software Company",
    "React Training",
    "Next.js",
    "Full Stack Development",
  ],


  icons: {
    icon: "/cobeno_logo.png",
  },

  /* 🔹 Open Graph (Facebook, Instagram, LinkedIn) */
  openGraph: {
    title: "Cobenoinfotech | Web Development & IT Training",
    description:
      "Professional web development services & industry-ready IT training programs. Build skills. Build solutions.",
    url: "https://www.cobenoinfotech.com", // change to your domain
    siteName: "Cobenoinfotech",
    images: [
      {
        url: "/cobeno_logo.png", // best: 1200x630 image
        width: 1200,
        height: 630,
        alt: "Cobenoinfotech - Web Development & IT Training",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  /* 🔹 Twitter (also helps Instagram preview indirectly) */
  twitter: {
    card: "summary_large_image",
    title: "Cobenoinfotech | Web Development & IT Training",
    description:
      "Empowering businesses through modern web solutions & practical IT training.",
    images: ["/cobeno_logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
