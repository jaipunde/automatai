import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AutomatAI - Your Business Runs on Repeat Tasks. We Make Them Disappear.",
  description: "Stop wasting hours on work a computer should handle. We build intelligent automation that works while you sleep—so you can focus on what actually grows your business.",
  keywords: "automation, AI, business automation, workflow automation, productivity, lead generation, content creation, sales automation",
  authors: [{ name: "AutomatAI" }],
  openGraph: {
    title: "AutomatAI - Intelligent Business Automation",
    description: "We turn 'I wish this was automatic' into reality. AI-powered automation for recruiting, marketing, sales, and more.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AutomatAI - Intelligent Business Automation",
    description: "We turn 'I wish this was automatic' into reality.",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
