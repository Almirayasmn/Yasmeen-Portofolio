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
        className="antialiased selection:bg-fanta selection:text-cyber-black bg-cyber-black text-cyber-text font-sans relative overflow-x-hidden"
        suppressHydrationWarning
      >
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}