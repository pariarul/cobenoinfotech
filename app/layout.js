import "./globals.css";

export const metadata = {
  title: "Cobenoinfotech | Web Development & IT Training",
  description:
    "Empowering businesses through technology & skill development. Web development, software solutions, and industry-ready IT training programs.",
  keywords: "web development, software solutions, IT training, React, Next.js, Full Stack Development",
  generator: "Next.js",
  icons: {
    icon: "/cobeno_logo.png",
  },

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300"
      >
        {children}
      </body>
    </html>
  );
}
