import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yasmeen Almira — Developer Relations & UI/UX Designer | Remote Ready",
  description:
    "Portfolio of Yasmeen Almira — Developer Relations, UI/UX Design, Project Operations, and Fullstack Web Development. Open to global remote opportunities.",
  keywords: [
    "Yasmeen Almira",
    "Developer Relations",
    "DevRel",
    "UI/UX Designer",
    "Remote Frontend Developer",
    "Project Operations",
    "Web3 Community",
    "Next.js Portfolio",
  ],
  authors: [{ name: "Yasmeen Almira" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className="antialiased selection:bg-[#2b1810] selection:text-[#fce7f3] bg-[#fdf2f8] text-[#2b1810] font-sans relative overflow-x-hidden"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}